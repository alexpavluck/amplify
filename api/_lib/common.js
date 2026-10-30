/* Shared helpers for the Problem Coach routes (/api/coach, /api/brief).
   Env vars: ANTHROPIC_API_KEY (required), COACH_MODEL, BRIEF_MODEL,
   ACCESS_CODES (comma-separated; when set, a matching code is required),
   MAX_CALLS_PER_SESSION (default 30), COACH_MOCK=1 (canned replies, no API calls). */
const AnthropicModule = require("@anthropic-ai/sdk");
const Anthropic = AnthropicModule.default || AnthropicModule;

const MAX_FIELD_CHARS = 2000;
const FALLBACK_BETA = "server-side-fallback-2026-07-01";

let client;
function getClient() {
  if (!client) client = new Anthropic(); // reads ANTHROPIC_API_KEY
  return client;
}

const isMock = () => process.env.COACH_MOCK === "1";
const accessCodes = () =>
  (process.env.ACCESS_CODES || "").split(",").map((c) => c.trim().toUpperCase()).filter(Boolean);

function checkAccess(code) {
  const codes = accessCodes();
  return codes.length === 0 || codes.includes(String(code || "").trim().toUpperCase());
}

// In-memory caps. Each warm function instance keeps its own counts, so this
// is a pilot-level guard; move to Vercel KV / Upstash if abuse appears.
const sessionCalls = new Map();
const ipCalls = new Map();
const IP_WINDOW_MS = 60 * 60 * 1000;
const IP_MAX_PER_WINDOW = 120;

function overLimit(sessionId, ip) {
  const maxPerSession = Number(process.env.MAX_CALLS_PER_SESSION || 30);
  const s = (sessionCalls.get(sessionId) || 0) + 1;
  sessionCalls.set(sessionId, s);
  const now = Date.now();
  const rec = ipCalls.get(ip);
  const fresh = !rec || now - rec.start > IP_WINDOW_MS;
  const ipRec = fresh ? { start: now, n: 1 } : { start: rec.start, n: rec.n + 1 };
  ipCalls.set(ip, ipRec);
  return s > maxPerSession || ipRec.n > IP_MAX_PER_WINDOW;
}

// Cap every string in the learner's state before it goes to the model.
function truncateDeep(v) {
  if (typeof v === "string") return v.length > MAX_FIELD_CHARS ? v.slice(0, MAX_FIELD_CHARS) + " […]" : v;
  if (Array.isArray(v)) return v.slice(0, 40).map(truncateDeep);
  if (v && typeof v === "object") {
    const out = {};
    for (const [k, val] of Object.entries(v)) out[k] = truncateDeep(val);
    return out;
  }
  return v;
}

// Messages call with server-side refusal fallback; retried once without the
// fallback beta if the API rejects it, so a beta change can't take the coach down.
async function createMessage(params) {
  const c = getClient();
  try {
    return await c.beta.messages.create({ ...params, betas: [FALLBACK_BETA], fallbacks: "default" });
  } catch (err) {
    if (err instanceof Anthropic.BadRequestError && /fallback/i.test(err.message || "")) {
      return await c.messages.create(params);
    }
    throw err;
  }
}

function sendError(res, status, message) {
  return res.status(status).json({ error: { message } });
}

// Map SDK errors to learner-safe messages; never echo learner text.
function handleApiError(res, err) {
  if (err instanceof Anthropic.AuthenticationError || err instanceof Anthropic.PermissionDeniedError) {
    return sendError(res, 500, "The coach is not configured yet. Please tell your instructor.");
  }
  if (err instanceof Anthropic.RateLimitError) {
    return sendError(res, 429, "The coach is busy right now. Wait a minute and try again.");
  }
  if (err instanceof Anthropic.APIConnectionError || err instanceof Anthropic.InternalServerError) {
    return sendError(res, 502, "Couldn't reach the coach. Your answer is saved. Try again or move on.");
  }
  if (err instanceof Anthropic.APIError && /credit balance/i.test(err.message || "")) {
    return sendError(res, 402, "The course AI credit has run out. Please tell your instructor.");
  }
  console.error("coach api error", err && err.status, err && err.name);
  return sendError(res, 502, "Something went wrong with the coach. Your answer is saved. Try again or move on.");
}

function logCall(route, meta) {
  // Metadata only. Never log learner text.
  console.log(JSON.stringify({ route, ...meta }));
}

function clientIp(req) {
  return String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
}

module.exports = {
  Anthropic,
  isMock,
  accessCodes,
  checkAccess,
  overLimit,
  truncateDeep,
  createMessage,
  sendError,
  handleApiError,
  logCall,
  clientIp,
};

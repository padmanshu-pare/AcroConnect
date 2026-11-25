// One consistent response shape for the whole API:
// { success: true, message, data }
export function sendSuccess(res, data = null, message = "OK", statusCode = 200) {
  return res.status(statusCode).json({ success: true, message, data });
}

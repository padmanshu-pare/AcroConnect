import { env } from "../config/env.js";

// Central error handler. Error response shape:
// { success: false, message, details? }
export function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";
  let details = err.details || null;

  if (err.name === "ValidationError" && err.errors) {
    statusCode = 400;
    message = "Validation failed";
    details = Object.values(err.errors).map((e) => e.message);
  } else if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${err.path}`;
  } else if (err.code === 11000) {
    statusCode = 409;
    message = "Duplicate value";
    details = err.keyValue || null;
  }

  // Never leak internal error messages in production
  if (statusCode === 500 && env.nodeEnv === "production") {
    message = "Internal server error";
  }
  if (statusCode === 500) console.error(err);

  const body = { success: false, message };
  if (details) body.details = details;
  if (env.nodeEnv !== "production" && statusCode === 500) body.stack = err.stack;

  res.status(statusCode).json(body);
}

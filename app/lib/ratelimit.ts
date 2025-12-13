/**
 * Rate Limiting Utility
 *
 * Purpose:
 * This module provides a simple in-memory rate limiter for API routes.
 * It limits how many requests an IP address can make within a specified time window.
 *
 * Features:
 * - Tracks request count per IP using a Map.
 * - Supports configurable request limit and time window.
 * - Resets the count automatically after the time window expires.
 *
 * Usage:
 * const allowed = rateLimit(ip, limit = 3, windowMs = 60000);
 * if (!allowed) {
 *  // Block request or return 429 Too Many Requests
 * }
 *
 * Notes:
 * - This is an in-memory solution; it works only for a single server instance.
 * - For multiple server instances or production-scale apps, consider using Redis or another shared store.
 */

const rateMap = new Map<string, { count: number; time: number }>();

export function rateLimit(ip: string, limit = 3, windowMs = 60_000) {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry) {
    rateMap.set(ip, { count: 1, time: now });
    return true;
  }

  if (now - entry.time > windowMs) {
    rateMap.set(ip, { count: 1, time: now });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count++;
  return true;
}

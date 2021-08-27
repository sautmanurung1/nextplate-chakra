/**
 * Example usage of custom next-connect handlers
 */

import { createApiHandler } from "~lib/api";

export default createApiHandler()
  .get(async (_req, res) => {
    return res.json({
      message: "ping from get request",
    });
  })
  .post(async (req, res) => {
    return res.json({
      message: "ping from post request",
      body: req.body as unknown,
    });
  })
  .all(async (req, res) => {
    return res.json({
      message: `ping from ${req.method as string} request`,
    });
  });

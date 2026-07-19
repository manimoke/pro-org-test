// Vercel serverless function — wraps the Express app so all /api/* routes
// are handled by a single Node.js function on Vercel.
import app from "../artifacts/api-server/src/app.js";

export default app;

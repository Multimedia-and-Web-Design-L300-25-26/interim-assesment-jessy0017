import "dotenv/config";

import app from "./src/app.js";
import { connectDb } from "./src/config/db.js";

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDb(process.env.MONGO_URI);

  app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exitCode = 1;
});

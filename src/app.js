import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import cryptoRoutes from "./routes/cryptoRoutes.js";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";
app.use(
  cors({
    origin: clientOrigin,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Coinbase Clone API" });
});

app.use(authRoutes);
app.use(profileRoutes);
app.use("/crypto", cryptoRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Server error" });
});

export default app;

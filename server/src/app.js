import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routers/predict.router.js";  // Adjust the path if needed

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Mount the predict router under /api
app.use("/api", router);

// Optional: Add a test route to verify the server is up
app.get("/", (req, res) => {
  res.send("Hello, Express server is running!");
});

export { app };

import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

/* ------------------------- Middlewares ------------------------- */
const corsOptions = {
  origin: [
    "http://localhost:3000", // Localhost for development
    "http://localhost:3001", // Localhost for development
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------------- Health Check -------------------------- */

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀",
  });
});



/* -------------------------- 404 Handler -------------------------- */

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;

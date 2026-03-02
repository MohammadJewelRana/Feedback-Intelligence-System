import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import notFound from "./middleware/notFound";
import router from "./routes";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app: Application = express();

//Middlewares
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

app.use("/api", router);

// base route
app.get("/api", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Feedback Backend Server is running 🚀",
  });
});

app.use(globalErrorHandler);
app.use(notFound); //not found route

export default app;

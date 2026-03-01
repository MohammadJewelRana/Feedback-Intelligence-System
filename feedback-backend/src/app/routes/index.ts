import { Router } from "express";
import FeedbackRoutes from "../module/feedback/feedback.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/feedback",
    route: FeedbackRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

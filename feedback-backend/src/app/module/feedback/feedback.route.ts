import { Router } from "express";
import { FeedbackController } from "./feedback.controller";

const router = Router();

router.post("/create-feedback", FeedbackController.createFeedback);
router.get("/", FeedbackController.getSingleFeedback);
router.get("/:id", FeedbackController.getAllFeedback);
router.patch("/:id", FeedbackController.updateSingleFeedback);
router.patch("/:id", FeedbackController.deleteSingleFeedback);

const FeedbackRoutes = router;

export default FeedbackRoutes;

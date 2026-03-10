import { Router } from "express";
import { FeedbackController } from "./feedback.controller";

const router = Router();

router.post("/create-feedback", FeedbackController.createFeedback);
router.get("/", FeedbackController.getAllFeedback);
router.get("/:id", FeedbackController.getSingleFeedback);
router.patch("/:id", FeedbackController.updateSingleFeedback);
router.delete("/:id", FeedbackController.deleteSingleFeedback);

const FeedbackRoutes = router;

export default FeedbackRoutes;

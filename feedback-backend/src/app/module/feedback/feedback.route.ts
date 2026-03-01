import { Router } from "express";
import { FeedbackController } from "./feedback.controller";


const router=Router();

router.post('/create-feedback',FeedbackController.createFeedback)
router.get('/',FeedbackController.getAllFeedback)

const FeedbackRoutes=router;

export default FeedbackRoutes;
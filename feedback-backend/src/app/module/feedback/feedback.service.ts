 
import { IFeedback } from "./feedback.interface";
import { FeedbackModel } from "./feedback.model";

const createFeedbackIntoDB = async (payload: IFeedback) => {
  if (!payload) {
    throw new Error("Payload is required");
  }
  //   console.log(payload);

  const result = await FeedbackModel.create(payload);

  return result;
};

const getAllFeedback = async () => {
  const result = await FeedbackModel.find().sort({ createdAt: -1 }).lean();
  return result;
};

export const FeedbackServices = {
  createFeedbackIntoDB,
  getAllFeedback,
};

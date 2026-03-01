import mongoose from "mongoose";
import { sendTeamEmail } from "../../utils/email.service";
import { analyzeFeedbackWithLLM } from "../../utils/llm.service";
import { IFeedback } from "./feedback.interface";
import { FeedbackModel } from "./feedback.model";

//create feedback
const createFeedbackIntoDB = async (payload: IFeedback) => {
  if (!payload) {
    throw new Error("Feedback data missing");
  }

  if (!payload?.message) {
    throw new Error("Message is required");
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const aiData = await analyzeFeedbackWithLLM(payload.message);

    const [createdFeedback] = await FeedbackModel.create(
      [{ ...payload, ...aiData }],
      { session }
    );

    await sendTeamEmail(aiData.team, createdFeedback);

    await session.commitTransaction();
    session.endSession();

    return createdFeedback;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error("Transaction rolled back:", error);
    throw new Error("Feedback creation failed. Rolled back.");
  }
};

//get all feedback
const getAllFeedback = async () => {
  const result = await FeedbackModel.find().sort({ createdAt: -1 }).lean();
  return result;
};

//get single feedback by id
const getSingleFeedback = async (id: string) => {
  if (!id) {
    throw new Error("Feedback id missing!!");
  }
  const result = await FeedbackModel.findById({ id });
  return result;
};

//delete single feedback by id
const deleteSingleFeedback = async (id: string) => {
  if (!id) {
    throw new Error("Feedback id missing!!");
  }
  const result = await FeedbackModel.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    { new: true }
  );
  return result;
};

//update single feedback by id
const updateSingleFeedback = async (
  id: string,
  payload: Partial<IFeedback>
): Promise<IFeedback | null> => {
  if (!id) {
    throw new Error("Feedback ID is required");
  }

  if (!payload || Object.keys(payload).length === 0) {
    throw new Error("Update payload cannot be empty");
  }

  const result = await FeedbackModel.findByIdAndUpdate(
    id,
    { $set: payload },
    {
      new: true,
      runValidators: true,
    }
  );

  return result;
};

export const FeedbackServices = {
  createFeedbackIntoDB,
  getAllFeedback,
  getSingleFeedback,
  deleteSingleFeedback,
  updateSingleFeedback,
};

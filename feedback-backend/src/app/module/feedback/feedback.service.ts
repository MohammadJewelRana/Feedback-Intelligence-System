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

// get all feedback
const getAllFeedback = async ({ name, category, priority }: any) => {
  const filter: Record<string, any> = { isDeleted: false };

  if (name?.trim()) {
    filter.name = { $regex: name.trim(), $options: "i" };
  }

  if (category && category !== "all") {
    filter.category = category;
  }

  if (priority && priority !== "all") {
    filter.priority = priority;
  }

  return FeedbackModel.find(filter).sort({ createdAt: -1 }).lean();
};

//get single feedback by id
const getSingleFeedback = async (id: string) => {
  if (!id) throw new Error("Feedback id missing!!");

  const result = await FeedbackModel.findOne({
    _id: id,
    isDeleted: false,
  }).lean();
  return result;
};

//delete single feedback by id
const deleteSingleFeedback = async (id: string) => {
  if (!id) throw new Error("Feedback id missing!!");

  const result = await FeedbackModel.findByIdAndUpdate(
    { _id: id, isDeleted: false },
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
  if (!id) throw new Error("Feedback ID is required");

  if (!payload || Object.keys(payload).length === 0) {
    throw new Error("Update payload cannot be empty");
  }

  const result = await FeedbackModel.findByIdAndUpdate(
    { _id: id, isDeleted: false },
    { $set: payload },
    {
      new: true,
      runValidators: true,
    }
  );

  return result;
};

//get feedback statistics
const getFeedbackStats = async () => {
  const filter = { isDeleted: false };

  const totalFeedback = await FeedbackModel.countDocuments(filter);

  const highPriority = await FeedbackModel.countDocuments({
    ...filter,
    priority: "High",
  });

  const negativeSentiment = await FeedbackModel.countDocuments({
    ...filter,
    sentiment: "Negative",
  });

  return {
    totalFeedback,
    highPriority,
    negativeSentiment,
  };
};

export const FeedbackServices = {
  createFeedbackIntoDB,
  getAllFeedback,
  getSingleFeedback,
  deleteSingleFeedback,
  updateSingleFeedback,
  getFeedbackStats,
};

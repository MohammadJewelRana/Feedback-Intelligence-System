import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { FeedbackServices } from "./feedback.service";
import httpStatus from "http-status";

// create feedback
const createFeedback = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await FeedbackServices.createFeedbackIntoDB(payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Feedback created successfully",
    data: result,
  });
});

//get all feedback
const getAllFeedback = catchAsync(async (req, res) => {
  const result = await FeedbackServices.getAllFeedback(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Feedback fetched successfully",
    data: result,
  });
});

//get single  feedback
const getSingleFeedback = catchAsync(async (req, res) => {
  const id = req.params.id as string;
  const result = await FeedbackServices.getSingleFeedback(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Feedback fetched successfully",
    data: result,
  });
});

//delete single  feedback
const deleteSingleFeedback = catchAsync(async (req, res) => {
  const id = req.params.id as string;
  const result = await FeedbackServices.deleteSingleFeedback(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Feedback deleted successfully",
    data: result,
  });
});

//update single  feedback
const updateSingleFeedback = catchAsync(async (req, res) => {
  const id = req.params.id as string;
  const payload = req.body;
  const result = await FeedbackServices.updateSingleFeedback(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Feedback updated successfully",
    data: result,
  });
});

export const FeedbackController = {
  createFeedback,
  getAllFeedback,
  getSingleFeedback,
  deleteSingleFeedback,
  updateSingleFeedback,
};

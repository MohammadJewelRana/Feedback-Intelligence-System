import { FeedbackServices } from "./feedback.service";
import { NextFunction, Request, Response } from "express";

// create feedback
const createFeedback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body;
    const result = await FeedbackServices.createFeedbackIntoDB(payload);
    res.status(201).json({
      success: true,
      message: "Feedback created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//get all feedback
const getAllFeedback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await FeedbackServices.getAllFeedback();

    res.status(200).json({
      success: true,
      message: "Feedback fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//get single  feedback
const getSingleFeedback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id as string;
    const result = await FeedbackServices.getSingleFeedback(id);

    res.status(200).json({
      success: true,
      message: "Single Feedback fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//delete single  feedback
const deleteSingleFeedback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id as string;
    const result = await FeedbackServices.deleteSingleFeedback(id);

    res.status(200).json({
      success: true,
      message: "Single Feedback deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//update single  feedback
const updateSingleFeedback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id as string;
    const payload = req.body;
    const result = await FeedbackServices.updateSingleFeedback(id, payload);

    res.status(200).json({
      success: true,
      message: "Single Feedback updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const FeedbackController = {
  createFeedback,
  getAllFeedback,
  getSingleFeedback,
  deleteSingleFeedback,
  updateSingleFeedback,
};

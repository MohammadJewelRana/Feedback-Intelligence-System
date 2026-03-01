import { FeedbackServices } from "./feedback.service";
import { NextFunction, Request, Response } from "express";

const createFeedback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const  payload  = req.body;
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

export const FeedbackController = {
  createFeedback,
  getAllFeedback,
};

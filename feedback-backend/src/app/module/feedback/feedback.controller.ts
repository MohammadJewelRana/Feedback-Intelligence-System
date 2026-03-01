import { FeedbackServices } from "./feedback.service";
import { Request, Response } from "express";

const createFeedback = async (req: Request, res: Response) => {
  const { payload } = req.params;

  const result = await FeedbackServices.createFeedbackIntoDB(payload);

  res.send({
    message: "successfully created",
  });
};
const getAllFeedback = async (req: Request, res: Response) => {
  const result = await FeedbackServices.getAllFeedback();

  res.send({
    message: "successfully fetched",
    data: result,
  });
};

export const FeedbackController = {
  createFeedback,
  getAllFeedback,
};

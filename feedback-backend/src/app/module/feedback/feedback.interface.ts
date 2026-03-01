


export interface IFeedback {
  name: string;
  email?: string;
  message: string;
  rating?: number;

  category?: string;
  priority?: string;
  sentiment?: string;
  team?: string;

  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
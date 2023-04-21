export interface ITodo {
  id?: string;
  title: string;
  description: string;
  userId?: string;
  isPublic?: boolean;
  isCompleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

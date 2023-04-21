export interface ITodo {
  id?: string;
  title: string;
  description: string;
  isPublic: boolean;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string | null;
}

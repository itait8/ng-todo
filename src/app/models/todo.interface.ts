export interface ITodo {
  id: number;
  Title: String;
  description: String;
  isCompleted: boolean;
  isArchived: boolean;
  endDate: Date | number | String;
  selected: boolean;
}

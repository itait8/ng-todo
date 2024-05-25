export interface ITodo {
  id: String;
  Title: String;
  description: String;
  isCompleted: boolean;
  isArchived: boolean;
  endDate: Date | number | String;
  selected: boolean;
}

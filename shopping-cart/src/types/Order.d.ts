export interface Order {
  id: string;
  userId: string;
  itemIds: number[];
  total: number;
  date: Date;
}

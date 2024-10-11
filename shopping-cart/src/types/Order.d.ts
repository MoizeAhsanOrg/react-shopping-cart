export interface Order {
  id: number;
  userId: string;
  itemIds: number[];
  total: number;
  date: Date;
}

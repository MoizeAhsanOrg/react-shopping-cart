import { ShoppingHistory } from '../../types/ShoppingHistory';
import { shoppingHistoryData } from './data/shoppingHistory';

export const getShoppingHistoryByUserId = async (userId: string): Promise<ShoppingHistory[]> => {
  // Simulate an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return shoppingHistoryData.data.filter(history => history.userId === userId);
};

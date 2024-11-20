import { User } from '../../types/User';
import { users } from './data/users';

export const authenticateUser = async (
  username: string,
  password: string): Promise<User | null> => {
  const user = users.find(user => user.username === username && user.password === password) || null;
  await new Promise(resolve => setTimeout(resolve, 3000));
  return user;
};

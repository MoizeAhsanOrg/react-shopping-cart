import { User } from '../../types/User';
import { users } from './data/users';

export const authenticateUser = (username: string, password: string): User | null => {
  const user = users.find(user => user.username === username && user.password === password) || null;
  return user;
};

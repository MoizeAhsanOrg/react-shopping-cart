import { User } from '../../../types/User';

export const users: User[] = [
  { 
    username: 'admin', 
    password: 'admin123', 
    role: 'admin', 
    name: 'Admin', 
    email: 'admin@admin.com', 
    history: [] 
  },
  { 
    username: 'customer', 
    password: 'customer123', 
    role: 'customer', 
    name: 'Customer', 
    email: 'customer@customer.com', 
    history: [] 
  },
];

import { User } from '../../types/User';

const users: User[] = [
    { username: 'admin', password: 'admin123', role: 'admin', name: 'Admin', email: 'admin@admin.com', history: [] },
    { username: 'customer', password: 'customer123', role: 'customer', name: 'Customer', email: 'customer@customer.com', history: [] },
];

export const authenticateUser = (username: string, password: string): User | null => {
    console.log("here")
    const user =  users.find(user => user.username === username && user.password === password) || null;
    return user;
};

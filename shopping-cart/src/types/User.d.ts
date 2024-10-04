export interface User {
    username: string;
    password: string;
    role: 'admin' | 'customer';
    name: string;
    email: string;
    history: string[];
}

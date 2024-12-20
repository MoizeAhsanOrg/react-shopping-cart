export interface Item {
    quantity: number;
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    /** Optional image path */
    image?: string;
}

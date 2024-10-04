import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, clearCart } from '../redux/slices/cartSlice';
import { Table, Button } from 'react-bootstrap';
import { updateSales } from '../redux/slices/salesSlice';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    // Handler for checkout
    const handleCheckout = () => {
        // Process checkout and update sales data
        // For each item, update sales data based on category
        cartItems.forEach(item => {
            dispatch(updateSales({ category: item.category, quantity: 1 }));
        });

        dispatch(clearCart());
        alert('Checkout successful!');
    };

    // Handler for removing an item from the cart
    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="container">
            <h2>Your Cart</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="success" onClick={handleCheckout}>Checkout</Button>
        </div>
    );
};

export default Cart;
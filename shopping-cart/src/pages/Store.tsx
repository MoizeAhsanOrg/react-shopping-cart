import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchItems } from '../redux/thunks/inventoryThunks';
import { addToCart } from '../redux/slices/cartSlice';
import { updateStock } from '../redux/slices/inventorySlice';
import { Item } from '../types/Item';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Store: React.FC = () => {
  const items = useSelector((state: RootState) => state.inventory.items);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAddToCart = (item: Item) => {
    dispatch(addToCart(item));
    dispatch(updateStock({ id: item.id, quantity: 1 }));
  };

  return (
    <div>
      <h1>Available Items</h1>
      <Row>
        {items.map((item: Item) => (
          <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Category: {item.category}</Card.Text>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Card.Text>Stock: {item.stock}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(item)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchItems } from '../redux/thunks/inventoryThunks';
import { addToCart } from '../redux/slices/cartSlice';
import { updateStock } from '../redux/slices/inventorySlice';
import { Item } from '../types/Item';
import { Row, Col, Alert } from 'react-bootstrap';
import ItemCard from '../components/ItemCard';

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
      {items.length === 0 ? (
        <Alert variant="info" className="text-center">
          No items available at the moment.
        </Alert>
      ) : (
        <Row>
          {items.map((item: Item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <ItemCard item={item} onAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Store;

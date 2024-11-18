import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Item } from '../types/Item';
import './ItemCard.css';
interface ItemCardProps {
  item: Item;
  onAddToCart: (item: Item) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onAddToCart }) => {
  const defaultImage = 'placeholder.svg'; // Path to default image
  console.log('defaultImage', defaultImage);
  return (
    <Card className="item-card mb-4">
      <Card.Img
        variant="top"
        src={item.image || defaultImage}
        alt={item.name}
        className="item-card-img" />
      <Card.Body>
        <Card.Title className="item-card-title">{item.name}</Card.Title>
        <Card.Text className="item-card-text">Category: {item.category}</Card.Text>
        <Card.Text className="item-card-text">Price: ${item.price}</Card.Text>
        <Card.Text className="item-card-text">Stock: {item.stock}</Card.Text>
        <Button
          className="item-card-button"
          variant="primary"
          onClick={() => onAddToCart(item)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;

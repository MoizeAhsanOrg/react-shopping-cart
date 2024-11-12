
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ShoppingHistory } from '../types/ShoppingHistory';

interface HistoryItemProps {
  historyItem: ShoppingHistory;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ historyItem }) => {
  return (
    <ListGroup.Item>
      <strong>Order ID:</strong> {historyItem.orderId}<br />
      <strong>Date:</strong> {historyItem.date}<br />
      <strong>Total Amount:</strong> ${historyItem.totalAmount}<br />
      <strong>Status:</strong> {historyItem.status}
      <ul>
        {historyItem.items.map((item, itemIndex) => (
          <li key={itemIndex}>
            <strong>Item:</strong> {item.name} - Quantity: {item.quantity} - 
            Total: ${item.totalAmount}
          </li>
        ))}
      </ul>
    </ListGroup.Item>
  );
};

export default HistoryItem;

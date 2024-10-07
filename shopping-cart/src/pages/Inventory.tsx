import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchItems } from '../redux/thunks/inventoryThunks';
import { addItem, updateItem, deleteItem } from '../redux/slices/inventorySlice';
import { Item } from '../types/Item';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const Inventory: React.FC = () => {
  const items = useSelector((state: RootState) => state.inventory.items);
  const dispatch: AppDispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<Item | null>(null);
  const [formData, setFormData] = useState<Item>({
    id: 0,
    name: '',
    category: '',
    price: 0,
    stock: 0,
    quantity: 0
  });

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAdd = () => {
    setCurrentItem(null);
    setFormData({ id: 0, name: '', category: '', price: 0, stock: 0, quantity: 0 });
    setShowModal(true);
  };

  const handleEdit = (item: Item) => {
    setCurrentItem(item);
    setFormData({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      stock: item.stock,
      quantity: item.quantity
    });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  const handleSubmit = () => {
    if (currentItem) {
      dispatch(updateItem({ ...currentItem, ...formData }));
    } else {
      dispatch(addItem({ ...formData, id: new Date().getTime() })); // Assuming id is generated here
    }
    setShowModal(false);
  };

  return (
    <div className="container">
      <h2>Inventory Management</h2>
      <Button variant="primary" onClick={handleAdd}>Add Item</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(item)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentItem ? 'Edit Item' : 'Add Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formItemName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formItemQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
              />
            </Form.Group>
            <Form.Group controlId="formItemStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
              />
            </Form.Group>
            <Form.Group controlId="formItemPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>{currentItem ? 'Update' : 'Add'}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Inventory;

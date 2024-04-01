import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AddCategory = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/categories', { name });
      alert('Category added successfully');
      setName('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div>
      <h2>Add Category</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Category
        </Button>
      </Form>
    </div>
  );
};

export default AddCategory;

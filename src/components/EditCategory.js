import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const EditCategory = ({ category }) => {
  const [name, setName] = useState(category.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/categories/${category._id}`, { name });
      alert('Category updated successfully');
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div>
      <h2>Edit Category</h2>
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
          Update Category
        </Button>
      </Form>
    </div>
  );
};

export default EditCategory;

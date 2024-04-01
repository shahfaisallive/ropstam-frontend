import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const EditCar = ({ match }) => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    category: '',
    color: '',
    model: '',
    make: '',
    registrationNo: '',
  });

  useEffect(() => {
    fetchCategories();
    fetchCar();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchCar = async () => {
    try {
      const response = await axios.get(`/api/cars/${match.params.id}`);
      const { category, color, model, make, registrationNo } = response.data;
      setFormData({ category, color, model, make, registrationNo });
    } catch (error) {
      console.error('Error fetching car:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/cars/${match.params.id}`, formData);
      alert('Car updated successfully');
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  return (
    <div>
      <h2>Edit Car</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicColor">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicModel">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicMake">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicRegistrationNo">
          <Form.Label>Registration No</Form.Label>
          <Form.Control
            type="text"
            name="registrationNo"
            value={formData.registrationNo}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Car
        </Button>
      </Form>
    </div>
  );
};

export default EditCar;

import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/categories/${id}`);
      alert('Category deleted successfully');
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <Link to="/add-category">
        <Button variant="success" className="mb-3">
          Add Category
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category._id}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>
                <Link to={`/edit-category/${category._id}`}>
                  <Button variant="info" className="me-2">
                    Edit
                  </Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(category._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryList;

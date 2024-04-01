import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/cars/${id}`);
      alert('Car deleted successfully');
      fetchCars();
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div>
      <h2>Cars</h2>
      <Link to="/add-car">
        <Button variant="success" className="mb-3">
          Add Car
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Color</th>
            <th>Model</th>
            <th>Make</th>
            <th>Registration No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={car._id}>
              <td>{index + 1}</td>
              <td>{car.category}</td>
              <td>{car.color}</td>
              <td>{car.model}</td>
              <td>{car.make}</td>
              <td>{car.registrationNo}</td>
              <td>
                <Link to={`/edit-car/${car._id}`}>
                  <Button variant="info" className="me-2">
                    Edit
                  </Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(car._id)}>
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

export default CarList;

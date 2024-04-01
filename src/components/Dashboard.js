import React from 'react';

const Dashboard = () => {
  // Simulated count of registered cars
  const carCount = 50;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Number of registered cars: {carCount}</p>
    </div>
  );
}

export default Dashboard;

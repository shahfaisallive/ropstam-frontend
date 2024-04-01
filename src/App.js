import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import CategoryList from './components/CategoryList';
import CarList from './components/CarList';
import AddCar from './components/AddCar'; 
import EditCar from './components/EditCar'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/categories" component={CategoryList} />
        <Route path="/cars" exact component={CarList} />
        <Route path="/add-car" component={AddCar} /> 
        <Route path="/edit-car/:id" component={EditCar} /> 
      </div>
    </Router>
  );
}

export default App;

// src/Components/CustomerInput.js
import React, { useState } from 'react';
import axios from 'axios';
import './CustomerCard.css';

export default function CustomerInput() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const submitCustomer = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3005/', { 
        custName: name, 
        type: type // Changed custType to type to match the server model
      })
      .then((result) => {
        console.log(result.data);
        alert('Customer added successfully');
        setName(''); // Clear the input after submission
        setType(''); // Clear the input after submission
        
        setTimeout(function () {
          window.location.reload();
        }, 500);
      })
      .catch((error) => {
        console.error('Error adding customer:', error);
        alert('Failed to add customer');
      });
  };

  return (
    <div className="container">
      <h1 className="title">Add New Customer</h1>
      <form className="form" onSubmit={submitCustomer}>
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter customer name"
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Customer Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="input"
          >
            <option value="" disabled>Select customer type</option>
            <option value="criminal">Criminal</option>
            <option value="civil">Civil</option>
            <option value="original">Original</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Add Customer</button>
      </form>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import CustomerCard from "./CustomerCard";
import "./Home.css";
import { Link } from "react-router-dom";
import CaseTabs from "./CaseTabs"; // Adjust the path as necessary

const Home = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/api/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setFilteredCustomers(data); // Initially show all customers
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  // Function to filter customers based on selected type
  const filterCustomers = (customerType) => {
    if (customerType === 'all') {
      setFilteredCustomers(customers); // Show all customers
    } else {
      const filtered = customers.filter(customer => customer.type === customerType);
      setFilteredCustomers(filtered); // Show filtered customers
    }
  };

  return (
    <div className="home">
      <br/><br/><br/>
      <h2>Welcome to Advocate Billing</h2>
      <p>Your trusted partner in managing billing efficiently and effectively.</p>
      <br />
      <br />

      <CustomerCard />
      <br />
      <br />

      {/* Pass the filter function to CaseTabs */}
      <CaseTabs onTabChange={filterCustomers} />

      <br />
      <br />

      <div className="customer-list">
        {filteredCustomers.map((customer) => (
          <Link
            to={`/advocateBillingForm/${customer._id}`}
            key={customer._id}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className="customer-item">
              <h3>{customer.custName}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
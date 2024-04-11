import React, { useState, useEffect } from 'react';

function AllCustomers() {
  const [allCustomers, setAllCustomers] = useState([]); // Initialize as an empty array

  useEffect(() => {
    getAllCustomers();
  }, []); // Fetch customers only once when the component mounts

  const getAllCustomers = async () => {
    try {
      const url = `http://localhost:8083/getCustomers`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch customers');
      }

      const data = await response.json();
      console.log('Customer Fetched data:', data);
      setAllCustomers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-4">
                <h2 className="text-lg font-bold">Our Customers</h2>
      <ul className="list-none">
        {allCustomers.map(customer => (
          <li key={customer.id} className="border border-gray-300 p-4 my-2 rounded">
            <p className="font-semibold">{customer.name}</p>
            <p>Address: {customer.address}</p>
            <p>Birth Date: {customer.birthDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllCustomers;

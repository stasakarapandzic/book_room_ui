import React, { useState } from 'react';

function CreateCustomerForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/command/createCustomer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          address,
          birthDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create customer');
      }

      console.log('Customer created successfully');
      // Reset form fields after successful submission
      setName('');
      setAddress('');
      setBirthDate('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={handleAddressChange} required />
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <input type="date" id="birthDate" value={birthDate} onChange={handleBirthDateChange} required />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateCustomerForm;

import React, { useState } from 'react';

function BookRoomForm({ roomNumber, start, end, numberOfGuests }) {
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
    const diference=new Date(end).getTime()-new Date(start).getTime();
    const nights = Math.ceil(diference / (1000 * 60 * 60 * 24));
    console.log(nights);
    try {
      const response = await fetch('http://localhost:8081/command/bookRoom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomNumber,
          name,
          address,
          birthDate,
          start,
          nights,
          numberOfGuests,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to book room');
      }

      console.log('Room booked successfully');
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
      <h2>Book Room</h2>
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
        <div>
          {/* Other form fields */}
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookRoomForm;

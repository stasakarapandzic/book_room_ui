import React, { useState } from 'react';

function CancelBookingForm() {
  const [bookingId, setBookingId] = useState('');

  const handleBookingIdChange = (e) => {
    setBookingId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/command/cancelBooking', {
        method: 'PUT', // Change method to PUT
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reservationNumber: bookingId, // Assuming the backend expects "reservationNumber" instead of "bookingId"
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }

      console.log('Booking canceled successfully');
      // Reset form field after successful submission
      setBookingId('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Cancel Booking</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bookingId">Booking ID:</label>
          <input type="text" id="bookingId" value={bookingId} onChange={handleBookingIdChange} required />
        </div>
        <button type="submit">Cancel</button>
      </form>
    </div>
  );
}

export default CancelBookingForm;

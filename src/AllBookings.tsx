import React, { useState, useEffect } from 'react';

function AllBookings() {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    getAllBookings();
  }, []);

  const getAllBookings = async () => {
    try {
      const today = new Date().toISOString().split('T')[0];;
      const fiveYearsFromNow = new Date();
      fiveYearsFromNow.setFullYear(fiveYearsFromNow.getFullYear() + 5);
      const url = `http://localhost:8083/getBookings?start=${today}&end=${fiveYearsFromNow.toISOString().split('T')[0]}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      const data = await response.json();
      console.log('Bookings Fetched data:', data);
      setAllBookings(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-bold">All Bookings</h2>
      <ul className="list-none">
        {allBookings.map(booking => (
          <li key={booking.id} className="border border-gray-300 p-4 my-2 rounded">
            <p className="font-semibold">Booking ID: {booking.id}</p>
            <p>Customer ID: {booking.customerId}</p>
            <p>Booking Date: {booking.bookingDate}</p>
            <p>Details: {booking.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBookings;

import React, { useState } from 'react';
import AvailableRooms from './AvailableRooms';

function RoomSearchForm() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [balcony, setBalcony] = useState(false);
  const [availableRooms, setAvailableRooms] = useState(null); // Initialize as null

  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value, 10));
  };

  const searchAvailableRooms = async () => {
    try {
      const response = await fetch('http://localhost:8083/getFreeRooms?start=${startDate}&end=${endDate}&numberOfGuest=${guests}');
      if (!response.ok) {
        throw new Error('Failed to fetch available rooms');
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      setAvailableRooms(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <label htmlFor="guests">Guests:</label>
        <input type="number" id="guests" value={guests.toString()} onChange={handleGuestsChange} />
        <label htmlFor="balcony" className="flex items-center">
          <input type="checkbox" id="balcony" checked={balcony} onChange={(e) => setBalcony(e.target.checked)} />
          <span className="ml-2">Balcony</span>
        </label>
        <button onClick={searchAvailableRooms} className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </div>
      {/* Render AvailableRooms component only if availableRooms is not null */}
      {availableRooms !== null && <AvailableRooms availableRooms={availableRooms} />}
    </div>
  );
}

export default RoomSearchForm;

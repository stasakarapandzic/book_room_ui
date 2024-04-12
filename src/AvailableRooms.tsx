import React, { useState } from 'react';
import BookRoomForm from './BookRoomForm'; 

function AvailableRooms({ availableRooms, start, end, numberOfGuests , again}) {
  // State to manage whether the book room form should be displayed
  const [showBookRoomForm, setShowBookRoomForm] = useState(false);
  // State to keep track of the selected room for booking
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Function to handle the click event of the "Book this room" button
  const handleBookRoomClick = (roomNumber) => {
    setSelectedRoom(roomNumber);
    setShowBookRoomForm(true);
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-bold">Available Rooms</h2>
      <ul className="list-none">
        {availableRooms.map(room => (
          <li key={room.roomNumber} className="border border-gray-300 p-4 my-2 rounded">
            <p className="font-semibold">Room {room.roomNumber}</p>
            <p>MaxCapacity: {room.maxCapacity}</p> 
            <p>Balcony: ${room.withBalcony}</p>
            {/* Render the button with an onClick handler */}
            <button onClick={() => handleBookRoomClick(room.roomNumber)}>Book this room</button>
            {/* Render BookRoomForm only if showBookRoomForm is true and the selected room matches the current room */}
            {showBookRoomForm && selectedRoom === room.roomNumber && (
              <BookRoomForm
                roomNumber={room.roomNumber}
                start={start}
                end={end}
                numberOfGuests={numberOfGuests}
                again={again}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableRooms;

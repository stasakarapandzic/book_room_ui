function AvailableRooms({ availableRooms }) {
    return (
      <div className="my-4">
        <h2 className="text-lg font-bold">Available Rooms</h2>
        <ul className="list-none">
          {availableRooms.map(room => (
            <li key={room.roomNumber} className="border border-gray-300 p-4 my-2 rounded">
              <p className="font-semibold">Room {room.roomNumber}</p>
              <p>MaxCapacity: {room.maxCapacity}</p> 
              <p>Balcony: ${room.withBalcony}</p>
              <button>Book</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default AvailableRooms;
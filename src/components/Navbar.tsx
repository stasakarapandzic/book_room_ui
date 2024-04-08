// Navbar.tsx
import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => setPage('reserve')}>Reserve</li>
        <li onClick={() => setPage('bookings')}>Bookings</li>
        <li onClick={() => setPage('customers')}>Customers</li>
      </ul>
    </nav>
  );
};

export default Navbar;

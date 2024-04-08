import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';


const App = () => {
    const [page, setPage] = useState('reserve');
  
    return (
      <div>
        <Navbar setPage={setPage} />
        {page === 'reserve' && <Form />}
        {page === 'bookings' && <h2>Bookings</h2>}
        {page === 'customers' && <h2>Customers</h2>}
      </div>
    );
  };
  
  export default App;
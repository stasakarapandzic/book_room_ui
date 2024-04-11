import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import CustomersPage from './CustomersPage';
import CancelationPage from './CancelationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/cancelation" element={<CancelationPage/>} />
        <Route path='/custumers' element={<CustomersPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

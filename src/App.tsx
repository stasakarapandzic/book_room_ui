import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

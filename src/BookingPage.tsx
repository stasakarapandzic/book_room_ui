import { useState } from "react";
import Header from "./Header";
import RoomSearchForm from "./RoomSearchForm";

// Inside the BookingPage component
function BookingPage() {    


    return (
      <div className="my-4">
        <Header/>
        <h2 className="text-lg font-bold">Booking Page</h2>
        <RoomSearchForm/>
      </div>
    );
  }
  
  export default BookingPage;

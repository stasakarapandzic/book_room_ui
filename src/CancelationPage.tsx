import AllBookings from "./AllBookings";
import CancelationForm from "./CancelationForm";
import Header from "./Header";

function CancelationPage() {
    return (
      <div>
        <Header/>
        <h2 className="text-lg font-bold">Cancelation Page And All Bookings</h2>
        <CancelationForm/>
        <AllBookings/>
      </div>
    );
  }

  export default CancelationPage;

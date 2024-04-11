import AllBookings from "./AllBookings";
import CancelationForm from "./CancelationForm";
import Header from "./Header";

function CancelationPage() {
    return (
      <div>
        <Header/>
        <CancelationForm/>
        <AllBookings/>
      </div>
    );
  }

  export default CancelationPage;

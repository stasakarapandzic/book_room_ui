import { useState } from "react";
import Header from "./Header";
import CreateCustomerForm from "./CreateCustomerForm";
import AllCustomers from "./AllCustomers";

function CustomersPage() {    


    return (
      <div className="my-4">
        <Header/>
        <CreateCustomerForm/>
        <AllCustomers/>
      </div>
    );
  }
  
  export default CustomersPage;

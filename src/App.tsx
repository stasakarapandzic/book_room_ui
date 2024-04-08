// App
// ---
// 3 concerns
// - AddTodoForm
// - TodoList
// - TodoListItem (check todo items)

import {useState} from 'react';
import AddTodoForm from './AddTodoForm';
import Navba from './room_booking/Navbar';

// state
// - list of todos (derive: how many todos)


export default function App() {
  const [page, setPage] = useState('reserve');

  return (
    <div>
     <Navbar setPage={setPage} />
        {page === 'reserve' && <Form />}
        {page === 'bookings' && <h2>Bookings</h2>}
        {page === 'customers' && <h2>Customers</h2>}
      </div>
  );
}

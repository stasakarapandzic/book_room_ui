function NavBar() {
    return (
      <nav className="bg-gray-800 py-4">
        <ul className="flex justify-around">
          <li><a href="/" className="text-white">Book A Room</a></li>
          <li><a href="/custumers" className="text-white">Our Customers</a></li>
          <li><a href="/cancelation" className="text-white">All Bookings</a></li>
        </ul>
      </nav>
    );
  }

  export default NavBar;

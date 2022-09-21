import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="App-navbar">
      <NavLink to="/home" className="logo">
        CODE MART
      </NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/products">Product</NavLink>
      <NavLink to="/orders">Order</NavLink>
      <NavLink to="/login">Logout</NavLink>
    </nav>
  );
};

export default Navbar;

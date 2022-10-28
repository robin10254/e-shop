import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { setAuthorized } from "../reducer/authReducer";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutButtonHandler = () => {
    dispatch(setAuthorized({
      username: "",
      password: "",
    }));
    return navigate("/");
  };

  return (
    <nav className="App-navbar">
      <NavLink to="/home" className="logo">
        CODE MART
      </NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/products">Product</NavLink>
      <NavLink to="/orders">Order</NavLink>
      <NavLink to="/login">
        <button className="btnLogout" onClick={onLogoutButtonHandler}>Logout</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;

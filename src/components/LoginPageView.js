import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setAuthorized } from "../reducer/authReducer";

const LoginPageView = () => {
  //Hooks
  // const outlet = useOutlet();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.authReducer.isAuthorized);
  let [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  useEffect(()=>{
    if( isAuthorized ){
      alert('Login Successfully');
      return navigate("/home")
    } else {
      return navigate("/login")
    }
  }, [isAuthorized, navigate])

  //Functions
  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setCredentials({ ...credentials, [name]: value });
  };

  const OnLoginButtonHandler = () => {
    dispatch(setAuthorized(credentials));
  };

  return (
    <div className="loginPage" style={{ marginTop: "5rem" }}>
      <p className="loginLogo">CODE MART</p>
      <input
        type="text"
        placeholder="Username"
        className="loginInput"
        name="username"
        autoComplete="off"
        value={credentials.username}
        onChange={onChangeHandler}
      ></input>
      <input
        type="text"
        placeholder="Password"
        className="loginInput"
        name="password"
        autoComplete="off"
        value={credentials.password}
        onChange={onChangeHandler}
      ></input>
      <button className="login-btn" onClick={OnLoginButtonHandler}>
        Login
      </button>
    </div>
  );
};

export default LoginPageView;

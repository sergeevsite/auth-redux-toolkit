import React from 'react';
import {Link} from "react-router-dom";
import Login from "../components/Login";

const LoginPage = (props) => {
  return (
    <div>
      <h1>Login page</h1>
      <Login />
      <Link to='/register'>register page</Link>
    </div>
  );
}

export default LoginPage;
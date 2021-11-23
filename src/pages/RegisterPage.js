import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../components/SignUp";

const RegisterPage = (props) => {
  return (
    <div>
      <h1>Register page</h1>
      <SignUp />
      <Link to='/login'>login page</Link>
    </div>
  );
}

export default RegisterPage;
import React from 'react';
import {Redirect} from 'react-router-dom'
import {useAuth} from "../hooks/useAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div>
      <h1>Home</h1>

      <button onClick={() => dispatch(removeUser())}>logout</button>
    </div>
  ) : (
    <Redirect to='/login'/>
  );
}

export default HomePage;
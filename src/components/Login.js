import React from 'react';
import Form from "./Form";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {setUser} from "../store/slices/userSlice";
import {useHistory} from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();
  const {push} = useHistory();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        push('/')
      })
      .then(() => alert('invalid user'))
  };
  return (
    <Form title='sign in' handleClick={handleLogin}/>
  );
}

export default Login;
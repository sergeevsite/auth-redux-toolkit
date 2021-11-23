import React from 'react';
import {useHistory} from 'react-router-dom';
import Form from "./Form";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {setUser} from "../store/slices/userSlice";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const {push} = useHistory();
  const handleCreate = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        push('/')
      })
      .then(console.error)
  };
  return (
    <Form title='sign up' handleClick={handleCreate}/>
  );
}

export default SignUp;
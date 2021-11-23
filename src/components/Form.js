import React, {useState} from 'react';

const Form = ({title, handleClick}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <button type='button' onClick={() => handleClick(email, password)}>
        {title}
      </button>

    </div>
  );
}

export default Form;
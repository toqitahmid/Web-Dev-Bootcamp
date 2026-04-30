// import React from 'react';

import { useState } from "react";

const ControlledFiled = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleControlledFiled = (e) => {
        e.preventDefault();
        // console.log(e.target.email.value);
        if (password.length < 6) {
          setError("password must be have 6 characters");
        } else {
          setError("");
        }
    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        // if(password.length < 6){
        //     setError("password must be have 6 characters");
        // }
        // else{
        //     setError("");
        // }

    }

    return (
      <div>
        <form onSubmit={handleControlledFiled}>
          <input type="email" name="email" placeholder="Your email" />
          <br />
          <input
            type="password"
            name="password"
            defaultValue={password}
            onChange={handlePasswordOnChange}
            placeholder="Your password"
          />
          <br />
          <input type="submit" value="Submint" />
        </form>
        <h1>{error}</h1>
      </div>
    );
};

export default ControlledFiled;
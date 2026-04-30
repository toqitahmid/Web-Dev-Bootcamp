// import React from 'react';

import UseInputField from "../../Hooks/UseInputField";

const HookForm = () => {

    const [name, nameOnChange] = UseInputField(''); 
    const [email, emailOnChange] = UseInputField('');
    const [password, passwordOnChange] = UseInputField('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('submit', name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input 
                type="text" 
                name="name"
                defaultValue={name}
                onChange={nameOnChange} 
                placeholder="Name"/>
                <br />
                <input 
                type="email" 
                name="Email" 
                defaultValue={email}
                onChange={emailOnChange}
                placeholder="Email"/>
                <br />
                <input 
                type="password" 
                name="password"
                defaultValue={password}
                onChange={passwordOnChange} 
                placeholder="Password"/>
                <br />
                <input 
                type="submit" 
                value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
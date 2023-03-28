import React from "react";
import { useState } from "react";
import '../SignIn/SignIn.css';

const Register = ( { onRouteChange, loadUser } ) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ userName, setUserName ] = useState('');

    const onEmailChange = ( event ) => {
        setEmail( event.target.value )
    };

    const onPasswordChange = ( event ) => {
        setPassword( event.target.value )
    };

    const onUserNameChange = ( event ) => {
        setUserName( event.target.value )
    };

    const requestDataRegister = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify( {
            email: email,
            password: password,
            name: userName
        })
    };

    const onSubmitRegister = () => {
        fetch( 'http://localhost:3000/register', requestDataRegister )
        .then( response => response.json() )
        .then( user => {
            if ( user.id ) {
                loadUser( user );
                onRouteChange( 'home' );
            }
        })      
    };

    return (
        <div className="containerForm">
            <form>
                <p className="titleForm">Register</p>
                <div className="input">
                    <input type="text" placeholder="Name" onChange={ onUserNameChange }/>
                </div>
                <div className="input">
                    <input type="email" placeholder="Email" onChange={ onEmailChange }/>
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" onChange={ onPasswordChange }/>
                </div>
                <div>
                    <input type="button" value="Register" onClick={ onSubmitRegister }/>
                </div>
            </form>

            <div className="drops">
                <div className="drop drop-1"></div>
                <div className="drop drop-2"></div>
                <div className="drop drop-3"></div>
                <div className="drop drop-4"></div>
                <div className="drop drop-5"></div>
            </div>
        </div>

    );
}

export default Register;
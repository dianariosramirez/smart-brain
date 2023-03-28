import React, { useState } from "react";
import './SignIn.css';
import Swal from "sweetalert2";

const SignIn = ( { onRouteChange, loadUser } ) => {
    const [ signInEmail, setSignInEmail ] = useState('');
    const [ signInPassword, setSignInPassword ] = useState('');

    const onEmailChange = ( event ) => {
        setSignInEmail( event.target.value )
    };

    const onPasswordChange = ( event ) => {
        setSignInPassword( event.target.value )
    };

    const requestDataSignIn = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify( {
            email: signInEmail,
            password: signInPassword
        })
    };

    const onSubmitSignIn = () => {
        fetch( 'http://localhost:3000/signin', requestDataSignIn )
        .then( response => response.json() )
        .then( user => {
            if ( user.id ) {
                loadUser( user );
                onRouteChange( 'home' );
            }  else {
                Swal.fire({
                    title: 'Oops...',
                    text: `Incorrect email or password`,
                    confirmButtonColor: 'rgba(36,104,164,1)'
                })
            }
        })      
    };

    return (
        <div className="containerForm">
            <form>
                <p className="titleForm">Welcome</p>
                <div className="input">
                    <input type="email" placeholder="Email" onChange={ onEmailChange }/>
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" onChange={ onPasswordChange }/>
                </div>
                <div>
                    <input type="button" value="Sign in" onClick={ onSubmitSignIn }/>
                </div>
                <p className="toRegister" onClick={ () => onRouteChange( 'register' ) }>Register</p>
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

export default SignIn;
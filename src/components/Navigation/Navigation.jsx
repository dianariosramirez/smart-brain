import React from "react";
import './Navigation.css';

const Navigation = ( { onRouteChange, isSignedIn } ) => {
    if ( isSignedIn) {
        return (
            <nav>
                <p className="signOut" onClick={ () => onRouteChange( 'signin' ) }>Sign out</p>
            </nav>
        );
    } else {
        return (
            <nav>
                <p className="signOut" onClick={ () => onRouteChange( 'signin' ) }>Sign In</p>
                <p className="signOut" onClick={ () => onRouteChange( 'register' ) }>Register</p>
            </nav>
        );
    }
}

export default Navigation;
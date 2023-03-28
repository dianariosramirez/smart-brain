import React from "react";

// Styles
import './welcomePage.css';

const WelcomePage = ( { onRouteChange, loadUser } ) => {
    const onStart = () => {    
        loadUser( {
            id: 1,
            name: 'Default user',
            email: 'default@gmail.com',
            entries: 0,
            joined: '00-00-0000'
        } );
        onRouteChange( 'home' );
    };

    return (
        <div className="containerWelcomeBox">
            <div className="welcomeBox">
                <p className="titleForm">Welcome</p>
                <input type="button" value="Start" onClick={ onStart }/>
            </div>

            <div className="drops">
                <div className="drop drop-1"></div>
                <div className="drop drop-2"></div>
                <div className="drop drop-3"></div>
                <div className="drop drop-4"></div>
            </div>
        </div>

    );
}

export default WelcomePage;
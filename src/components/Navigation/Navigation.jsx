import React from "react";
import './Navigation.css';

const Navigation = ( { onRouteChange } ) => {
        return (
            <nav>
                <p className="home" onClick={ () => onRouteChange( 'welcome' ) }>Welcome</p>
            </nav>
        );
}

export default Navigation;
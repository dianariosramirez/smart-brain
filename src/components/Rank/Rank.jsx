import React from "react";
import './rank.css';

const Rank = ( { userName, entries } ) => {
    return (
        <div className="information">
            <div className="profile">
                <p>{`🐙 ${ userName }`}</p>
            </div>
            <div className="rankspace">
                <p>{`📤 Images: ${ entries }`}</p>
            </div>
        </div>
    );
}

export default Rank;
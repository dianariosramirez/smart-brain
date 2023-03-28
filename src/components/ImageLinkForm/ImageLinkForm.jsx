import React from "react";
import './imageLinkForm.css';

export const ImageLinkForm = ( { onInputChange, onButtonSubmit } ) => {
    return (
        <div className="container">
            <p className="initmessage">
                {'This magic brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className="formspace">
                <div className="linkform">
                    <input className='text' type='text'onChange={onInputChange}/>
                    <button className="detect" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>

        </div>
    );
}


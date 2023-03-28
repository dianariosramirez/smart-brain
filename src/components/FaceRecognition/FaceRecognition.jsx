import React from "react";
import './faceRecognition.css';

const FaceRecognition = ( { faceRegions, imageUrl } ) =>{
    return (
        <div className="container">
            <div className="imageSpace">
                <img id='inputimage' alt="" src={imageUrl} />
                {faceRegions.map((faceRegion) => {
                    return (
                        <div
                            key={faceRegion.id}
                            className="bounding-box"
                            style={{
                                top: faceRegion.topRow,
                                left: faceRegion.leftCol,
                                bottom: faceRegion.bottomRow,
                                right: faceRegion.rightCol
                            }}
                        >
                        </div>
                    );
                })}
            </div>
        </div>

    );
}

export default FaceRecognition;


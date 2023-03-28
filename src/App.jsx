import React from 'react';
import { useState } from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './components/Navigation/Navigation';
import WelcomePage from './components/WelcomePage/welcomePage';
import Logo from './components/Logo/Logo';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const App = () => {
  const [ input, setInput ] = useState('');
  const [ imageUrl, setImageUrl ] = useState('');
  const [ faceRegions, setFaceRegions ] = useState( [] );
  const [ route, setRoute ] = useState( 'welcome' );
  const [ user, setUser ] = useState( {
    id: '',
    name: 'Default user',
    email: '',
    entries: 0,
    joined: ''
  });

  const loadUser = ( data ) => {
    setUser( {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined,
      entries: data.entries
    } )
  }

  const calculateFaceLocation = ( result ) => {
    const faceRegionsData = result.outputs[0].data.regions.map(
      (faceRegion) => ({
        ...faceRegion.region_info.bounding_box,
        id: faceRegion.id
      })
    );
    console.log( faceRegionsData );

    const image = document.getElementById( 'inputimage' );
    const widthImage = Number( image.width );
    const heightImage = Number( image.height );

    console.log( `width: ${widthImage}, height: ${heightImage}`);
    
    setFaceRegions(
      faceRegionsData.map((faceRegion) => {
        return {
          id: faceRegion.id,
          topRow: faceRegion.top_row * heightImage,
          leftCol: faceRegion.left_col * widthImage,
          bottomRow: heightImage * ( 1 - faceRegion.bottom_row ),
          rightCol: widthImage * ( 1 - faceRegion.right_col )
        };
      })
    )
  }

  const onInputChange = event => {
    setInput(event.target.value);
  }

  const onButtonSubmit = () => {
    console.log('click!');
    setImageUrl( input );
        
    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "clarifai",
        "app_id": "main"
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": input
                  }
              }
          }
      ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + 'ec7d0eeec5294b8d91f416fd36be79da',
        },
        body: raw
    };

    const requestDataPutEntries = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        id: user.id
      })
    }

    fetch( `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions )
        .then( response => response.json()  )
        .then( result => { 
          calculateFaceLocation( result );
        })          
        .catch( error => console.log( 'error', error) );
  }

  const onRouteChange = ( route ) => {
    setRoute( route );
  }

  return (
    <div className="app">
      <ParticlesBg color="#edaccd" type="cobweb" bg={true} />
      { route === 'home'
        ? <div>
            <Navigation onRouteChange={onRouteChange} />
            <Rank userName={user.name} entries={user.entries}/>
            <Logo />    
            <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
            <FaceRecognition faceRegions={faceRegions} imageUrl={imageUrl}/>
          </div>
        :  <WelcomePage onRouteChange={onRouteChange} loadUser={loadUser}/>        
      }
    </div>
  );
}

export default App;

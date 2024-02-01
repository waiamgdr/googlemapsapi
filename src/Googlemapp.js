import React from 'react'

import { GoogleMap , LoadScript , Marker} from '@react-google-maps/api';




const Googlemapp = () => {
// position sur map
  const item={
    name:"wiem",
    Location:{
      lat:35.4925,
      Ing:10.3801,
    }

  }

//style google maps 
  const containerStyle = {
    width: '500px',
    height: '500px'
    
  };
  
  
  const center = {
    lat: 35.4925,
    lng: 10.380
  };
  
  return (
    
  <div>
    {/* key google maps  "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" */}

    <LoadScript  googleMapsApiKey='AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg'>
      <GoogleMap mapContainerStyle={containerStyle} zoom={9} center={center}>
        <Marker key ={item.name} position={item.location}/>
      </GoogleMap>
    </LoadScript>
  </div>
   
  )
}

export default  Googlemapp;
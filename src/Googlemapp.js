import React from 'react'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};



const Googlemapp = () => {
    const  { isLoaded } = useJsApiLoader({
        id:'google-map-script',
       Key: "AIzaSyBE8yjcXtNmPhbi_gXA7CqbF-V9-R_gezg"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
  return (
    
  isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
        <></>
      </GoogleMap>
  ) : <></>

   
  )
}

export default  Googlemapp;
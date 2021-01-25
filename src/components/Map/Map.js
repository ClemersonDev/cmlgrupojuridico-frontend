import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

const Map = (props) => {
    return(
        <GoogleMap 
            defaultZoom={15}
            defaultCenter={{lat: -10.8398995, lng: -38.539716}}
        />
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
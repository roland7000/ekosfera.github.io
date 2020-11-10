import React, { useRef, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import {
  GOOGLE_MAPS_API,
  MAP_DEFAULT_CENTER,
  MAP_DEFAULT_ZOOM
} from '../../constants';

function Map({
  center = MAP_DEFAULT_CENTER,
  handleChange,
  className,
  children
}) {
  const mapRef = useRef()

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAPS_API }}
      defaultCenter={MAP_DEFAULT_CENTER}
      center={center}
      defaultZoom={MAP_DEFAULT_ZOOM}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map }) => mapRef.current = map}
      onChange={handleChange}
      className={className}
    >
      {children}
    </GoogleMapReact>
  );
}

export default Map;

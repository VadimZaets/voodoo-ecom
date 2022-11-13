import React from "react";
import { GoogleMap, Marker, InfoBox } from "@react-google-maps/api";
import { defaultTheme } from "./Theme";

import "./css/Map.css";
import LocationMarker from "../LocationMarker/LocationMarker";
import InfoBoxComponent from "../InfoBoxComponent/InfoBoxComponent";

const containerStyle = {
  width: "100%",
  height: "100%",
};
const defaultOptions = {
  panControl: true,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};
const center = {
  lat: 43.45261,
  lng: -80.5143,
};

const Map = () => {
  const mapRef = React.useRef(undefined);
  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);
  return (
    <div className="map_container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <InfoBoxComponent position={center} />
        <LocationMarker position={center} />
        {/* <Marker position={center} /> */}
      </GoogleMap>
    </div>
  );
};

export default Map;

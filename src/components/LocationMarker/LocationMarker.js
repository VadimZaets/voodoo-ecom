import { Marker } from "@react-google-maps/api";

const LocationMarker = ({ position }) => {
  return <Marker position={position} icon={{ url: "/marker.svg" }} />;
};

export default LocationMarker;

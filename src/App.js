import { useJsApiLoader } from "@react-google-maps/api";
import "./App.css";
import Form from "./components/Form/Form";
import Map from "./components/Map/Map";

import Layout from "./layouts/Layout";

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });
  return (
    <Layout>
      <div className="main_container ">
        <Form />
        {isLoaded ? <Map /> : <h2>Loading...</h2>}
      </div>
    </Layout>
  );
};

export default App;

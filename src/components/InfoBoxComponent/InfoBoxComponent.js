import { InfoBox } from "@react-google-maps/api";
import "./css/InfoBoxComponent.css";
const InfoBoxComponent = ({ position }) => {
  const options = {
    closeBoxURL: "",
    enableEventPropagation: true,
    pixelOffset: new window.google.maps.Size(-120, -220),
  };
  return (
    <InfoBox anchor={null} options={options} position={position}>
      <div className="info_container">
        <div>
          <h2 className="info_title">Voodoo</h2>
          <p className="info_text">
            137 Glasgow St., Unit 115 <br /> Kitchener, ON N2G 4X8 <br />{" "}
            Ukraine
          </p>
          <div className="info_info">
            <a href="mailto:info@voodoo.com" className="info_link">
              <svg className="info_icon">
                <use href="/symbol-defs.svg#envelope"></use>
              </svg>
              info@voodoo.com
            </a>
            <a href="tel:+1-800-480-9597" className="info_link">
              <svg class="info_icon">
                <use href="/symbol-defs.svg#tel"></use>
              </svg>
              1-800-480-9597
            </a>
          </div>
        </div>
      </div>
    </InfoBox>
  );
};

export default InfoBoxComponent;

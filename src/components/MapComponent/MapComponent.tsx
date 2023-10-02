import React from "react";
import { MapIframe } from "./styles";

interface MapComponentProps {
  width?: string;
  height?: string;
  mapUrl?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  width = "100%",
  height = "450px",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4937.676227632919!2d-99.13461480272562!3d19.28469530558656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01059b077ca1%3A0x129534395a02e72a!2sTecnol%C3%B3gico%20de%20Monterrey%2C%20Campus%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1696287406842!5m2!1ses!2smx",
}) => {
  return (
    <MapIframe
      src={mapUrl}
      width={width}
      height={height}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></MapIframe>
  );
};

export default MapComponent;

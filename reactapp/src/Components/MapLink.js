import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
const MapLink = () => {
  const openGoogleMaps = () => {
    const latitude = 12.790361; // Example latitude
    const longitude = 78.716606; // Example longitude
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(url, "_blank");
  };

  return (
    <Button variant="outline-primary" onClick={openGoogleMaps}>
      Locate on Map
    </Button>
  );
};

export default MapLink;

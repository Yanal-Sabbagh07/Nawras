import React, { useState, useMemo } from "react";
import "../styles/pages/Home.scss";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AltRouteIcon from "@mui/icons-material/AltRoute";

import CircularProgress from "@mui/material/CircularProgress";

const Hole = () => {
  const [userPermession, setUserPermession] = useState(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!userPermession)
    return (
      <div className="map-before-loading">
        <div className="gmap-div-container">
          <div className="gmap-content">
            <div className="gmap-name">
              Zahnspange Charlottenburg / <br />
              Dr.Nawras Darkazanli
            </div>
            <div className="name-txt">
              Richard-Wagner-Platz 3 <br /> 10585 Berlin
            </div>
            <div className="bewertung">
              <span>4,3</span>
              <StarIcon className="full-star" />
              <StarIcon className="full-star" />
              <StarIcon className="full-star" />
              <StarIcon className="full-star" />
              <StarHalfIcon className="half-star" />
              <span>(45)</span>
            </div>
          </div>
          <div className="gmap-direction">
            <div className="route-icon-container">
              <AltRouteIcon className="route-icon" />
            </div>
            <a
              href="https://goo.gl/maps/DHKyNRQ9tzcoiURw8"
              target="_blank"
              rel="noreferrer noopener"
            >
              Routenplaner
            </a>
          </div>
        </div>
        <button
          className="map-before-btn"
          onClick={() => setUserPermession(true)}
        >
          Aktuelle Karte anzeigen
        </button>
      </div>
    );
  else if (userPermession && !isLoaded)
    return (
      <div
        className="Loading-screen"
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          alignSelf: "center",
        }}
      >
        <CircularProgress
          style={{ width: "75px", height: "75px", color: "white" }}
        />
        Google Map
      </div>
    );
  else return <Map />;
};

function Map() {
  const center = useMemo(() => ({ lat: 52.51712, lng: 13.30591 }), []);
  const [markerOpen, setMarkerOpen] = useState(false);
  const onMarkerClick = () => {
    setMarkerOpen(!markerOpen);
  };
  return (
    <GoogleMap
      zoom={11.9}
      center={center}
      mapContainerClassName="google-map"
      options={{
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: true,
      }}
    >
      <Marker position={center} onClick={onMarkerClick} animation={2}>
        {markerOpen && (
          <InfoWindow
            position={{ lat: 52.51712, lng: 13.30591 }}
            options={{ minWidth: 300 }}
            onCloseClick={() => {
              setMarkerOpen(false);
            }}
          >
            <div
              className="gmap-div-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                color: "black",
                height: "116px",
              }}
            >
              <div
                className="gmap-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  height: "90%",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="gmap-name"
                  style={{
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  Zahnspange Charlottenburg / <br />
                  Dr.Nawras Darkazanli
                </div>
                <div className="name-txt">
                  Richard-Wagner-Platz 3 <br /> 10585 Berlin
                </div>
                <div
                  className="bewertung"
                  style={{ color: "gold", display: "flex" }}
                >
                  <span style={{ color: "gray" }}>4,3</span>
                  <StarIcon className="full-star" />
                  <StarIcon className="full-star" />
                  <StarIcon className="full-star" />
                  <StarIcon className="full-star" />
                  <StarHalfIcon className="half-star" />
                  <span style={{ color: "gray" }}>(45)</span>
                </div>
              </div>
              <div className="gmap-direction">
                <div className="route-icon-container">
                  <AltRouteIcon
                    className="route-icon"
                    style={{
                      fontSize: "38px",

                      color: "#20ade4",
                    }}
                  />
                </div>
                <a
                  href="https://goo.gl/maps/DHKyNRQ9tzcoiURw8"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    textDecoration: "none",
                    color: "#1f5ca2",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Routenplaner
                </a>
              </div>
            </div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  );
}

export default Hole;

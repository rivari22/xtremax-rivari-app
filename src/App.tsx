import React, { useMemo, useState } from "react";
import GoogleMapReact from "google-map-react";

import markerImg from "./assets/marker.png";
import { mockData } from "./mocks";

const Marker = ({
  text,
  lat,
  lng,
  isSelected,
  onClick,
}: {
  text: any;
  lat: any;
  lng: any;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <div style={{ position: "absolute", transform: "translate(-50%, -60%)" }}>
    <img
      src={markerImg}
      alt="marker"
      width={isSelected ? 100 : 60}
      height={isSelected ? 100 : 60}
    />
    <h1
      style={{
        // position: "absolute",
        // top: 6,
        // left: 20,
        fontSize: isSelected ? "20px" : "12px",
        // cursor: "pointer",
      }}
      onClick={() => undefined}
    >
      {text}
    </h1>
  </div>
);

const defaultProps = {
  center: {
    lat: 1.290555,
    lng: 103.846188,
  },
  zoom: 15,
};

export default function Map() {
  const [selectedMap, setSelectedMap] = useState(mockData);

  const handleOnClickMarker = (index: number) => {
    setSelectedMap((prev: any) => {
      const temp = prev.map((value: any, idx: number) => {
        if (idx === index) {
          return { ...value, isSelected: true };
        } else {
          return { ...value, isSelected: false };
        }
      });
      return temp;
    });
  };

  const selectedPin = useMemo(
    () => selectedMap.find((val) => val.isSelected),
    [selectedMap]
  );

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }} className="container">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: import.meta.env.VITE_GOOGLE_API_KEY,
          // libraries: ["places", "visualization "],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={{
          lat: selectedPin?.lat || defaultProps.center.lat,
          lng: selectedPin?.lng || defaultProps.center.lng,
        }}
        zoom={selectedPin ? 17 : defaultProps.zoom}
        onClick={(value) => {
          console.log(value, "value on click maps");
        }}
        onChildClick={(hoverKey, childProps) => {
          console.log({ hoverKey, childProps }, "onClick child");
          childProps.onClick();
        }}
        options={{
          panControl: true,
        }}
      >
        {selectedMap?.map((data, index) => (
          <Marker
            lat={data.lat}
            lng={data.lng}
            text={data.label}
            key={index}
            isSelected={data.isSelected}
            onClick={() => {
              handleOnClickMarker(index);
            }}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

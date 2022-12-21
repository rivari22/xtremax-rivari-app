import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import classNames from 'classnames'

import styles from './GoogleMap.module.css'
import markerImg from "../../../assets/marker.png";
import {
  PlaceContext,
  PlaceType,
} from "../../../Context/PlaceProvider/PlaceProvider";
import { PlaceReducerEnum } from "../../../Context/PlaceProvider/PlaceReducer";

const Marker = ({
  text,
  isSelected,
  onClick,
}: {
  text: any;
  lat: any;
  lng: any;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <div
    style={{ position: "absolute", transform: "translate(-50%, -90%)" }}
    onClick={onClick}
  >
    <img
      src={markerImg}
      alt="marker"
      width={isSelected ? 100 : 60}
      height={isSelected ? 100 : 60}
    />
    <div className={classNames({
      [styles['marker-unselect']]: !isSelected,
      [styles['marker-select']]: isSelected
    })}>
      <h1
        style={{
          fontSize: isSelected ? "20px" : "12px",
        }}
        className="truncate"
      >
        {text}
      </h1>
    </div>
  </div>
);

const defaultProps = {
  center: {
    lat: 1.290555,
    lng: 103.846188,
  },
  zoom: 15,
};

const GoogleMap = () => {
  const { state, dispatch } = useContext(PlaceContext);

  const handleOnClickMarker = (data: PlaceType) => {
    dispatch({
      type: PlaceReducerEnum["Select"],
      payload: {
        place: data,
      },
    });
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: import.meta.env.VITE_GOOGLE_API_KEY,
      }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      center={{
        lat: state?.selectedPlace?.lat || defaultProps.center.lat,
        lng: state?.selectedPlace?.lng || defaultProps.center.lng,
      }}
      zoom={state.selectedPlace ? 17 : defaultProps.zoom}
      onChildClick={(hoverKey, childProps) => {
        childProps.onClick();
      }}
    >
      {state?.places?.map((data, index) => (
        <Marker
          lat={data.lat}
          lng={data.lng}
          text={data.label}
          key={index}
          isSelected={state?.selectedPlace?.key === data.key}
          onClick={() => {
            handleOnClickMarker(data);
          }}
        />
      ))}
    </GoogleMapReact>
  );
};

export default React.memo(GoogleMap);

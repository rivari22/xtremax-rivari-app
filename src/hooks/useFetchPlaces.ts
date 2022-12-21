import React, { useContext, useEffect } from "react";
import { PlaceContext } from "../Context/PlaceProvider/PlaceProvider";
import { PlaceReducerEnum } from "../Context/PlaceProvider/PlaceReducer";

const useFetchPlaces = () => {
  const { state, dispatch } = useContext(PlaceContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../../data.json");
      const data = await res.json();
      dispatch({
        type: PlaceReducerEnum["Fetch"],
        payload: {
          places: data,
        },
      });
    };

    fetchData();
  }, []);

  return { dataPlacesMap: state };
};

export default useFetchPlaces;

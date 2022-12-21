import React, { createContext, Dispatch, useReducer } from "react";
import { PlaceActionType, placeReducer } from "./PlaceReducer";

export type PlaceType = {
  lat: number;
  lng: number;
  label: string;
  isSelected: boolean;
  key: number;
  detail: {
    image: string;
    urlWeb: string;
    description: string;
    location: string;
  };
};

export type InitialStateType = {
  places: PlaceType[];
  selectedPlace?: PlaceType;
};

const initialState: InitialStateType = {
  places: [],
  selectedPlace: undefined,
};

const PlaceContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<PlaceActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { places, selectedPlace }: InitialStateType,
  action: PlaceActionType
) => placeReducer({ places, selectedPlace }, action);

const PlaceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <PlaceContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaceContext.Provider>
  );
};

export { PlaceProvider, PlaceContext };

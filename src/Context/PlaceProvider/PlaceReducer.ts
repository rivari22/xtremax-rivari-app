import { InitialStateType, PlaceType } from "./PlaceProvider";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum PlaceReducerEnum {
  Fetch = "FETCH_PLACES",
  Select = "SELECT_PLACE",
  ResetSelect = "RESET_SELECT_PLACE",
}

type PlacePayloadType = {
  [PlaceReducerEnum.Fetch]: {
    places: Array<PlaceType>;
  };
  [PlaceReducerEnum.Select]: {
    place?: PlaceType;
    key?: number;
  };
  [PlaceReducerEnum.ResetSelect]: {};
};

export type PlaceActionType =
  ActionMap<PlacePayloadType>[keyof ActionMap<PlacePayloadType>];

export const placeReducer = (
  state: InitialStateType,
  action: PlaceActionType
) => {
  switch (action.type) {
    case PlaceReducerEnum.Fetch:
      return { ...state, places: action.payload.places };
    case PlaceReducerEnum.Select:
      return {
        ...state,
        selectedPlace:
          action.payload.place ??
          state.places.find((value) => value.key === action.payload.key),
      };
    case PlaceReducerEnum.ResetSelect:
      return { ...state, selectedPlace: undefined };
    default:
      return state;
  }
};

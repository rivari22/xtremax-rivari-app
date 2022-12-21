import React, { useContext } from "react";

import CloseIcon from "../../assets/icons/CloseIcon";
import QuestionMarkIcon from "../../assets/icons/QuestionMarkIcon";
import SettingIcon from "../../assets/icons/SettingIcon";
import { PlaceContext } from "../../Context/PlaceProvider/PlaceProvider";
import { PlaceReducerEnum } from "../../Context/PlaceProvider/PlaceReducer";

type HeaderProps = {
  title?: string;
};

const Header = ({ title }: HeaderProps) => {
  const { state, dispatch } = useContext(PlaceContext);

  return (
    <header className="h-[125px] p-8 flex justify-between items-center">
      <h1 className="font-bold text-xl">{title || "Title"}</h1>
      <ul className="flex gap-2">
        <li>
          <button>
            <SettingIcon />
          </button>
        </li>
        <li>
          <button>
            <QuestionMarkIcon />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              if(!state.selectedPlace) return;
              dispatch({ type: PlaceReducerEnum["ResetSelect"], payload: {} })
            }}
          >
            <CloseIcon />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

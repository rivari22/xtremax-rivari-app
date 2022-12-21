import React from "react";
import { GlobeIcon, MapPinIcon } from "../../../assets/icons";
import { PlaceType } from "../../../Context/PlaceProvider/PlaceProvider";

type DetailPlaceProps = PlaceType["detail"] & Pick<PlaceType, "label">;

const DetailPlace = ({
  description,
  image,
  label,
  location,
  urlWeb,
}: DetailPlaceProps) => {
  return (
    <aside
      id="detail"
      className="h-full bg-[#313541] absolute right-0 w-[350px]"
    >
      <img src={image} alt="detail" height={240} className="h-[280px] w-full" />
      <h4 className="text-white font-bold bg-[#73CDD1] px-[30px] py-2">
        {label}
      </h4>
      <p className="text-white p-[30px] overflow-hidden text-ellipsis max-h-[610px] whitespace-normal">
        {description}
      </p>
      <div className="text-white px-[30px] mt-10 mb-2 flex items-center gap-3">
        <MapPinIcon classNames="w-[22px] h-[22px] text-[#73CDD1]" />
        <p className="truncate">{location}</p>
      </div>
      <div className="px-[30px] flex items-center gap-3">
        <GlobeIcon classNames="w-[22px] h-[22px] text-[#83BF2D]" />
        <p className="text-white truncate">
          <a href={urlWeb} target="_blank">
            {urlWeb}{" "}
          </a>
        </p>
      </div>
    </aside>
  );
};

export default DetailPlace;

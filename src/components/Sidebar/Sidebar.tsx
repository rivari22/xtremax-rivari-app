import React, { useContext, useState } from "react";

import { PlaceContext } from "../../Context/PlaceProvider/PlaceProvider";
import { PlaceReducerEnum } from "../../Context/PlaceProvider/PlaceReducer";
import { Accordion } from "../Accordion";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Sidebar.module.css";

export type SubMenuSidebarType = {
  label: string;
  items?: string[];
  key?: number;
};

type MenuSidebarType = {
  label: string;
  Icon?: React.ReactNode;
  submenu?: Array<SubMenuSidebarType>;
};

export type SidebarProps = {
  menu: Array<MenuSidebarType>;
};

const Sidebar = ({ menu }: SidebarProps) => {
  const { state, dispatch } = useContext(PlaceContext);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);

  return (
    <aside className="flex">
      <section className={styles["section-parent-wrapper"]}>
        <div id="menu-parent-sidebar" className={styles["menu-parent-wrapper"]}>
          <ul className="flex flex-col items-center justify-center">
            {menu?.map((item, index) => (
              <li
                key={index}
                className={
                  index === activeMenuIndex
                    ? "bg-[#73CDD1] w-full h-[125px] flex flex-col justify-center items-center"
                    : "w-full h-[120px] flex flex-col justify-center items-center cursor-pointer"
                }
                onClick={() => {
                  if (activeMenuIndex === index) return;
                  setActiveMenuIndex(index);
                }}
              >
                {item.Icon}
                <p className="text-lg text-center font-bold leading-5 text-white">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* section 2 */}
      <section className={styles["section-wrapper"]}>
        <div className="flex flex-col relative">
          <div id="submenu" className={styles["submenu-wrapper"]}>
            <div id="nav-child" className="w-full">
              <div className={styles["filter-dropdown-wrapper"]}>
                <div className="flex justify-center">
                  <Dropdown label="Filter by favorite" />
                </div>
              </div>
              <div className={styles["submenu-content"]}>
                {menu?.[activeMenuIndex]?.submenu?.map((submenu, index) => {
                  const keyPlaceSelected = state?.selectedPlace?.key;
                  const isSelected = keyPlaceSelected === submenu.key;

                  if (submenu.items?.length) {
                    return (
                      <div
                        className={isSelected ? "w-full bg-black" : "w-full"}
                        key={index}
                        onClick={() => {
                          if (keyPlaceSelected === submenu.key) return;

                          dispatch({
                            type: PlaceReducerEnum["Select"],
                            payload: {
                              key: submenu.key,
                            },
                          });
                        }}
                      >
                        <Accordion
                          label={submenu.label}
                          items={submenu.items}
                          id={index}
                        />
                      </div>
                    );
                  }

                  return (
                    <div
                      className={
                        isSelected
                          ? "bg-black w-full px-6 py-2 cursor-pointer"
                          : "w-full px-6 py-2 cursor-pointer"
                      }
                      key={index}
                      onClick={() => {
                        if (keyPlaceSelected === submenu.key) return;

                        dispatch({
                          type: PlaceReducerEnum["Select"],
                          payload: {
                            key: submenu.key,
                          },
                        });
                      }}
                    >
                      <p
                        className={isSelected ? "text-[#83BF2D]" : "text-white"}
                      >
                        {submenu.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;

import React, { useState } from "react";

import { Accordion } from "../Accordion";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Sidebar.module.css";

export type SubMenuSidebarType = {
  label: string;
  items?: string[];
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
  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);

  return (
    <aside className="flex">
      <section className={styles["section-parent-wrapper"]}>
        <div
          id="menu-parent-sidebar"
          className={styles['menu-parent-wrapper']}
        >
          <ul className="flex flex-col items-center justify-center">
            {menu?.map((item, index) => (
              <li
                key={index}
                className={
                  index === 0
                    ? "bg-blue-800 w-full h-[125px] flex flex-col justify-center items-center"
                    : "w-full h-[120px] flex flex-col justify-center items-center"
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
      <section className={styles['section-wrapper']}>
        <div className="flex flex-col relative">
          <div
            id="submenu"
            className={styles['submenu-wrapper']}
          >
            <div id="nav-child" className="w-full">
              <div className={styles['filter-dropdown-wrapper']}>
                <div className="flex justify-center">
                  <Dropdown label="Filter by favorite" />
                </div>
              </div>
              <div className={styles['submenu-content']}>
                {menu?.[activeMenuIndex]?.submenu?.map((submenu, index) => {
                  if (submenu.items?.length) {
                    return (
                      <div className="w-full" key={index}>
                        <Accordion
                          label={submenu.label}
                          items={submenu.items}
                          id={index}
                        />
                      </div>
                    );
                  }

                  return (
                    <div className="bg-black w-full px-6 py-2" key={index}>
                      <p className="text-green-400">{submenu.label}</p>
                    </div>
                  );
                })}
                {/* // selected */}
                {/* <div className="bg-black w-full px-6 py-2">
                  <p className="text-green-400">Merlion</p>
                </div> */}
                {/* // end selected */}
                {/* // accordion */}
                {/* <div className="bg-black w-full">
                  <Accordion />
                </div> */}
                {/* // end accordion */}
                {/* not selected */}
                {/* <div className="w-full px-6 py-2">
                  <p className="text-white">Clark que</p>
                </div> */}
                {/* end not selected */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;

import React from "react";

import styles from "./Dropdown.module.css";

type DropdownProps = {
  label?: string;
  disabled?: boolean;
};

const Dropdown = (props: DropdownProps) => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="dropdown relative">
          <button
            className={styles["button-dropdown"]}
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            disabled
          >
            {props.label}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </button>
          {/* ini sample content */}
          <ul
            className={styles["list-wrapper"]}
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a className={styles["list"]} href="#">
                Action
              </a>
            </li>
          </ul>
          {/* end content */}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

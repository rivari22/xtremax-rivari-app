import React from "react";
import classNames from "classnames";

import { SubMenuSidebarType } from "../Sidebar/Sidebar";
import styles from "./Accordion.module.css";

type AccordionProps = SubMenuSidebarType & {
  id: number;
};

const Accordion = ({ id, label, items }: AccordionProps) => {
  return (
    <div className="accordion" id={`accordionId${id}`}>
      <div className="accordion-item">
        <h2 className="accordion-header mb-0" id={`heading${id}`}>
          <button
            className={classNames(
              styles["accordion-button-custom"],
              styles["accordion-button-base"]
            )}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${id}`}
            aria-expanded="false"
            aria-controls={`collapse${id}`}
          >
            {label}
          </button>
        </h2>
        <div
          id={`collapse${id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${id}`}
        >
          <div className="accordion-body px-10 bg-gray-900">
            <ul className="text-gray-500 flex flex-col gap-3">
              {items?.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

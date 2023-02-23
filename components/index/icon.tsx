import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./iconRow.module.css";
import Link from "next/link";

export interface IconData {
  title: string;
  url: string;
  icon: IconDefinition;
}

export const Icon = (iconData: IconData) => {
  const [color, setColor] = useState("white");

  return (
    <Link href={iconData.url} className={styles.link}>
      <div
        title={iconData.title}
        className={styles.iconWrapper}
        onMouseOver={() => setColor("#4ebaf0")}
        onMouseLeave={() => setColor("white")}
      >
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={iconData.icon}
            className="fas"
            size="2x"
            style={{ color: color }}
          ></FontAwesomeIcon>
        </div>
        {iconData.title}
      </div>
    </Link>
  );
};

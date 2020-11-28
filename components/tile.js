import styles from "./layout.module.css";
import Link from "next/link";
import React from "react";

export default function Tile(title, subtitle, link) {
  return (
      <>
        <Link href={link}>
          <a className={styles.tile}>
            <div>
              <p>{title}</p>
              <div className={styles.subtitle}>
                <p>{subtitle}</p>
              </div>
            </div>
          </a>
        </Link>
      </>
      )
}
import Link from "next/link";
import { ReactElement } from "react";
import styles from "./jumbotron.module.css";

export interface JumbotronProps {
  title?: string;
}

export const Jumbotron = (JumbotronData: JumbotronProps) => (
  <div className={styles.jumbotron}>
    <h1>Karsten Lloyd</h1>
    <h2>Full stack developer</h2>
  </div>
);

import Link from "next/link";
import styles from "./viewAllButton.module.css";

type ViewAllButtonProps = {
  title: string;
  link: string;
};

export const ViewAllButton = ({ title, link }: ViewAllButtonProps) => (
  <div className={`row ${styles.viewAll}`}>
    <Link href={`/portfolio/${link}`}>View All {title}</Link>
  </div>
);

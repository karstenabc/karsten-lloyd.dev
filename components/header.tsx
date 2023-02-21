import Link from "next/link";
import { ReactElement } from "react";
import styles from "./header.module.css";

interface BreadCrumb {
  name: string;
  url: string;
}

export interface HeaderProps {
  title: string;
  breadcrumbs?: BreadCrumb[];
  children?: ReactElement<any, any>;
}

export const Header = (headerData: HeaderProps) => (
  <>
    <div className={styles.header}>
      <div className="container">
        <h1>{headerData.title}</h1>
        {headerData.children}
      </div>
    </div>

    {headerData.breadcrumbs && (
      <div className={styles.breadcrumbs}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className={`breadcrumb`}>
              {headerData.breadcrumbs.map((breadcrumb, index) => (
                <li className="breadcrumb-item" aria-current="page">
                  <Link href={breadcrumb.url}>{breadcrumb.name}</Link>
                </li>
              ))}
              <li className="breadcrumb-item active" aria-current="page">
                {headerData.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    )}
  </>
);

import { NextPage } from "next";
import { ReactElement } from "react";
import HomeLayout from "../components/layouts/homeLayout";
import MainLayout from "../components/layouts/mainLayout";

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

export type PageWithHomeLayoutType = NextPage & { layout: typeof HomeLayout };

export type PageWithLayoutType =
  | PageWithMainLayoutType
  | PageWithHomeLayoutType;

export type LayoutProps = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;

export default PageWithLayoutType;

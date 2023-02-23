import { NextPage } from "next";
import { ReactElement } from "react";
import HomeLayout from "../components/layouts/homeLayout";
import MainLayout from "../components/layouts/mainLayout";

export type MainLayoutType = NextPage & { layout: typeof MainLayout };
export type HomeLayoutType = NextPage & { layout: typeof HomeLayout };
export type PageLayoutType = MainLayoutType | HomeLayoutType;

export type LayoutProps = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;

export default PageLayoutType;

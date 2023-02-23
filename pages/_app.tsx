import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
import { Fira_Code, Montserrat, Raleway, Quicksand } from "@next/font/google";
import { NextPage } from "next";
import MainLayout from "../components/layouts/mainLayout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--fira_code-font",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat-font",
});
const raleway = Raleway({ subsets: ["latin"], variable: "--raleway-font" });
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--quicksand-font",
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ?? ((page) => MainLayout({ children: page }));

  return getLayout(
    <div
      className={`${raleway.className} ${raleway.variable} ${firaCode.variable} ${montserrat.variable} ${quicksand.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}

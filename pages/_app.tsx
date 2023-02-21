import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { ReactElement, useEffect } from "react";
import { Fira_Code, Montserrat, Raleway, Quicksand } from "@next/font/google";
import PageWithLayoutType from "../types/pageLayout";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
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

export default function App({ Component, pageProps }: AppLayoutProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);

  return (
    <Layout>
      <div
        className={`${raleway.className} ${raleway.variable} ${firaCode.variable} ${montserrat.variable} ${quicksand.variable}`}
      >
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

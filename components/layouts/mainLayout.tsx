import { LayoutProps } from "../../types/pageLayout";
import Navbar from "./navbar";

const MainLayout: LayoutProps = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default MainLayout;

import { GlobalStyles } from "components/styles/Global";
import React from "react";
import Meta from "./Meta";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Meta /> <GlobalStyles /> {children}
    </>
  );
};

export default Layout;

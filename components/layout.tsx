import React, { ReactNode } from "react";
import type { ReactElement } from "react";

interface globalLayoutProp {
  children: ReactNode;
}

const Layout = ({ children }: globalLayoutProp) => {
  return <div className="content">{children}</div>;
};

export default Layout;

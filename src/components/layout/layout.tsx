import React, { Fragment } from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <main className="main">{children}</main>
    </Fragment>
  );
};

export default Layout;

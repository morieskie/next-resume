import React, { ReactNode } from "react";

const MainContentComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div id="main" className="site-main">
      <div className="pt-wrapper">
        <div className="subpages" style={{ paddingTop: "100px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainContentComponent;

import * as React from "react";
import Sidebar from "./sidebar";

// import "../../style/layout.css";

interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  return (
    <>
      <div className="dashboard-body">
        <div className="wrapper">
          {/* sidebar */}
          <Sidebar />

          <div id="content">
            {/* page content goes here */}
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div
      className=" bg-gradient-to-t from-[#ADE563] to-white "
        style={{ minHeight: "100vh" }}
      >
        
        <div className="flex-1">
          <main className=" relative flex">
            <div className="w-full pt-10">{children}</div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;

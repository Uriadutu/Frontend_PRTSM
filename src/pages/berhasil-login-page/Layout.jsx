import React from "react";
import NavbarLogin from "../../components/berhasil-login/NavbarLogin";

const LayoutLogin = ({ children }) => {
  return (
    <React.Fragment>
      <NavbarLogin />
      <div
      className=" bg-white "
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

export default LayoutLogin;

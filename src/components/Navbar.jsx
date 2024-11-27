import React from "react";
import logoApk from "../img/iconApk.png"
import { IoPersonCircle } from "react-icons/io5";
const Navbar = () => {

  return (
    <div className="w-full fixed top-0 z-30 bg-white">
     <div className="flex items-center justify-between px-4">
      <div className="flex items-center">

      <img src={logoApk} alt="" />
      <p className="font-bold text-2xl ml-1">PT. Rekan Tani Sukses Makmur</p>
      </div>
      <IoPersonCircle size={40}/>
     </div>
    </div>
  );
};

export default Navbar;

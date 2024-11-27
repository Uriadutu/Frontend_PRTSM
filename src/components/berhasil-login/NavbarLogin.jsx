import React from "react";
// import logoApk from "../../img/iconApk.png";
import logoApk from "../../img/iconApk.png"
import { IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
const NavbarLogin = () => {
  return (
    <div className="w-full fixed top-0 z-30 bg-white">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={logoApk} alt="" />
          <p className="font-bold text-2xl ml-1">
            PT. Rekan Tani Sukses Makmur
          </p>
        </div>
        <div className="flex items-center gap-10">
          <Link to={"/home"} className="font-semibold text-black">Beranda</Link>
          <Link to={"/presensi"} className="font-semibold text-black">Presensi</Link>
          <Link to={"/penggajian"} className="font-semibold text-black">Penggajian</Link>
          <Link to={"/penilaian-kinerja"} className="font-semibold text-black">Penilaian Kinerja</Link>
          <IoPersonCircle size={40} />
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;

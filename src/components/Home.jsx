import React from "react";
import Bg from "../img/bg-home.png";
import presensi from "../img/presensi.png";
import Nilai from "../img/penilaian-kinerja.png";
import Penggajian from "../img/penggajian.png";
import DataKaryawan from "../img/data-karyawan.png";
import Pengaturan from "../img/pengaturan.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full">
      <img
        className="w-full bg-fixed top-0 object-cover"
        src={Bg}
        alt="Background"
      />

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="font-bold  text-white text-center absolute top-44">
          <p className="text-2xl">PT. REKAN TANI SUKSES MAKMUR</p>
        <p className="text-lg mt-5">Sejak 2021 membantu petani Indonesia dalam bidang<br />
        perdagangan pupuk dan pestisida.</p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute z-10 top-[-40px] w-full">
          <div className="grid grid-cols-4 gap-20 w-full px-16">
            <div className="rounded-lg px-4 py-11 flex justify-center items-center bg-[#E5FCDD]">
              Pemesanan yang Efisien
            </div>
            <div className="rounded-lg px-4 py-11 flex justify-center items-center bg-[#E5FCDD]">
              Ekonomis
            </div>
            <div className="rounded-lg px-4 py-11 flex justify-center items-center bg-[#E5FCDD]">
              Cepat
            </div>
            <div className="rounded-lg px-4 py-11 flex justify-center items-center bg-[#E5FCDD]">
              Terpercaya
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full px-16 pt-20 pb-44 ">
        <div className="mt-20">
          <p className="text-3xl font-bold">Menu Pegawai</p>
          <div className="grid grid-cols-5 w-full gap-16 mt-9 relative z-10">
            <Link
              to={"/presensi"}
              className="bg-[#D5F2CB] border border-[#174A04] rounded-lg p-6 flex justify-center items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col justify-center items-center w-full">
                <img className="mb-2" src={presensi} alt="Presensi" />
                <p className="text-center">Presensi</p>
              </div>
            </Link>
            <Link
              to={"/penilaian-kinerja"}
              className="bg-[#D5F2CB] border border-[#174A04] rounded-lg p-6 flex justify-center items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col justify-center items-center w-full">
                <img className="mb-2" src={Nilai} alt="Penilaian Kinerja" />
                <p className="text-center">Penilaian Kinerja</p>
              </div>
            </Link>
            <Link
              to={"/penggajian"}
              className="bg-[#D5F2CB] border border-[#174A04] rounded-lg p-6 flex justify-center items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col justify-center items-center w-full">
                <img className="mb-2" src={Penggajian} alt="Penggajian" />
                <p className="text-center">Penggajian</p>
              </div>
            </Link>
            <Link
              to={"/data-karyawan"}
              className="bg-[#D5F2CB] border border-[#174A04] rounded-lg p-6 flex justify-center items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col justify-center items-center w-full">
                <img className="mb-2" src={DataKaryawan} alt="Data Karyawan" />
                <p className="text-center">Data Karyawan</p>
              </div>
            </Link>
            <Link
              to={"/pengaturan"}
              className="bg-[#D5F2CB] border border-[#174A04] rounded-lg p-6 flex justify-center items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col justify-center items-center w-full">
                <img className="mb-2" src={Pengaturan} alt="Pengaturan" />
                <p className="text-center">Pengaturan</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

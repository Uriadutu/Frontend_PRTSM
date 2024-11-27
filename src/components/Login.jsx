import React from "react";
import Person from "../img/person.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" justify-center py-3 items-center w-full">
      <div className="w-full flex justify-center">
        <div className="">
          <div className="w-full flex justify-center">
            <img src={Person} alt="" />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="font-bold text-2xl">
              Masuk dengan akun untuk menelusuri semua fitur yang ada.
            </h1>
          </div>
          <p className="text-center mt-3 font-bold">
            Belum ada akun? <Link to={"/registrasi"}>Daftar</Link>
          </p>
          <div className="flex w-full justify-center mt-4">
            <div className="text-center w-full">
              <input
                className="w-[40%] px-2 py-3 border bg-[#D5F2CB] border-gray-500 rounded-3xl text-sm"
                placeholder="Nama Pengguna"
                type="text"
              /> <br />
              <input
                className="w-[40%] mt-3 px-2 py-3 border bg-[#D5F2CB] border-gray-500 rounded-3xl text-sm"
                placeholder="Nama Pengguna"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-center mt-3">

              <Link to={"/home"} className="bg-[#174A04] text-white px-4 py-2 rounded-3xl">Masuk</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

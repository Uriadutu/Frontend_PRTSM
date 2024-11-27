import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Presensi = () => {
  const data = [
    {
      id: 1,
      name: "Suryanto",
      izin: 5,
      sakit: 2,
      cuti: 3,
      alpa: 1,
    },
    {
      id: 2,
      name: "Yanto",
      izin: 3,
      sakit: 1,
      cuti: 2,
      alpa: 1,
    },
    {
      id: 3,
      name: "Surya",
      izin: 3,
      sakit: 1,
      cuti: 2,
      alpa: 1,
    },
    {
      id: 4,
      name: "Yanto",
      izin: 3,
      sakit: 1,
      cuti: 2,
      alpa: 1,
    },
  ];

  return (
    <div className="bg-white">
      <div className="w-full mt-16 px-5 h-screen relative">
        <p className="font-bold text-2xl">Presensi</p>
        <div className="flex w-full gap-1 justify-end">
          <select className="rounded-lg border w-52 border-gray-500 p-1">
            <option value="">Seles</option>
          </select>
          <select className="rounded-lg border w-52 border-gray-500 p-1">
            <option value="">Tanggal</option>
          </select>
        </div>

        <table className="min-w-full mt-4 border-collapse border border-gray-300">
          <thead className="bg-[#CEF6C0]">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Nama
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Total Jumlah Izin
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Total Jumlah Sakit
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Total Jumlah Cuti
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Total Jumlah Alpa
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Rincian
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item) => (
              <tr key={1}>
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.izin}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.sakit}
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.cuti}</td>
                <td className="border border-gray-300 px-4 py-2">{item.alpa}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Link to={`/presensi/${item.id}`} className="bg-[#DEFABB] p-1 rounded-md border border-gray-500 ">Tampilkan</Link>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="absolute bottom-3 right-5">
          <button className="bg-[#174A04] rounded-lg px-3 py-1 border border-gray-500 text-white">
            Ekspor Sebagai PDF
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Presensi;

import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Penggajian = () => {
  return (
    <div className="bg-white">
      <div className="w-full mt-16 px-5 h-screen relative">
        <p className="font-bold text-2xl">Penggajian</p>
        <div className="flex w-full gap-1 justify-end">
          <select className="rounded-lg border w-52 border-gray-500 p-1">
            <option value="">Seles</option>
          </select>
          <select className="rounded-lg border w-52 border-gray-500 p-1">
            <option value="">Tanggal</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full mt-4 border-collapse border border-gray-300">
            <thead className="bg-[#CEF6C0]">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nama
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Gaji Pokok
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Total Uang Makan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Total Uang Lembur
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Tunjangan Keluarga
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Tunjangan Kesehatan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Gaji Total
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Rincian
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Suryanto
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                Rp.3.500.000
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                Rp.500.000
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                Rp.500.000
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                Rp.375.000
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                Rp.200.000
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                Rp.5.125.000
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Link to={`/penggajian/1`} className="bg-[#DEFABB] p-1 rounded-md border border-gray-500 ">Tampilkan</Link>
                  </td>
              </tr>
              <tr>
                <td colSpan={2} className="bg-[#174A04]"></td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Total pengeluaran
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Total pengeluaran
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Total pengeluaran
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Total pengeluaran
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Total pengeluaran
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Total pengeluaran
                </td>
                <td className="bg-[#174A04]"></td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default Penggajian;

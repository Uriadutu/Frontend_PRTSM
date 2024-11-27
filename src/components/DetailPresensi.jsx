import React from "react";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const DetailPresensi = () => {
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

  const { id } = useParams();

  // Cari data berdasarkan ID dari parameter
  const selectedData = data.find((item) => item.id === parseInt(id, 10));

  return (
    <div className="bg-white">
      <div className="w-full mt-16 px-5 h-screen relative">
        {/* Jika selectedData ada, tampilkan nama, jika tidak tampilkan pesan */}
        <p className="font-bold text-2xl">
          Presensi:{" "}
          <span className="bg-gray-300 border border-gray-500 p-1 rounded-md">
            {selectedData ? selectedData.name : "Data tidak ditemukan"}
          </span>{" "}
        </p>
        <div className="flex w-full gap-1 justify-between">
          <div className="">
            <p>
              Berikut ini adalah rekapitulasi presensi dari karyawan yang Anda
              pilih.
            </p>
          </div>
          <div className="">
            <select className="rounded-lg border w-52 border-gray-500 p-1">
              <option value="">Tanggal</option>
            </select>
          </div>
        </div>

        <table className="min-w-full mt-4 border-collapse border border-gray-300">
          <thead className="bg-[#CEF6C0]">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Tanggal Masuk
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Jam Mulai Kerja
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Jam Selesai Kerja
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Lokasi Kerja
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Izin
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Sakit
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Cuti
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Alpa
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">
                29-11-2022
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                -
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                -
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                -
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                0
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                0
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                0
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Sakit
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="bg-[#174A04]"></td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Total Izin :
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Total Sakit :
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Total Cuti :
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Total Alpa :
              </td>
              <td className="bg-[#174A04]"></td>
            </tr>
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

export default DetailPresensi;

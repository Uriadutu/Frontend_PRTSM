import React from "react";
import Footer from "./Footer";
const DetailPenggajian = () => {
  return (
    <div className="bg-white">
      <div className="w-full mt-16 px-5 h-screen relative">
        {/* Jika selectedData ada, tampilkan nama, jika tidak tampilkan pesan */}
        <p className="font-bold text-2xl">
          Presensi:{" "}
          <span className="bg-gray-300 border border-gray-500 p-1 rounded-md">
            Suryanto
          </span>{" "}
        </p>
        <div className="flex w-full gap-1 justify-start">
          <div className="">
            <p>
              Berikut ini adalah rekapitulasi presensi dari karyawan yang Anda
              pilih.
            </p>
          </div>
        </div>

        <table className="min-w-full mt-4 border-collapse border border-gray-300">
          <thead className="bg-[#CEF6C0]">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-center">
                No
              </th>

              <th className="border border-gray-300 px-4 py-2 text-center">
                Tanggal Masuk
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Lokasi Kerja
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Jam Mulai Kerja
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Jam Selesai Kerja
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Uang Makan
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Uang Lembur
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Jam Lembur
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">
                1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                22-02-2023
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Manado
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                05-00
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                21-00
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Rp.25.000
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Rp.30.000
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                1 Jam
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <select className="rounded-lg border w-full border-gray-500 p-1">
                  <option value="">Pilih</option>
                  <option value="">Diambil</option>
                  <option value="">Ditolak</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={5} className="bg-[#174A04]"></td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Total Uang Makan:
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Total Uang Lembuur:
              </td>
              <td colSpan={2} className="bg-[#174A04]"></td>
            </tr>
          </tbody>
        </table>
        <div className="absolute bottom-3 right-5">
          <button className="bg-[#174A04] rounded-lg px-3 py-1 border border-gray-500 text-white">
            Ekspor Sebagai PDF
          </button>
        </div>
      </div>
      <div className="px-5">
        <div className="flex gap-3 items-end">
          <div className="">
            <table>
              <tr>
                <td className="border border-gray-300 bg-[#174A04] text-white px-6 py-1">
                  Gaji Pokok
                </td>
                <td className="border border-gray-300 bg-[white] text-black px-6 py-1">
                  Rp.3.450.000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-[#174A04] text-white px-6 py-1">
                  Tunjangan Keluarga
                </td>
                <td className="border border-gray-300 bg-[white] text-black px-6 py-1">
                  Rp.250.000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-[#174A04] text-white px-6 py-1">
                  Tunjangan Kesehatan
                </td>
                <td className="border border-gray-300 bg-[white] text-black px-6 py-1">
                  Rp.300.000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-[#174A04] text-white px-6 py-1">
                  Bonus
                </td>
                <td className="border border-gray-300 bg-[white] text-black px-6 py-1">
                  0
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-[#174A04] text-white px-6 py-1">
                  Total
                </td>
                <td className="border border-gray-300 bg-[white] text-black px-6 py-1">
                  Rp.4.000.000
                </td>
              </tr>
            </table>
          </div>
          <div className="">
            <div className="flex ">
              <div className="mr-3">
                <input type="radio" />
              </div>
              <p>Gaji Diterima</p>
            </div>
            <p>
              Di Verifikasi Oleh{" "}
              <span className="bg-gray-200 text-black font-bold">Admin</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2 my-3 items-center">

          <p className="font-bold ">Total Gaji + Uang Makan dan Uang Lembur:</p>
          <input type="text" className="bg-[#E5F1D5] border border-green-900 py-1 px-2" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPenggajian;

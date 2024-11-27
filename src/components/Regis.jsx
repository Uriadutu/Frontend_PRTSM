import React from "react";
import AddProfil from "../img/AddProfil.png";
import { Link } from "react-router-dom";

const Regis = () => {
  return (
    <div className="py-3 px-4 ">
      <div className="w-full">
        <p className="text-2xl font-bold">Registrasi Akun Pegawai</p>
        <p>Silakan isi data di bawah ini</p>
      </div>
      <div className="w-full mt-7">
        <div className="">
          <div className="flex">
            <img
              className="bg-[#D9D9D9] border border-gray-500"
              src={AddProfil}
              alt=""
            />
            <div className="ml-3 w-1/2">
              <p className="">
                Unggah foto profil untuk akun Anda. Ukuran maksimal 2 MB. Tipe
                gambar yang didukung: <br />
                .jpg, .jpeg, .png.
              </p>

              <button className="bg-[#2E7316] mt-3 text-white px-4 py-2 rounded-3xl">
                Unggah Gambar
              </button>
              <p>Belum ada gambar yang dipilih.</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="grid grid-cols-2 gap-10">
              <div className="w-full">
                <p className="font-bold">Data Pribadi</p>
                <div className="grid gap-y-2">
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Nama Lengkap*"
                  />
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Tempat/Tanggal Lahir*"
                  />
                  <select name="" className="inp-res" id="">
                    <option value="" disabled hidden>
                      Pilih Jenis Kelamin
                    </option>
                    <option value="">Laki-Laki</option>
                    <option value="">Perempuan</option>
                  </select>
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Nomor Induk Kependudukan*"
                  />
                  <input
                    className="inp-res"
                    type="number"
                    placeholder="Nomor Telepon Pribadi*"
                  />
                  <select name="" className="inp-res" id="">
                    <option value="" disabled hidden>
                      Status Pernikahan
                    </option>
                    <option value="">Menikah</option>
                    <option value="">Lajang</option>
                  </select>
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Nama Bank"
                  />
                  <input
                    className="inp-res"
                    type="number"
                    placeholder="Nomor Rekening"
                  />
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Nama Pemegang Rekening"
                  />
                  <p className="font-bold">Alamat Pribadi</p>
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Provinsi*"
                  />
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Kabupaten/Kota*"
                  />
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Kecamatan*"
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="font-bold">Data Pekerjaan</p>
                <div className="grid gap-y-2">
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Jabatan*"
                  />
                  <input
                    className="inp-res"
                    type="date"
                    placeholder="Tanggal Masuk Jadi Pegawai*"
                  />
                  <p className="font-bold">Data Akun</p>
                  <p className="">
                    Lengkapi data akun untuk mulai menggunakan situs Rekan Tani
                    Sukses Makmur.
                  </p>
                  <input
                    className="inp-res"
                    type="email"
                    placeholder="Email*"
                  />
                  <input
                    className="inp-res"
                    type="password"
                    placeholder="Kata Sandi*"
                  />
                  <input
                    className="inp-res"
                    type="password"
                    placeholder="Konfirmasi Kata Sandi*"
                  />
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <button className="bg-[#2E7316] mt-3 text-white px-4 py-2 rounded-3xl col-span-1">
                      Buat Kode Karyawan
                    </button>
                    <p className="col-span-2">
                      Tekan tombol di samping untuk membuat kode khusus akun
                      Anda.
                    </p>
                  </div>
                  <input className="inp-res" type="text" placeholder="" />
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <button className="bg-[#2E7316] mt-3 text-white px-4 py-2 rounded-3xl col-span-1">
                      Daftar Sidik Jari
                    </button>
                    <p className="col-span-2">
                      Tekan tombol di samping untuk mendaftarkan sidik jari
                      Anda. Hubungi Admin untuk menggunakan alat yang
                      disediakan.{" "}
                    </p>
                  </div>
                  <input
                    className="inp-res"
                    type="text"
                    placeholder="Pin Alternatif"
                  />

                  <p className="text-sm text-end m-0">Minimal 8 digit</p>
                  <p>Isi PIN alternatif untuk menggantikan sidik jari.</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-[#174A04] mt-3 text-white px-4 py-2 rounded-xl">
                    Daftar
                  </button>
                  <Link to="/">Kembali </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regis;

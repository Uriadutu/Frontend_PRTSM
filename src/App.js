import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisPage from "./pages/RegisPage";
import HomePage from "./pages/HomePage";
import PresensiPage from "./pages/PresensiPage";
import DetailPresensiPage from "./pages/DetailPresensiPage";
import PenggajianPage from "./pages/PenggajianPage";
import DetailPenggajianPage from "./pages/DetailPenggajianPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registrasi" element={<RegisPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/presensi" element={<PresensiPage />} />
          <Route path="/presensi/:id" element={<DetailPresensiPage />} />
          <Route path="/penggajian" element={<PenggajianPage />} />
          <Route path="/penggajian/:id" element={<DetailPenggajianPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./style.scss"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom";
import TrangGioiThieu from "../../pages/TrangGioiThieu";
import VietNamMapPage from "../../pages/VietNamMap";
import ThongTinTinh from "../../pages/ThongTinTinh";
import TrangDakLak from "../../pages/TrangDakLak";
import TrangPhuongXa from "../../pages/TrangPhuongXa";
import TrangChu from "../../pages/TrangChu";
import TrangDanToc from "../../pages/TrangDanToc/TrangDanToc";
import ThongTinDanToc from "../../pages/ThongTinDanToc";
import TestPage from "../../pages/TestPage"
import KhaoSat from "../../pages/KhaoSat";
import TuLieu from "../../pages/TuLieu";

const MainLayout = () => {
    return <div className="MainLayout">
        <Navbar />
        <div className="mainlayout-body">
            <Routes>
                <Route path="/gioi-thieu" element={<TrangGioiThieu />} />
                <Route path="/tinh" element={<VietNamMapPage />} />
                <Route path="/tinh/:id" element={<ThongTinTinh />} />
                <Route path="/dak-lak/phuong-xa/:id" element={<TrangPhuongXa />} />
                <Route path="/dak-lak" element={<TrangDakLak />} />
                <Route path="/dan-toc/:id" element={<ThongTinDanToc />} />
                <Route path="/dan-toc" element={<TrangDanToc />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/khao-sat" element={<KhaoSat />} />
                <Route path="/tu-lieu" element={<TuLieu />} />
                <Route path="/" index element={<TrangChu />} />
            </Routes>
        </div>
    </div>
}

export default MainLayout;
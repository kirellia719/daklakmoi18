import "./style.scss"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom";
import TrangChu from "../pages/TrangChu";
import TrangGioiThieu from "../pages/TrangGioiThieu";
import VietNamMapPage from "../pages/VietNamMap";
import ThongTinTinh from "../pages/ThongTinTinh";

const MainLayout = () => {
    return <div className="MainLayout">
        <div className="mainlayout-header">
            <Navbar />
        </div>
        <div className="mainlayout-body">
            <Routes>
                <Route path="/gioi-thieu" element={<TrangGioiThieu />} />
                <Route path="/viet-nam" element={<VietNamMapPage />} />
                <Route path="/phan-hoi" element={<div>Phản Hồi</div>} />
                <Route path="/tinh/:id-tinh" element={<ThongTinTinh />} />
                <Route path="/" index element={<TrangChu />} />
            </Routes>
        </div>
    </div>
}

export default MainLayout;
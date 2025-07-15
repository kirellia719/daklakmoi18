import "./style.scss"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom";
import TrangGioiThieu from "../pages/TrangGioiThieu";
import VietNamMapPage from "../pages/VietNamMap";
import ThongTinTinh from "../pages/ThongTinTinh";
import TrangDakLak from "../pages/TrangDakLak";
import TrangPhuongXa from "../pages/TrangPhuongXa";
import TrangChu from "../pages/TrangChu";

const MainLayout = () => {
    return <div className="MainLayout">
        <Navbar />
        <div className="mainlayout-body">
            <Routes>
                <Route path="/gioi-thieu" element={<TrangGioiThieu />} />
                <Route path="/viet-nam" element={<VietNamMapPage />} />
                <Route path="/tinh/:id" element={<ThongTinTinh />} />
                <Route path="/dak-lak/ward/:id" element={<TrangPhuongXa />} />
                <Route path="/dak-lak" element={<TrangDakLak />} />
                <Route path="/" index element={<TrangChu />} />
            </Routes>
        </div>
    </div>
}

export default MainLayout;
import "./style.scss"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom";
import TrangChu from "../pages/TrangChu";
import TrangGioiThieu from "../pages/TrangGioiThieu";
import VietNamMapPage from "../pages/VietNamMap";
import ThongTinTinh from "../pages/ThongTinTinh";
import AdminLayout from "../admin/AdminLayout"

const MainLayout = () => {
    return <div className="MainLayout">
        <div className="mainlayout-header">
            <Navbar />
        </div>
        <div className="mainlayout-body">
            <Routes>
                <Route path="/viet-nam" element={<VietNamMapPage />} />
                {/* <Route path="/dak-lak" element={<VietNamMapPage />} /> */}
                <Route path="/tinh/:id" element={<ThongTinTinh />} />
                {/* <Route path="/admin/*" element={<AdminLayout />} /> */}
                <Route path="/" index element={<TrangChu />} />
            </Routes>
        </div>
    </div>
}

export default MainLayout;
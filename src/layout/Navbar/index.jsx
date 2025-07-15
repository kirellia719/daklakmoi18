import { useState } from "react";
import "./style.scss"
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import Logo from "../../components/Logo"
import BackgroundMusic from "../../components/BackgroundMusic"
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);

    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) {
            setOpen(false);
        }
    }

    return <div className="Navbar">
        <div className="navbar-container">
            <NavLink to={"/"}><Logo /></NavLink>
            <div className="redirect-container">
                <div className="nav-list">
                    <div className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`} to="/gioi-thieu">Giới thiệu</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`} to="/tinh-thanh">Việt Nam</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`} to="/dak-lak">Đăk Lăk</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`} to="/dan-toc">Dân tộc</NavLink>
                    </div>
                </div>
            </div>
            <div className="do-container">
                <div className="music-btn">
                    <BackgroundMusic />
                </div>
                <div className="menu-btn">
                    <RiMenu3Line onClick={handleToggle} />
                </div>
            </div>
        </div>
        <div className={`modal ${open ? "show" : ""}`} onClick={handleCloseModal}>
            <div className="nav-container">
                <div className="nav-header">
                    <Logo />
                    <div className="close-btn" onClick={() => setOpen(false)}><RiCloseLine /></div>
                </div>
                <div className="nav-list">
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`} to="/gioi-thieu" onClick={() => setOpen(false)}>Giới thiệu</NavLink>
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`} to="/viet-nam" onClick={() => setOpen(false)}>Việt Nam</NavLink>
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`} to="/dak-lak" onClick={() => setOpen(false)}>Đăk Lăk</NavLink>
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`} to="/dan-toc" onClick={() => setOpen(false)}>Dân tộc</NavLink>
                </div>
            </div>

        </div>

    </div>;
};

export default Navbar;
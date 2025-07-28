import { useState } from "react";
import "./style.scss"
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import Logo from "../../../components/Logo"
import BackgroundMusic from "../../../components/BackgroundMusic"
import { NavLink } from "react-router-dom";
import list from "../list-nav";

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
                    {list.map(l => <div className="nav-item" key={`${l.to}-desktop`}>
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`} to={l.to} >{l.title}</NavLink>
                    </div>)}
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
                    {list.map(l => <div className="nav-item" key={l.to + "mobile"} >
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`} to={l.to} onClick={() => setOpen(false)}>{l.title}</NavLink>
                    </div>)}

                </div>
            </div>

        </div>

    </div>;
};

export default Navbar;
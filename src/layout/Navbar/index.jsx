import { useState } from "react";
import "./style.scss"
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Logo from "../../components/Logo"
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);

    return <div className="Navbar">
        <div className="navbar-container">
            <div className="navbar-left">
                <Logo />
                <div className="menu-button" onClick={handleToggle}>
                    {open ? <RiCloseLine /> : <RiMenuLine />}
                </div>
            </div>
            <div className={`navbar-right ${open ? "open" : ""}`}>
                <NavLink className={"nav__link"} to={"/"} onClick={() => setOpen(false)}>Trang chủ</NavLink>
                <NavLink className={"nav__link"} to={"/gioi-thieu"} onClick={() => setOpen(false)}>Giới thiệu</NavLink>
                <NavLink className={"nav__link"} to={"/viet-nam"} onClick={() => setOpen(false)}>Việt Nam</NavLink>
                <NavLink className={"nav__link"} to={"/phan-hoi"} onClick={() => setOpen(false)}>Phản hồi</NavLink>
            </div>

        </div>

    </div>;
};

export default Navbar;
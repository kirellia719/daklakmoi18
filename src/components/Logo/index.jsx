import "./style.scss"
import LogoIMG from "./logo.png";
const Logo = () => {
    return <div className="logo">
        {/* <strong>TNTM</strong> */}
        <img src={LogoIMG} alt="" />
    </div>
}

export default Logo;


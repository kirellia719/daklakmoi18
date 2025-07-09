import "./style.scss";

import HinhAnh1 from "../../assets/ha-noi-1.jpg";
import HinhAnh2 from "../../assets/ha-noi-2.jpg";
import dataTinhThanh from "./dulieutinhthanh";
import { useParams } from "react-router-dom";

const ThongTinTinh = () => {
    const { id } = useParams();
    console.log(id);

    const province = dataTinhThanh.find(p => p.id == id);
    return <div className="ThongTinTinh">
        {
            province ? <div className="container-main">
                <h2 className="province-name">{province.name}</h2>
                {/* <div className="image-group">
                    <img className="image-local" src={HinhAnh1} alt="" />
                    <img className="image-local" src={HinhAnh2} alt="" />
                    <iframe src="https://www.google.com/maps/embed?pb=!4v1751817652327!6m8!1m7!1sCAoSLEFGMVFpcFA3QWhZcV95U1l5bldHV3V4TmVPNTJ4VDJFRjBZenJWc3Q5bXF5!2m2!1d21.03580576634671!2d105.8335129819305!3f346.58!4f0!5f0.8160813932612223" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
                <div className="province-info">
                    {province.content}
                </div>
            </div> : ""
        }
    </div>
}

export default ThongTinTinh;
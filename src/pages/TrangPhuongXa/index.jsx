import "./style.scss";

import dataPhuongXa from "../TrangDakLak/phuongxaData";
import { useParams } from "react-router-dom";

const TrangPhuongXa = () => {
    const { id } = useParams();

    const ward = dataPhuongXa.find(p => p.id == id);
    return <div className="TrangPhuongXa">
        {
            ward ? <div className="container-main">
                <h2 className="ward-name">{ward.name}</h2>
                <div className="ward-image">
                    {ward.image.map(i => <img key={i} src={`/hinh-anh/${i}`} alt="" />)}
                </div>
                <div className="ward-info">
                    <div className="w-container">
                        <b>Giới thiệu chung</b>
                        <p>{ward.introduce}</p>
                        <ul>
                            <li>{ward.square}</li>
                            <li>{ward.population}</li>
                            {/* <li>Tổ chức hành chính: {ward.body}</li> */}
                        </ul>
                    </div>
                    <div className="w-container">
                        <b>Dân tộc</b>
                        <p>{ward.ethnic}</p>
                    </div>

                    <div className="w-container">
                        <b>Vị trí địa lý:</b>
                        <ul>
                            {ward.location.map(l => <li key={l}>{l}</li>)}
                        </ul>
                    </div>

                    <div className="w-container">
                        <b>Đặc điểm kinh tế</b>
                        {Array.isArray(ward.economy)
                            ? <ul>
                                {ward.economy.map(l => <li key={l}>{l}</li>)}
                            </ul>
                            : <p>{ward.economy}</p>}
                    </div>
                    <div className="w-container">
                        <b>Xã hội - Văn hoá - Lịch sử </b>
                        <p>{Array.isArray(ward.info)
                            ? <ul>
                                {ward.info.map(l => <li key={l}>{l}</li>)}
                            </ul>
                            : <>{ward.info}</>
                        }
                        </p>
                    </div>
                </div>
            </div> : ""
        }
    </div>
}

export default TrangPhuongXa;
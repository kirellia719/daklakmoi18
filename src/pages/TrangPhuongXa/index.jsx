import "./style.scss";

import dataPhuongXa from "../TrangDakLak/phuongxaData";
import { useParams } from "react-router-dom";

function isObject(value) {
   return typeof value === "object" && value !== null && !Array.isArray(value);
}

const renderWardInfo = (info) => {
   console.log(info);

   return isObject(info) ? (
      <li key={info.des}>
         {info.des}
         <ul style={{ listStyle: `circle` }}>{info.list && info.list.map((l) => <li key={l}>{l}</li>)}</ul>
      </li>
   ) : (
      <li key={info}>{info}</li>
   );
};

const TrangPhuongXa = () => {
   const { id } = useParams();

   const ward = dataPhuongXa.find((p) => p.id == id);
   return (
      <div className="TrangPhuongXa">
         {ward ? (
            <div className="container-main">
               <h2 className="ward-name">{ward.name}</h2>
               {ward.image360 && <div className="vr-view">
                  <div className="vr-container" dangerouslySetInnerHTML={{ __html: ward.image360 }} />
               </div>}
               {
                  ward.image360 ? `` : <div className="ward-image">
                     {ward.image.map((i) => (
                        <img key={i} src={`/hinh-anh/${i}`} alt="" />
                     ))}
                  </div>
               }
               <div className="ward-info">
                  <div className="w-container">
                     <div>
                        <b>Giới thiệu chung</b>
                     </div>
                     <p>{ward.introduce}</p>
                     <ul>
                        <li>{ward.square}</li>
                        <li>{ward.population}</li>
                        {/* <li>Tổ chức hành chính: {ward.body}</li> */}
                     </ul>
                  </div>
                  <div className="w-container">
                     <div>
                        <b>Dân tộc</b>
                     </div>
                     {Array.isArray(ward.ethnic) ? (
                        <ul>
                           {ward.ethnic.map((l) => (
                              <li key={l}>{l}</li>
                           ))}
                        </ul>
                     ) : (
                        <p>{ward.ethnic}</p>
                     )}
                  </div>

                  <div className="w-container">
                     <b>Vị trí địa lý:</b>
                     <ul>
                        {ward.location.map((l) => (
                           <li key={l}>{l}</li>
                        ))}
                     </ul>
                  </div>

                  <div className="w-container">
                     <div>
                        <b>Đặc điểm kinh tế</b>
                     </div>
                     {ward.economy_description ?? <p>{ward.economy_description}</p>}
                     {Array.isArray(ward.economy) ? (
                        <ul>
                           {ward.economy.map((l) => (
                              renderWardInfo(l)
                           ))}
                        </ul>
                     ) : (
                        <p>{ward.economy}</p>
                     )}
                  </div>
                  <div className="w-container">
                     <div>
                        <b>Xã hội - Văn hoá - Lịch sử </b>
                     </div>
                     {ward.info_description ?? <p>{ward.info_description}</p>}
                     <p>
                        {Array.isArray(ward.info) ? (
                           <ul>{ward.info.map((l) => renderWardInfo(l))}</ul>
                        ) : (
                           <>{ward.info}</>
                        )}
                     </p>
                  </div>
                  {
                     ward.image360 ? <div className="ward-image">
                        {ward.image.map((i) => (
                           <img key={i} src={`/hinh-anh/${i}`} alt="" />
                        ))}
                     </div> : ``
                  }
               </div>
            </div>
         ) : (
            ""
         )}
      </div>
   );
};

export default TrangPhuongXa;

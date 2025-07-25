import "./style.scss";

import dataTinhThanh from "./dulieumoi";
import { useParams } from "react-router-dom";
import { useRef } from "react";

import TTSButton from "../../components/TTSButton"

const ThongTinTinh = () => {
   const { id } = useParams();
   console.log(id);
   const contentRef = useRef();

   const province = dataTinhThanh.find((p) => p.id == id);
   return (
      <div className="ThongTinTinh">
         {province ? (
            <div className="container-main">
               <h2 className="province-name">{province.name}</h2>
               <div className="vr-view">
                  <div className="vr-container" dangerouslySetInnerHTML={{ __html: province.image360 }} />
               </div>
               <div className="province-info" ref={contentRef}>
                  <div className="p-container">
                     <b>Giới thiệu chung</b>
                     <ul>
                        <li>{province.introduce.content}</li>
                        <li>Diện tích: {province.introduce.square}</li>
                        <li>Dân số: {province.introduce.population}</li>
                        <li>Tổ chức hành chính: {province.introduce.body}</li>
                     </ul>
                  </div>
                  <div className="p-container">
                     <b>Dân tộc</b>
                     <p>{province.ethnic}</p>
                  </div>

                  <div className="p-container">
                     <b>Vị trí địa lý:</b>
                     <ul>
                        {province.location.map((l) => (
                           <li key={l}>{l}</li>
                        ))}
                     </ul>
                  </div>

                  <div className="p-container">
                     <b>Đặc điểm văn hoá: </b>
                     <p>{province.culture.description}</p>
                     <ul>
                        {province.culture.details.map((l) => (
                           <li key={l}>{l}</li>
                        ))}
                     </ul>
                  </div>
                  <div className="p-container">
                     <b>Đặc điểm kinh tế</b>
                     {Array.isArray(province.economy) ? (
                        <ul>
                           {province.economy.map((l) => (
                              <li key={l}>{l}</li>
                           ))}
                        </ul>
                     ) : (
                        <p>{province.economy}</p>
                     )}
                  </div>
                  <div className="p-container">
                     <div className="image-container">
                        {province.image.map(i => <div className="image" key={i}><img src={`/tinh-thanh/${i}`} /></div>)}
                     </div>
                  </div>
               </div>
               <TTSButton contentRef={contentRef} />
            </div>
         ) : (
            ""
         )}
      </div>
   );
};

export default ThongTinTinh;

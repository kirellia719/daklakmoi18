import "./style.scss";

import thongtinDanToc from "../TrangDanToc/dulieuDanToc";
import { useParams } from "react-router-dom";
import TrangChiTietDanToc from "./TrangChiTietDanToc/TrangChiTietDanToc";


const DanTocWrapper = () => {
   const { id } = useParams();
   const idSo = parseInt(id, 10);

   const danToc = thongtinDanToc.find((dt) => dt.id === idSo);

   return (
      <div>
         {danToc ? (
            <TrangChiTietDanToc danToc={danToc} />
         ) : (
            <p style={{ padding: "2rem", textAlign: "center" }}>Không tìm thấy dân tộc với ID này.</p>
         )}
      </div>
   );
};

export default DanTocWrapper;

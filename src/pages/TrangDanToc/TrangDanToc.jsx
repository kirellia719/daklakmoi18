import "./style.scss"

import PageEndIcon from '@rsuite/icons/PageEnd';
import dulieuDanToc from "./dulieuDanToc"
import { Button, Card, } from "rsuite";
import { NavLink } from "react-router-dom";

const TrangDanToc = () => {

  return (
    <div className="ethnic-list-container">
      <h1 className="ethnic-title">Danh sách các dân tộc Việt Nam</h1>
      <div className="ethnic-grid">
        {dulieuDanToc.map((danToc) => (
          <div className="ethnic-card" key={danToc.id}>
            <h2>{danToc.ten_dan_toc}</h2>
            <p><strong>Tên gọi khác:</strong> {danToc.thong_tin_chung.ten_goi_khac || "Không rõ"}</p>
            <p><strong>Dân số:</strong> {danToc.thong_tin_chung.dan_so || "Không rõ"}</p>
            <p>
              <strong>Ngôn ngữ:</strong>{" "}
              {danToc.thong_tin_chung.ngon_ngu?.match(/ngữ hệ[^,.;:{}）)」】]*/i)?.[0] || "Không rõ"}
            </p>
            <NavLink to={`/dan-toc/${danToc.id}`}>Xem thêm</NavLink>
          </div>
        ))}
      </div>
    </div>
  );

};

export default TrangDanToc;
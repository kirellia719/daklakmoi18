import "./style.scss";

import anh1 from "./anh1.jpg";
import anh2 from "./anh2.jpg";
import anh3 from "./anh3.jpg";
import anh4 from "./anh4.jpg";
import { NavLink } from "react-router-dom";

const TrangChu = () => {
  return <div className="TrangChu">
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-tag">📍 Vali thông minh 360</span>
          <h1>Hành trình khám phá Tổ quốc trong kỷ nguyên vươn mình của dân tộc</h1>
          <p>
            Vali thông minh 360 là bộ công cụ học tập trực quan – giúp học sinh, giáo viên và cộng đồng dễ dàng tra cứu, tìm hiểu địa phận hành chính Việt Nam sau khi sáp nhập, bằng khối lập phương có mã QR và hình ảnh sinh động.
          </p>
          <div className="hero-cta">
            <button className="cta-btn" onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}>
              Khám phá ngay
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-stack">
            <img src={anh1} alt="Hình 1" className="img img1" />
            <img src={anh2} alt="Hình 2" className="img img2" />
            <img src={anh3} alt="Hình 3" className="img img3" />
            <img src={anh4} alt="Hình 4" className="img img4" />
          </div>
        </div>
      </div>
    </section>
    <section className="cards-section">
      <div className="cards-header">
        <p className="subtitle">Khối lập phương nổi bật</p>
        <h2 className="title">Khám phá dữ liệu</h2>
      </div>
      <div className="card-list">
        <NavLink to="/tinh-thanh" className="card">
          <img src={anh1} alt="Khối tỉnh thành" />
          <div className="card-content">
            <h3>Tỉnh & Thành phố</h3>
            <p>Tra cứu 34 đơn vị hành chính cấp tỉnh và thành phố – có QR và hình ảnh trực quan.</p>
          </div>
        </NavLink>

        <NavLink to="/xa-phuong" className="card">
          <img src={anh2} alt="Khối xã phường" />
          <div className="card-content">
            <h3>Xã, Phường</h3>
            <p>Thông tin 102 xã/phường của Đắk Lắk sau sáp nhập. Kết hợp bản đồ & QR học tập.</p>
          </div>
        </NavLink>

        <NavLink to="/dan-toc" className="card">
          <img src={anh3} alt="Khối dân tộc" />
          <div className="card-content">
            <h3>Dân tộc Việt Nam</h3>
            <p>Khám phá đặc điểm văn hóa, trang phục và thông tin của các dân tộc thông qua mã QR và hình ảnh trực quan.</p>
          </div>
        </NavLink>
      </div>
    </section>
  </div>
}

export default TrangChu;
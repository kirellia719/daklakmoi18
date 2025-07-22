import "./style.scss";

import anhVN from "./vn.jpg";
import anhDL from "./daklak.jpg";
import anhDT from "./dantoc.jpg";
import anh from "./vali.png";
import { NavLink } from "react-router-dom";

import TiltImage from "../../components/TiltImage"
import Footer from "./Footer";

const TrangChu = () => {
  return <div className="TrangChu">
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-tag">Vali thông minh 360 </div>
          <div className="hero-des">Hành trình khám phá Tổ quốc trong kỷ nguyên vươn mình của dân tộc</div>
          <div className="hero-cta">
            <NavLink className="cta-btn" to={"/gioi-thieu"}>
              Khám phá ngay
            </NavLink>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-stack">
            <TiltImage src={anh} width={500} />
          </div>
        </div>
      </div>
    </section >
    <section className="cards-section">
      <div className="cards-header">
        {/* <p className="subtitle">Khối lập phương nổi bật</p> */}
        <h2 className="title">Khám phá dữ liệu</h2>
      </div>
      <div className="card-list">
        <NavLink to="/tinh" className="card">
          <img src={anhVN} alt="Khối tỉnh thành" />
          <div className="card-content">
            <h3>Tỉnh thành Việt Nam</h3>
            <p>Tra cứu 34 đơn vị hành chính cấp tỉnh và thành phố – có QR và hình ảnh trực quan.</p>
          </div>
        </NavLink>

        <NavLink to="/dak-lak" className="card">
          <img src={anhDL} alt="Khối xã phường" />
          <div className="card-content">
            <h3>Xã, Phường của Đăk Lăk</h3>
            <p>Thông tin 102 xã/phường của Đắk Lắk sau sáp nhập. Kết hợp bản đồ & QR học tập.</p>
          </div>
        </NavLink>

        <NavLink to="/dan-toc" className="card">
          <img src={anhDT} alt="Khối dân tộc" />
          <div className="card-content">
            <h3>Dân tộc ở Việt Nam</h3>
            <p>Khám phá đặc điểm văn hóa, trang phục và thông tin của các dân tộc thông qua mã QR và hình ảnh trực quan.</p>
          </div>
        </NavLink>
      </div>
    </section>
    <Footer />
  </div >
}

export default TrangChu;
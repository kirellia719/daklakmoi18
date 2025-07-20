import { useRef } from "react";
import "./TrangChiTietDanToc.scss";
import TTSButton from "../../../components/TTSButton";

const iconMap = {
  "Lịch sử": "📜",
  "Hoạt động sản xuất": "⚒️",
  "Ăn": "🍚",
  "Mặc": "👕",
  "Ở": "🏠",
  "Phương tiện vận chuyển": "🧺",
  "Quan hệ xã hội": "👥",
  "Cưới xin": "💍",
  "Ma chay": "⚰️",
  "Nhà mới": "🛖",
  "Lễ tết": "🎉",
  "Lịch": "🗓️",
  "Học": "📖",
  "Văn nghệ": "🎶",
  "Chơi": "🪁",
};

const TrangChiTietDanToc = ({ danToc }) => {
  const sectionsRef = useRef({});
  const contentRef = useRef();

  if (!danToc) return <p>Không có dữ liệu.</p>;

  const { ten_dan_toc, thong_tin_chung, noi_dung_chi_tiet } = danToc;

  return (
    <div className="chi-tiet-layout">
      <main className="noi-dung" ref={contentRef}>
        <h1 className="ten-dan-toc">{ten_dan_toc}</h1>

        <section className="thong-tin-chung">
          <h2>Thông tin chung</h2>
          <ul>
            <li><strong>Tên tự gọi:</strong> {thong_tin_chung.ten_tu_goi}</li>
            <li><strong>Tên gọi khác:</strong> {thong_tin_chung.ten_goi_khac}</li>
            <li><strong>Dân số:</strong> {thong_tin_chung.dan_so}</li>
            <li><strong>Ngôn ngữ:</strong> {thong_tin_chung.ngon_ngu}</li>
          </ul>
        </section>

        {noi_dung_chi_tiet.map((muc, index) => {
          const id = muc.tieu_de.toLowerCase().replace(/\s+/g, "-");
          return (
            <section
              key={index}
              id={id}
              ref={(el) => (sectionsRef.current[id] = el)}
              className="noi-dung-muc"
            >
              <h3>
                {muc.tieu_de}<span className="icon">{iconMap[muc.tieu_de] || "📌"}</span>
              </h3>
              <p>{muc.noi_dung}</p>
            </section>

          );
        })}
      </main>

      <aside className="muc-luc">
        <h2>Mục lục</h2>
        <ul>
          {noi_dung_chi_tiet.map((muc, index) => {
            const id = muc.tieu_de.toLowerCase().replace(/\s+/g, "-");
            return (
              <li key={index}>
                <button
                  onClick={() => {
                    const el = document.getElementById(id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  {iconMap[muc.tieu_de] || "📌"} {muc.tieu_de}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
      <TTSButton contentRef={contentRef} />
    </div>
  );
};

export default TrangChiTietDanToc;

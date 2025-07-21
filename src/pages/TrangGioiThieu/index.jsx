
import "./style.scss"
import anh1 from "./hinh-anh/1.jpg"
import anh2 from "./hinh-anh/2.jpg"
import anh3 from "./hinh-anh/3.jpg"
import anh4 from "./hinh-anh/4.jpg"
import anh5 from "./hinh-anh/5.png"
import anh6 from "./hinh-anh/6.jpg"
import anh7 from "./hinh-anh/7.png"
// import anh5 from "./hinh-anh/5.jpg"
import TiltImage from "../../components/TiltImage"
import { useRef } from "react"
import TTSButton from "../../components/TTSButton"

const HomePage = () => {
    const contentRef = useRef();
    return <div className="HomePage">
        <div className="home-container" ref={contentRef}>
            <div className="intro-image">
                <div className="photo-wrapper">
                    <img src={anh1} alt="Tôi yêu Việt Nam" />
                </div>
                <div className="frame">
                    <img src={anh2} alt="" />
                </div>
            </div>
            <p>Kính chào quý thầy cô, các bạn và mọi người!</p>
            <div className="tieu-de">
                <div>
                    <strong style={{ color: "red" }}>“Vali Thông minh 360”</strong>
                </div>
                <div>
                    <strong style={{ color: "#0070c0" }}>Hành trình khám phá Tổ quốc trong kỷ nguyên vươn mình</strong>
                </div>
            </div>

            <div className="gioi-thieu g-container">
                <p>Trong bối cảnh đất nước đang đổi mới mạnh mẽ, sáp nhập các tỉnh, tinh gọn bộ máy hành chính, việc cập nhật kiến thức về địa lý, văn hóa và xã hội trở thành nhu cầu thiết yếu – nhất là với học sinh. Thế nhưng, sách giáo khoa, bản đồ treo tường lại thường chậm thay đổi so với thực tế.</p>
                <p>Thấu hiểu điều đó, nhóm học sinh Trường THCS Hàm Nghi (Đắk Lắk) đã sáng tạo ra <b>“Vali Thông minh 360 – Hành trình khám phá Tổ quốc trong kỷ nguyên vươn mình của dân tộc”</b>  – một sản phẩm học tập hiện đại, tích hợp công nghệ, giúp việc học Địa lý – Lịch sử – Giáo dục địa phương trở nên trực quan – sinh động – luôn được cập nhật.</p>
            </div>

            <div className="noi-dung g-container">
                <div className="title">🎯Mục đích</div>
                <p><i style={{ color: "red" }}>“Vali Thông minh 360”</i> được sáng tạo để giải quyết bài toán học kiến thức địa lý, hành chính, dân tộc luôn bám sát thực tế, nhất là khi đất nước thực hiện sáp nhập các tỉnh, xã, thay đổi bản đồ hành chính.</p>
                <p><i style={{ color: "red" }}>“Vali thông minh 360”</i> còn giúp học sinh cập nhật kịp thời thông tin mới mà không cần chờ đợi sách giáo khoa mới. Chỉ cần cập nhật website, dán lại mã QR mới là tất cả học sinh, giáo viên, phụ huynh đều có thể tiếp cận thông tin nhanh chóng và chính xác nhất. Đây là một giải pháp học tập linh hoạt, thông minh, hiện đại và tiết kiệm, phù hợp với xu hướng chuyển đổi số trong giáo dục hiện nay.Từ đó, ghi nhớ tự nhiên, tiếp thu linh hoạt, hình thành kỹ năng số và nuôi dưỡng tình yêu quê hương, bản sắc dân tộc.</p>
            </div>

            <div className="cau-tao g-container">
                <div className="title">⚙️ Cấu tạo</div>
                <div className="image-group">
                    <img src={anh3} alt="" />
                    <img src={anh4} alt="" />
                </div>
                <ul>
                    <li>Thiết kế vali di động, nhỏ gọn, dễ mang theo.</li>
                    <li>
                        Bên trong chia 2 ngăn chính:
                        <ul>
                            <li>Ngăn 1: Chứa 120 khối lập phương, mỗi khối mang thông tin 102 xã/phường mới của tỉnh (sau sáp nhập) và các khối trò chơi, quà thưởng.</li>
                            <div className="six-face">
                                <img src={anh5} alt="" />
                                <div className="des">
                                    <i>Bảng 1: Hình ảnh 6 mặt của 102 khối lập phương</i>
                                </div>
                            </div>
                            <div className="six-face">
                                <div style={{ textAlign: "center" }}>
                                    <img src={anh6} alt="" style={{ width: "60%" }} />
                                </div>
                                <div className="des">
                                    <i>Bảng 2: Hình ảnh của 18 khối lập phương dành cho câu hỏi phụ hoặc phần quà bất ngờ khi tổ chức trò chơi</i>
                                </div>
                            </div>
                            <br />
                            <li>Ngăn 2: Chứa 60 khối lập phương đại diện cho 34 tỉnh/thành mới, 54 dân tộc Việt Nam cùng các khối trò chơi mở rộng.</li>
                            <div className="six-face">
                                <img src={anh7} alt="" />
                                <div className="des">
                                    <i>Bảng 3: Hình ảnh 6 mặt của 34 khối lập phương</i>
                                </div>
                            </div>
                            <div className="six-face">
                                <div style={{ textAlign: "center" }}>
                                    <img src={anh6} alt="" style={{ width: "60%" }} />
                                </div>
                                <div className="des">
                                    <i>Bảng 4: Hình ảnh của 26 khối lập phương dành cho câu hỏi phụ hoặc phần quà bất ngờ khi tổ chức trò chơi</i>
                                </div>
                            </div>

                        </ul>

                    </li>
                    <li>Mỗi khối gồm 6 mặt: số thứ tự, tên xã/tỉnh/dân tộc, dân số, diện tích, hình ảnh đặc trưng, mã QR tra cứu trực tuyến.</li>
                    <li>Vali có đèn LED, bản đồ nền in sẵn, cửa trượt mica, tay cầm, khóa gài, bánh xe tiện di chuyển.</li>
                    <li>Tích hợp website (<span className="my-link">daklakmoi.edu.vn</span>) lưu trữ dữ liệu số, giọng đọc AI, hình ảnh, video minh họa.</li>
                </ul>
            </div>

            <div className="hieu-qua g-container">
                <div className="title">✅ Hiệu quả</div>
                <ul>
                    <li>Tạo phương pháp học mới: học sinh không chỉ ngồi chép mà trực tiếp “chạm – ghép – quét – nghe – chơi – nhớ”.</li>
                    <li>Theo khảo sát thực tế: học sinh ghi nhớ kiến thức địa lý, tên tỉnh, xã mới nhanh hơn 40%, tỉ lệ ghi nhớ đúng đạt 80%.</li>
                    <li>95% học sinh thành thạo quét QR, tra cứu thông tin online – phát triển năng lực công dân số.</li>
                    <li>Giúp giáo viên dễ tổ chức tiết học đổi mới: trò chơi ghép bản đồ, bốc khối bí mật, bản đồ sống, thuyết trình nhóm...</li>
                    <li>Gắn kết gia đình: Phụ huynh có thể cùng con chơi, tra cứu thông tin, ôn bài.</li>

                </ul>
            </div>
            <div className="kha-nang g-container">
                <div className="title">🚀 Khả năng sử dụng</div>
                <ul>
                    <li>Linh hoạt cho các môn Địa lý, Lịch sử, Giáo dục địa phương, STEM, Hoạt động trải nghiệm.</li>
                    <li>Dễ áp dụng ở mọi cấp học:
                        <ul>
                            <li>Mầm non: Làm quen bản đồ, hình ảnh dân tộc.</li>
                            <li>Tiểu học: Ghép bản đồ, nhận diện đặc sản, văn hóa.</li>
                            <li>THCS–THPT: Thuyết trình, nghiên cứu, làm đề tài STEM.</li>

                        </ul>
                    </li>
                    <li>Trưng bày được ở thư viện, hội chợ STEM, nhà văn hóa cộng đồng – đưa kiến thức đến vùng sâu vùng xa.</li>
                    <li>Dễ cập nhật: chỉ cần đổi dữ liệu website, dán lại mã QR mà không phải làm lại toàn bộ vali.</li>
                    <li>Chi phí thấp, vật liệu thân thiện môi trường, dễ sản xuất số lượng lớn.</li>

                </ul>
            </div>
            <div className="ket-noi g-container">
                <div className="title">🌍 Kết nối truyền thống & công nghệ – Gieo tri thức – Lan tỏa yêu thương</div>
                <p><i style={{ color: "red" }}>“Vali Thông minh 360”</i> không chỉ là đồ dùng học tập mà còn là người bạn đồng hành, biến mỗi tiết học thành một chuyến phiêu lưu khám phá đất nước, khơi dậy niềm tự hào dân tộc và trang bị kỹ năng công dân số cho thế hệ mới.</p>
                <p>Nhóm chúng em hy vọng chiếc <i style={{ color: "red" }}>“Vali Thông minh 360”</i> sẽ góp phần lan tỏa tinh thần yêu nước, niềm tự hào dân tộc và cổ vũ cho mục tiêu xây dựng một Việt Nam vươn mình mạnh mẽ trong kỷ nguyên mới.</p>
                <p>Chúng em rất mong nhận được sự góp ý, ủng hộ của quý thầy cô và mọi người để sản phẩm ngày càng hoàn thiện, phục vụ tốt hơn cho việc học tập và tìm hiểu kiến thức.</p>
            </div>
            <div className="cam-on">- Xin chân thành cảm ơn! -</div>

        </div>
        &nbsp;
        <TTSButton contentRef={contentRef} />
    </div>
}

export default HomePage;
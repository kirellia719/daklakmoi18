
import "./style.scss"
import anh1 from "./hinh-anh/1.jpg"
import anh2 from "./hinh-anh/2.jpg"
import anh3 from "./hinh-anh/3.jpg"
import anh4 from "./hinh-anh/4.jpg"
import anh5 from "./hinh-anh/5.jpg"
import TiltImage from "../../components/TiltImage"

const HomePage = () => {
    return <div className="HomePage">
        <div className="home-container">
            <div className="tieu-de">
                <strong><i>“Vali thông minh 360 - Hành trình khám phá tổ quốc trong kỷ nguyên vươn mình của dân tộc”</i></strong>
            </div>
            <p style={{ color: "red", fontWeight: 700 }}>Lời mở đầu</p>
            <p>Kính chào quý thầy cô, các bạn và mọi người!</p>
            <p><strong>“Vali thông minh 360 – Cùng em khám phá Tổ quốc trong kỷ nguyên vươn mình của dân tộc”.</strong></p>
            <div className="image img1">
                <TiltImage src={anh1} />
            </div>
            <ol>
                <li><b>Cấu tạo của Vali thông minh 360</b></li>
                <p>Thiết kề bên trong có chứa “Vali thông minh 360” được thiết kế 2 ngăn chứa các khối lập phương có thể tháo rời. </p>
                <ul >
                    <li>Ngăn số một chứa 120 khối lập phương (mỗi khối lập phương gồm sáu mặt) sẽ thiết kế như sau: </li>
                    <ul className="custom-list">
                        <li>Mặt số 1: Được dán số thứ tự từ 1 đến 102 (tương ứng với 102 xã, phường của tỉnh Đắk Lắk mới sau khi sáp nhập.</li>
                        <li>Mặt số 2: tên của xã, phường và mã QR truy cập vào website để có thông tin tìm hiểu của xã, phường đó.</li>
                        <li>Mặt số 3: thông tin về diện tích, dân số tương ứng với xã, phường.</li>
                        <li>Mặt số 4: tên gọi dân tộc Việt Nam và mã QR truy cập vào website để có thông tin tìm hiểu về dân tộc đó.</li>
                        <li>Mặt số 5: Hình ảnh trang phục đặc trưng ứng với dân tộc đó.</li>
                        <li>Mặt số 6: hình cắt bởi bản đồ hành chính của tỉnh Đắk lắk sau khi sáp nhập.</li>
                    </ul>
                    <p>Ngoài 102 khối được bố trí như trên, nhóm nghiên cứu chuẩn bị thêm 18 khối lập phương tương ứng với các phần quà bất ngờ hoặc câu hỏi phụ khi tổ chức trò chơi.</p>
                    <div className="image">
                        <img src={anh2} alt="" />
                        <small><i>Hình ảnh 6 mặt của 102 khối lập phương</i></small>
                    </div>

                    <div className="image" style={{ maxWidth: 600 }}>
                        <img src={anh3} alt="" />
                        <small><i>Hình ảnh của một số câu hỏi phụ hoặc phần quà bất ngờ khi tổ chức trò chơi</i></small>
                    </div>

                    <li>
                        Ngăn số hai chứa 60 khối lập phương (mỗi khối lập phương gồm sáu mặt) sẽ thiết kế như sau:
                        <p>34 khối lập phương được bố trí dán decal như sau:</p>
                        <ul className="custom-list">
                            <li>Mặt số 1: Được dán số thứ tự từ 1 đến 34 (tương ứng với 34 đơn vị hành chính cấp tỉnh gồm 28 tỉnh và 6 thành phố).</li>
                            <li>Mặt số 2: tên của tỉnh, thành phố. </li>
                            <li>Mặt số 3: thông tin về diện tích, dân số của tỉnh, thành phố tương ứng.</li>
                            <li>Mặt số 4: mã QR truy cập vào website để có thông tin tìm hiểu của tỉnh, thành phố đó.</li>
                            <li>Mặt số 5: Hình ảnh đặc trưng tương ứng với tỉnh, thành phố.   </li>
                            <li>Mặt số 6: hình cắt bởi bản đồ Việt Nam.</li>
                        </ul>
                        <p>Ngoài 34 khối được bố trí như trên, nhóm nghiên cứu chuẩn bị thêm 26 khối lập phương tương ứng với các phần quà bất ngờ hoặc câu hỏi phụ khi tổ chức trò chơi.</p>
                        <div className="image">
                            <img src={anh4} alt="" />
                            <small><i>Hình ảnh 6 mặt của 34 khối lập phương</i></small>
                        </div>

                        <p>Mỗi khối gỗ đều có gắn mã QR thông minh. Khi chúng ta dùng điện thoại hoặc máy tính bảng quét vào mã QR này, ngay lập tức mọi thông tin về tỉnh như: diện tích, dân số, vị trí địa lý, các di tích lịch sử, danh lam thắng cảnh… sẽ hiện ra sinh động và trực quan.</p>
                        <div className="image" style={{ maxWidth: 500 }}>
                            <img src={anh5} alt="" />
                        </div>
                    </li>

                </ul>

                <li><b>Công dụng của sản phẩm</b></li>
                <ul>
                    <li>Cập nhật kịp thời và chính xác thông tin địa lý, địa giới hành chính mới của Việt Nam sau quá trình sáp nhập các tỉnh.</li>
                    <li>Hỗ trợ học sinh các cấp học, đặc biệt là bậc Tiểu học và Trung học cơ sở, dễ dàng nhận biết, ghi nhớ và tra cứu tên gọi, vị trí, diện tích, dân số, trung tâm hành chính và các đặc điểm cơ bản của từng tỉnh, thành phố trực thuộc Trung ương. Mã QR có thể dẫn đến các trang web, bài viết hoặc video giáo dục, giúp học sinh nắm bắt thông tin về vị trí, đặc điểm kinh tế, văn hóa, xã hội của từng tỉnh mới sau khi sáp nhập. Thay vì chỉ học qua các bản đồ truyền thống hay sách vở, học sinh có thể xem các bản đồ tương tác, video, hoặc các bài giảng trực tuyến về từng tỉnh mới qua mã QR. Điều này giúp học sinh hình dung rõ hơn, ghi nhớ lâu dài hơn về các địa lý hành chính và thông tin liên quan.</li>
                    <li>Tạo ra công cụ học tập trực quan, sinh động, tăng hứng thú trong học tập, giúp học sinh chủ động tiếp cận kiến thức địa lý – hành chính, hạn chế nhầm lẫn giữa tên cũ và tên mới.</li>
                    <li>Đóng góp vào việc nâng cao chất lượng dạy và học môn Địa lý - Lịch sử, Giáo dục công dân, Giáo dục địa phương đồng thời sản phẩm này sẽ góp phần tuyên truyền, phổ biến chính sách sáp nhập đơn vị hành chính đến cộng đồng người dân, đến học sinh, phụ huynh và giáo viên. </li>
                </ul>
                <p>Sản phẩm này có thể được dùng trong lớp học, thư viện, bảo tàng hoặc mang đi thực tế ở các buổi trưng bày, ngoại khóa, để mọi người – nhất là thế hệ trẻ – dễ dàng tiếp cận kiến thức địa lý một cách hiện đại và trực quan hơn.</p>
                <p>Nhóm chúng em hy vọng chiếc vali thông minh 360 sẽ góp phần lan tỏa tinh thần yêu nước, niềm tự hào dân tộc và cổ vũ cho mục tiêu xây dựng một Việt Nam vươn mình mạnh mẽ trong kỷ nguyên mới.</p>
                <p>Chúng em rất mong nhận được sự góp ý, ủng hộ của quý thầy cô và mọi người để sản phẩm ngày càng hoàn thiện, phục vụ tốt hơn cho việc học tập và tìm hiểu kiến thức.
                </p>
                <p>Xin chân thành cảm ơn!</p>
            </ol>
        </div>

        &nbsp;

    </div>
}

export default HomePage;
import "./style.scss";

import HinhAnh1 from "../../assets/ha-noi-1.jpg";
import HinhAnh2 from "../../assets/ha-noi-2.jpg";

const ThongTinTinh = () => {

    return <div className="ThongTinTinh">
        <div className="container-main">
            <h2 className="province-name">THÀNH PHỐ HÀ NỘI</h2>
            <div className="image-group">
                {/* <img className="image-local" src={HinhAnh1} alt="" />
                <img className="image-local" src={HinhAnh2} alt="" /> */}
                <iframe src="https://www.google.com/maps/embed?pb=!4v1751817652327!6m8!1m7!1sCAoSLEFGMVFpcFA3QWhZcV95U1l5bldHV3V4TmVPNTJ4VDJFRjBZenJWc3Q5bXF5!2m2!1d21.03580576634671!2d105.8335129819305!3f346.58!4f0!5f0.8160813932612223" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <ul>
                <li>Hà Nội là thủ đô của nước Cộng hòa xã hội chủ nghĩa Việt Nam. Được xếp loại đô thị đặc biệt, là trung tâm chính trị, kinh tế, văn hóa, xã hội, quốc phòng, an ninh và đối ngoại của Việt Nam.<br />
                </li>
                <li>Diện tích: 3.359,82 km²</li>
                <li>Dân số: khoảng 8,7 triệu người, đông dân thứ hai và có mật độ dân số cao nhất trong 34 đơn vị hành chính cấp tỉnh của Việt Nam.</li>
                <li>Dân tộc: Hà Nội có 51/54 dân tộc sinh sống, trong đó dân tộc kinh chiếm khoảng 98,7%; còn lại là các dân tộc Mường, Tày, Thái, Nùng và các dân tộc thiểu số khác.</li>
                <li>Tổ chức hành chính: 126 đơn vị hành chính cấp xã, trong đó: 51 phường và 75 xã.</li>
                <li>Đặc điểm văn hóa: Với lịch sử hơn 1.000 năm, Hà Nội là thủ đô văn hiến, thành phố di sản, thành phố vì hòa bình. Nơi đây có hệ thống di sản văn hóa vô cùng phong phú và đặc sắc được hình thành, bồi đắp qua hàng nghìn năm lịch sử. Hà Nội hiện dẫn đầu cả nước về số lượng di sản văn hóa vật thể và phi vật thể với hàng nghìn di tích, lễ hội, làng nghề, trong đó có nhiều di sản đã được UNESCO công nhận</li>
                <ul>
                    <li>Văn hóa Tràng An: Thanh lịch, tinh tế, trọng lễ nghĩa (“Người Hà Nội ăn nói nhẹ nhàng, cư xử có chừng mực”).</li>
                    <li>Văn hóa phố cổ: 36 phố phường với kiến trúc độc đáo, mỗi phố thường gắn với một nghề truyền thống (Hàng Bạc, Hàng Đào, Hàng Mã...)</li>
                    <li>Lễ hội truyền thống: Gồm Hội Gióng (Sóc Sơn, Gia Lâm - được UNESCO công nhận là di sản văn hóa thế giới), lễ hội Chùa Hương (Mỹ Đức), lễ hội đền Quán Thánh, Cổ Loa...</li>
                    <li>Di tích lịch sử - Danh lam thắng cảnh: Văn Miếu Quốc Tử Giám, Hoàng thành Thăng Long, Lăng Chủ tịch Hồ Chí Minh, Chùa Một Cột, Hồ Hoàn Kiếm, Hồ Tây, …</li>
                    <li>Món ăn đặc sản nổi bật: phở, bún chả, bánh cuốn, chả cá Lã Vọng, cốm làng Vòng, …</li>
                </ul>
                <li>Đặc điểm kinh tế: Hà Nội với nền kinh tế đa dạng, trong đó thương mại, dịch vụ, du lịch đóng vai trò chủ đạo. Hiện nay, Hà Nội cũng đang chuyển dịch cơ cấu kinh tế theo hướng hiện đại, chú trọng phát triển các ngành kinh tế đô thị như du lịch, công nghệ thông tin.</li>
            </ul>
        </div>


    </div>
}

export default ThongTinTinh;
import React, { useState } from 'react';
import './style.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm ơn bạn, ${formData.name}! Phản hồi của bạn đã được ghi nhận.`);
    setFormData({ name: '', message: '' });
  };

  return (
    <footer className="footer">
      {/* <div className="footer__container">
        <div className="footer__contact">
          <h3>Thông tin liên hệ</h3>
          <p>📍 Địa chỉ: 123 Đường DEF, Phường Buôn Ma Thuột, tỉnh Đắk Lắk</p>
          <p>📞 Điện thoại: 0123 456 789</p>
          <p>✉️ Email: diachi@gmail.com</p>
        </div>

        <div className="footer__feedback">
          <h3>Gửi ý kiến phản hồi</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Tên của bạn"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Nội dung phản hồi"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Gửi phản hồi</button>
          </form>
        </div>
      </div> */}

      <div className="footer__bottom">
        © {new Date().getFullYear()} Vali 360. Mọi quyền được bảo lưu.
      </div>
    </footer>
  );
};

export default Footer;

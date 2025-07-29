import "./style.scss"
const contactData = {
  teacher: 'Cô Trần Thị Như Trâm',
  members: ['Đặng Hoàng Anh Quân', 'Hồ Phạm Hà Như'],
  school: 'Trường THCS Hàm Nghi',
  address: 'Phường Buôn Ma Thuột, Tỉnh Đắk Lắk',
  phone: '0905 696 139',
};
const KhaoSat = () => {
  return <div className="KhaoSat">
    <div className="form-container">
      <div className="contact-info">
        <h2 className="contact-info__title">Thông Tin Liên Hệ</h2>

        <div className="contact-info__columns">
          <div className="contact-info__column">
            <p className="label">Giáo viên hướng dẫn:</p>
            <p>{contactData.teacher}</p>
          </div>

          <div className="contact-info__column">
            <p className="label">Thành viên:</p>
            <ul className="contact-info__list">
              {contactData.members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="contact-info__section">
          <p><span className="label">Trường:</span> {contactData.school}</p>
          <p><span className="label">Địa chỉ:</span> {contactData.address}</p>
          <p><span className="label">Số điện thoại:</span> {contactData.phone}</p>
        </div>
      </div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcEr2mBF8WDL8LumUISFNeRKzcCNaNGDNi8kWKrYZZtg_nDA/viewform?embedded=true" width="100%" height="850" frameBorder="0">Đang tải…</iframe>
    </div>
  </div>
}

export default KhaoSat;
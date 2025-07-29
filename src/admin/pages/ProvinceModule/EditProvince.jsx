import './style.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const EditProvince = () => {
  const { id } = useParams(); // lấy id từ URL
  const [province, setProvince] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/provinces/${id}`);
        setProvince(res.data);
      } catch (err) {
        console.error('Lỗi lấy dữ liệu tỉnh:', err);
      }
    };
    fetchData();
  }, [id]);

  if (!province) return <p>Đang tải dữ liệu...</p>;

  const handleChange = (field, value) => {
    setProvince(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    axios.put(`${API_URL}/provinces/${id}`, province)
      .then(() => alert('Cập nhật thành công'))
      .catch(err => console.error('Lỗi khi lưu:', err));
  };

  return (
    <div className="province-edit">
      <h2>Sửa thông tin tỉnh: {province.name}</h2>

      <label>Tên tỉnh</label>
      <input
        type="text"
        value={province.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />

      <label>Iframe 360°</label>
      <textarea
        rows={4}
        value={province.image360}
        onChange={(e) => handleChange('image360', e.target.value)}
      />

      <label>Giới thiệu chung</label>
      <textarea
        rows={4}
        value={province.introduce.content}
        onChange={(e) =>
          setProvince(prev => ({
            ...prev,
            introduce: {
              ...prev.introduce,
              content: e.target.value
            }
          }))
        }
      />

      <label>Dân tộc</label>
      <textarea
        rows={3}
        value={province.ethnic}
        onChange={(e) => handleChange('ethnic', e.target.value)}
      />

      <label>Kinh tế</label>
      <textarea
        rows={4}
        value={province.economy}
        onChange={(e) => handleChange('economy', e.target.value)}
      />

      <button onClick={handleSave}>💾 Lưu thay đổi</button>
    </div>
  );
};

export default EditProvince;

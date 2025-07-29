import React, { useState, useEffect, useRef } from 'react';
import { Button, Message, useToaster } from 'rsuite';
import './style.scss';

const API_URL = import.meta.env.VITE_API_URL;

const ImageModule = () => {
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const toaster = useToaster();
  const fileInputRef = useRef(null); // ✅ ref để reset input

  // Fetch ảnh đã upload
  const fetchImages = async () => {
    try {
      const res = await fetch(`${API_URL}/images`);
      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.error('Lỗi khi tải ảnh:', err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Chọn ảnh
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setPreviewUrls(files.map((file) => URL.createObjectURL(file)));
  };

  // Xoá 1 ảnh preview
  const removePreview = (index) => {
    const newFiles = [...selectedFiles];
    const newUrls = [...previewUrls];
    newFiles.splice(index, 1);
    newUrls.splice(index, 1);
    setSelectedFiles(newFiles);
    setPreviewUrls(newUrls);
  };

  // Upload ảnh
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFiles.length === 0) return;

    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append('images', file));

    try {
      const res = await fetch(`${API_URL}/images`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        toaster.push(<Message type="error">{data.error || 'Upload thất bại'}</Message>);
        return;
      }
      setSelectedFiles([]);
      setPreviewUrls([]);
      fileInputRef.current.value = null; // ✅ Reset input sau khi upload
      setTimeout(() => {
        fetchImages();
      }, 2000);
    } catch (err) {
      console.error("Lỗi upload", err);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  // Xoá ảnh đã upload
  const handleDelete = async (url) => {
    const filename = url.split('/').pop();

    if (!window.confirm('Bạn có chắc muốn xoá ảnh này?')) return;

    try {
      const res = await fetch(`${API_URL}/images/${filename}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok) {
        toaster.push(<Message type="error">{data.error || 'Xoá thất bại'}</Message>);
        return;
      }

      toaster.push(<Message type="success">Đã xoá ảnh!</Message>);
      fetchImages();
    } catch (err) {
      console.error(err);
      toaster.push(<Message type="error">Lỗi khi xoá ảnh</Message>);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className="image-module">
      <h2>Thêm ảnh mới</h2>

      <form className="image-form" onSubmit={handleSubmit}>
        <label>
          Chọn ảnh *
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            ref={fileInputRef} // ✅ Gán ref
          />
        </label>

        {previewUrls.length > 0 && (
          <div className="image-preview">
            {previewUrls.map((url, idx) => (
              <div key={idx} className="preview-item">
                <img src={url} alt={`preview-${idx}`} />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removePreview(idx)}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}

        <Button appearance="primary" type="submit" disabled={selectedFiles.length === 0}>
          Upload
        </Button>
      </form>

      <div className="image-list">
        <h3>Ảnh đã upload</h3>
        {images.length === 0 ? (
          <p>Chưa có ảnh nào.</p>
        ) : (
          <div className="image-grid">
            {images.map((url, idx) => (
              <div className="image-item" key={idx}>
                <img src={`${API_URL}${url}`} alt={`img-${idx}`} />
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(url)}
                  title="Xoá ảnh"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModule;

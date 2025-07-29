import React, { useState } from 'react';
import './_album.scss';
import { Button, Card, Modal } from 'rsuite';

const AlbumModule = () => {
  const [albumName, setAlbumName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!albumName || images.length === 0) {
      alert('Vui lòng nhập tên album và chọn ít nhất 1 ảnh.');
      return;
    }

    const newAlbum = {
      id: Date.now(),
      name: albumName,
      description,
      images,
    };

    setAlbums([newAlbum, ...albums]);
    setAlbumName('');
    setDescription('');
    setImages([]);
  };

  return (
    <div className="album-module">
      <Modal open={showModal} backdrop={true} onClose={() => setShowModal(false)}>
        <div className="album-container">
          <h2>Tạo Album Ảnh</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Tên album *
              <input
                type="text"
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
                placeholder="Nhập tên album"
                required
              />
            </label>

            <label>
              Mô tả
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Thêm mô tả nếu cần"
                rows={3}
              />
            </label>

            <label>
              Chọn ảnh *
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </label>

            <div className="preview">
              {images.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                />
              ))}
            </div>

            <button type="submit">Tạo album</button>
          </form>
        </div>
      </Modal>

      <div className="album-list">
        <Card>
          <div className="list-header">
            <h3>Danh sách album</h3>
            <Button appearance='primary' color='green' onClick={() => setShowModal(true)}>Thêm</Button>
          </div>
        </Card>
        <br />
        <Card style={{ padding: "1rem" }}>
          {albums.length === 0 ? (
            <p>Chưa có album nào.</p>
          ) : (
            <div className="album-grid">
              {albums.map((album) => (
                <div className="album-item" key={album.id}>
                  <img
                    src={URL.createObjectURL(album.images[0])}
                    alt="album cover"
                  />
                  <div className="album-info">
                    <h4>{album.name}</h4>
                    <p>{album.description}</p>
                    <span>{album.images.length} ảnh</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AlbumModule;

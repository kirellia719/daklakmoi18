import React, { useState, useEffect } from 'react';
import { Button, Message, useToaster } from 'rsuite';
import './_video.scss';

const API_URL = import.meta.env.VITE_API_URL;

const VideoModule = () => {
  const [inputLink, setInputLink] = useState('');
  const [embedLink, setEmbedLink] = useState('');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const toaster = useToaster();

  const convertToEmbedLink = (link) => {
    const trimmed = link.trim();

    const short = /https:\/\/youtu\.be\/([\w-]{11})/;
    const watch = /https:\/\/www\.youtube\.com\/watch\?v=([\w-]{11})/;
    const embed = /https:\/\/www\.youtube\.com\/embed\/([\w-]{11})/;

    let match = trimmed.match(short);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;

    match = trimmed.match(watch);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;

    match = trimmed.match(embed);
    if (match) return trimmed;

    return null;
  };

  const fetchVideos = async () => {
    try {
      const res = await fetch(`${API_URL}/videos`);
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.error('Lỗi khi tải danh sách video:', err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputLink(value);

    const converted = convertToEmbedLink(value);
    if (converted) {
      setEmbedLink(converted);
      setError('');
    } else {
      setEmbedLink('');
      setError('Link không hợp lệ. Dùng link từ "youtu.be" hoặc "youtube.com/watch?v="');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!embedLink) {
      setError('Link chưa hợp lệ, không thể thêm.');
      return;
    }

    try {
      const res = await fetch(`${API_URL}/videos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embedLink }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || 'Lỗi không xác định từ server');
        return;
      }

      setVideos((prev) => [data.video, ...prev]);
      setInputLink('');
      setEmbedLink('');
      setError('');
      toaster.push(<Message type="success">Đã thêm video!</Message>);
    } catch (err) {
      console.error(err);
      setError('Lỗi kết nối đến server.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn có chắc muốn xóa video này?')) return;

    try {
      const res = await fetch(`${API_URL}/videos/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (!res.ok) {
        toaster.push(<Message type="error">{data?.error || 'Xoá thất bại'}</Message>);
        return;
      }

      setVideos((prev) => prev.filter((video) => video._id !== id));
      toaster.push(<Message type="success">Đã xóa video</Message>);
    } catch (err) {
      console.error(err);
      toaster.push(<Message type="error">Lỗi khi xóa video</Message>);
    }
  };

  return (
    <div className="video-module">
      <h2>Thêm Video YouTube</h2>

      <form className="video-form" onSubmit={handleSubmit}>
        <label>
          Link video YouTube *
          <input
            type="text"
            value={inputLink}
            onChange={handleInputChange}
            placeholder="https://youtu.be/abcDEF12345"
            required
          />
        </label>

        {error && <div className="error">{error}</div>}

        {embedLink && (
          <div className="video-preview">
            <iframe
              width="100%"
              height="300"
              src={embedLink}
              title="YouTube preview"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}

        <Button appearance="primary" type="submit" disabled={!embedLink}>
          Thêm Video
        </Button>
      </form>

      <div className="video-list">
        <h3>Danh sách video đã thêm</h3>
        {videos.length === 0 ? (
          <p>Chưa có video nào.</p>
        ) : (
          <div className="video-grid">
            {videos.map((video) => (
              <div className="video-item" key={video._id}>
                <iframe
                  src={video.embedLink}
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allowFullScreen
                  title={`video-${video._id}`}
                />
                <Button
                  size="xs"
                  color="red"
                  appearance="ghost"
                  onClick={() => handleDelete(video._id)}
                  className="delete-btn"
                >
                  Xoá
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModule;

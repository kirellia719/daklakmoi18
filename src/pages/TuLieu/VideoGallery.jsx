import React, { useEffect, useState } from 'react';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import './VideoGallery.scss';

const API_URL = import.meta.env.VITE_API_URL;

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = async () => {
    try {
      const res = await fetch(`${API_URL}/videos`);
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.error('Lỗi khi lấy danh sách video:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="video-gallery">
      <h1>Tư Liệu</h1>

      {loading ? (
        <p>Đang tải...</p>
      ) : videos.length === 0 ? (
        <p>Chưa có video nào để hiển thị.</p>
      ) : (
        <div className="video-grid">
          {videos.map((video) => (
            <YoutubeEmbed key={video._id} src={video.embedLink} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;

import React from 'react';

const VideoModule = () => {
  return (
    <div>
      <h2>Tải Video Lên</h2>
      <p>Chức năng: Nhập tên video, chọn file video từ máy, và upload.</p>

      {/* Giao diện form sẽ thêm sau */}
      <div className="video-upload-box">
        <label htmlFor="videoTitle">Tên video:</label>
        <input type="text" id="videoTitle" placeholder="Nhập tiêu đề video" />

        <label htmlFor="videoFile">Chọn video:</label>
        <input type="file" id="videoFile" accept="video/*" />

        <button>Tải lên</button>
      </div>
    </div>
  );
};

export default VideoModule;

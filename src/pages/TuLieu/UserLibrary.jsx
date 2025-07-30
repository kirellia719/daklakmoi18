import React, { useEffect, useState } from "react";
import "./_user-library.scss";

const API_URL = import.meta.env.VITE_API_URL;

const UserLibrary = () => {
   const [videos, setVideos] = useState([]);
   const [images, setImages] = useState([]);
   const [lightboxImage, setLightboxImage] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const videoRes = await fetch(`${API_URL}/videos`);
            const videoData = await videoRes.json();
            setVideos(videoData);

            const imgRes = await fetch(`${API_URL}/images`);
            const imgData = await imgRes.json();
            setImages(imgData);
         } catch (err) {
            console.error("Lỗi khi tải dữ liệu:", err);
         }
      };

      fetchData();
   }, []);

   const closeLightbox = () => setLightboxImage(null);

   return (
      <div className="user-library">
         <h2>Tư liệu</h2>

         <section className="library-section">
            <h3>📽 Video</h3>
            {videos.length === 0 ? (
               <p>Không có video nào.</p>
            ) : (
               <div className="video-grid">
                  {videos.map((video, idx) => (
                     <div className="video-item" key={idx}>
                        <iframe src={video.embedLink} title={`video-${idx}`} frameBorder="0" allowFullScreen />
                     </div>
                  ))}
               </div>
            )}
         </section>

         <section className="library-section">
            <h3>🖼 Hình ảnh</h3>
            {images.length === 0 ? (
               <p>Không có ảnh nào.</p>
            ) : (
               <div className="image-grid">
                  {images.map((url, idx) => (
                     <div className="image-item" key={idx}>
                        <img
                           src={`${API_URL}${url}`}
                           alt={`img-${idx}`}
                           onClick={() => setLightboxImage(`${API_URL}${url}`)}
                           style={{ cursor: "zoom-in" }}
                        />
                     </div>
                  ))}
               </div>
            )}
         </section>
         {lightboxImage && (
            <div className="lightbox-overlay" onClick={closeLightbox}>
               <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                  {/* <button className="lightbox-close" onClick={closeLightbox}>❌</button> */}
                  <img src={lightboxImage} alt="Zoom" />
               </div>
            </div>
         )}
      </div>
   );
};

export default UserLibrary;

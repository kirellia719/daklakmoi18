import "./style.scss"
import { useEffect, useRef, useState } from "react";
import music from "./music.mp3"; // Đảm bảo file đúng đường dẫn
import { RiVolumeMuteLine, RiVolumeUpLine } from "@remixicon/react";

function BackgroundMusic() {
    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        // Phát tự động sau tương tác đầu tiên (nếu chưa bị chặn)
        const tryPlay = () => {
            audio.play().catch((err) => {
                console.log("Trình duyệt chặn tự động phát nhạc:", err.message);
            });
        };

        // Gọi phát nhạc sau lần tương tác đầu tiên
        // window.addEventListener("click", tryPlay, { once: true });

        return () => {
            window.removeEventListener("click", tryPlay);
        };
    }, []);

    const toggleMute = () => {
        const audio = audioRef.current;
        audio.muted = !audio.muted;
        setIsMuted(audio.muted);
    };

    return (
        <>
            <audio ref={audioRef} src={music} autoPlay />
            <div onClick={toggleMute} className="volumn-btn">
                {isMuted ? <RiVolumeMuteLine /> : <RiVolumeUpLine />}
            </div>
        </>
    );
}

export default BackgroundMusic;

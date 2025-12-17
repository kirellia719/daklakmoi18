import "./style.scss";

import React, { useState, useRef, useEffect } from "react";
import { Button, Whisper, Tooltip, IconButton } from "rsuite";
import Play from '@rsuite/icons/PauseRound';
import SpeakerIcon from '@rsuite/icons/Speaker';
import Pause from '@rsuite/icons/ArrowRight';

const API = import.meta.env.VITE_API_URL;

const TTSButton = ({ contentRef }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);

  const getTextFromPage = () => {
    if (!contentRef.current) return "";
    return contentRef.current.innerText;
  };

  const fetchTTS = async (text) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/tts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      audioRef.current = new Audio(url);
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));

      await audioRef.current.play();
      setIsPlaying(true);
      setIsLoaded(true);
    } catch (err) {
      console.error("TTS Error:", err);
      alert("Không thể phát giọng nói.");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    if (!isLoaded) {
      const text = getTextFromPage();
      await fetchTTS(text);
    } else {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const getTooltipText = () => {
    if (loading) return "Đang tải...";
    if (!isLoaded) return "Đọc nội dung";
    return isPlaying ? "Tạm dừng" : "Tiếp tục";
  };

  const getButton = () => {
    if (loading) return <IconButton appearance="default" size="lg" circle loading icon={<SpeakerIcon />} />;
    if (!isLoaded) return <IconButton appearance="primary" size="lg" circle icon={<SpeakerIcon />} />;
    return isPlaying ? <IconButton appearance="primary" size="lg" color="green" circle icon={<Play />} /> : <IconButton circle size="lg" color="red" appearance="primary" icon={<Pause />} />;
  }

  useEffect(() => {

    return () => {
      if (audioRef && audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [])

  return <div className="btn-container" onClick={handleClick}>
    <Whisper placement="top" trigger="hover" speaker={<Tooltip>{getTooltipText()}</Tooltip>}>
      {getButton()}
    </Whisper>
  </div>

};

export default TTSButton;

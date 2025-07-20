import React, { useRef } from "react";

import TTSButton from "../../components/TTSButton"

const TestPage = () => {
  const contentRef = useRef();
  return (
    <div className="HomePage">
      <div className="home-container" ref={contentRef}>
        <p>Xin chào tất cả các bạn</p>
      </div>

      {/* 👇 Thêm nút TTS dưới cùng */}
      <TTSButton contentRef={contentRef} />
    </div>
  );
};

export default TestPage;

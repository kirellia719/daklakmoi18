import "./style.scss";

const YoutubeEmbed = ({ src }) => {
  return (
    <div className="youtube-container">
      <iframe
        className="youtube-iframe"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;

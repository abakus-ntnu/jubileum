import Centered from "./Centered";

const Podcast = () => {
  return (
    <Centered>
      <iframe
        className="spotify-embed"
        src="https://open.spotify.com/embed/show/2ZeUiQ4pclClRbDfBvwPyC?utm_source=generator"
        color=""
        width="600"
        height="232"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </Centered>
  );
};

export default Podcast;

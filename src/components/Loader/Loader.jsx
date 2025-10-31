import { useNavigate } from "react-router-dom";
import MobileIntroVideo from "../../assets/videos/intro-video-mobile.mp4";
import WebIntroVideo from "../../assets/videos/intro-video-web.mp4";
import "./loader.css";

const Loader = () => {
  const navigate = useNavigate();

  function loadTheMainWebsite() {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
    console.log("function called");
  }

  return (
    <>
      <video
        src={WebIntroVideo}
        className="video-web-view"
        autoPlay
        muted
        playsInline
        webkit-playsinline="true"
        onEnded={loadTheMainWebsite}
      ></video>

      <video
        src={MobileIntroVideo}
        className="video-mobile-view"
        autoPlay
        muted
        playsInline
        webkit-playsinline="true"
        onEnded={loadTheMainWebsite}
      ></video>
    </>
  );
};

export default Loader;

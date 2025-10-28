import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Home/BannerAnimation";
import Intro from "../components/Home/Intro";
import ValuesProgressProjects from "../components/Home/ValuesProgressProjects";
import VisionMission from "../components/Home/VisionMission";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Intro />
      <VisionMission />
      <ValuesProgressProjects />
      <Footer />
    </>
  );
};

export default Home;

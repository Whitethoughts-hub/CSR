import LeadershipPage from "../components/Leadership";
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const Leadership = () => {
  return (
    <>
      <Header />{" "}
      <section className="flex flex-col items-center justify-center ">
        <LeadershipPage />
      </section>
      <Footer />
    </>
  );
};

export default Leadership;

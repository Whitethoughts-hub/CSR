import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import VideoLoader from "./components/Loader/Loader";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTopButton";
import ScrollToTopPage from "./components/ScrollToTopPage";
function App() {
  return (
    <>
      <ScrollToTop />
      <BrowserRouter>
        <ScrollToTopPage />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<VideoLoader />}></Route>
          <Route path="/leadership" element={<Leadership />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import VideoLoader from "./components/Loader/Loader";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<VideoLoader />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

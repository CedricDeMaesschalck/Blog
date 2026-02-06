import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutMePage from "./AboutMePage";
import Blog from "./Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;

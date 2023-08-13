import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavCard from "./components/NavCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavCard>
        <NavBar />
      </NavCard>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

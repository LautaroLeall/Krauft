import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/layout/Footer";
import BtnWhatsapp from "./components/layout/BtnWhatsapp";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
      </Routes>

      <BtnWhatsapp />

      <Footer />
    </BrowserRouter>
  );
}

export default App;

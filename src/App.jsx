import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import BtnWhatsapp from "./components/layout/BtnWhatsapp";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <BtnWhatsapp />

      <Footer />
    </BrowserRouter>
  );
}

export default App;

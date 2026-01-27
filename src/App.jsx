import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Chatbot from "./components/chatbot/Chatbot";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
      </Routes>

      <Chatbot />

      <Footer />
    </BrowserRouter>
  );
}

export default App;

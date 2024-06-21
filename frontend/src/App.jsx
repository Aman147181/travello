import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Notfound from "./components/Notfound";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home/Home";
import Hero from "./Pages/Home/Hero";
import HeroCards from "./Pages/Home/HeroCards";
import LandingPage from "./Pages/Home/LandingPage";
import AnimatedCards from "./Pages/Home/AnimatedCards";
import About from "./Pages/About/About";
import Services from "./Pages/Home/Services"
import Blogs from "./Pages/About/Blogs";
import Hire from "./Pages/Hire/Hire";
import ContactPage from "./Pages/About/ContactPage";
import Team from "./Pages/About/Team";
import Projects from "./Pages/About/Projects";
import ServiceDetail from "./Pages/Home/ServiceDetail";
import ScrollToTop from "../ScrollToTop"
import Chatbot from "./Components/Chatbot"
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogDetail from "./Pages/About/BlogDetail";

import ChatbotToggle from "./Components/ChatbotToggle"
import ApproachFormPopup from "./Pages/About/ApproachFormPopup";
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
       <ScrollToTop /> {/* This ensures scroll resets on every route */}
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/hire" element={<Hire />} />
          <Route path="/animatedcards" element={<AnimatedCards />} />
        <Route path="/contactpage" element={<ContactPage/>}/>
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />

        {/* Optional Home subsections */}
        <Route path="/hero" element={<Hero />} />
        <Route path="/herocards" element={<HeroCards />} />
        <Route path="/landingpage" element={<LandingPage />} />
     <Route path="/service/:id" element={<ServiceDetail />} />
   <Route path="/blog/:id" element={<BlogDetail />} />
   <Route path="/approachformpopup" element={<ApproachFormPopup />} />
        {/* 404 fallback */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Footer />
   <ChatbotToggle />
    </Router>
  );
}

export default App;

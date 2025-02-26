import About from "./components/About/About.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";
import Campus from "./components/Campus/Campus.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import { useState } from "react";

export default function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="Our Programs" subtitle="What We Offers" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title title="Gallery" subtitle="Campus Photos" />
        <Campus />
        <Title title="Testimonials" subtitle="What Student Says" />
        <Testimonials />
        <Title title="Contact Us" subtitle="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      {/* <VideoPlayer playState={playState} setPlayState={setPlayState}/> */}
    </div>
  );
}

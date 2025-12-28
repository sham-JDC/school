import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUsSection from "./About";
import ProgramsServices from "./temp";
import WhyJoinUs from "./Join";
import Studentlife from "./Life";
import ContactUs from "./ontact";
import Ribbon from "./Ribbon";
import ScrollToTop from "./ScrollToTop";
import GlossaryPage from "./Glossary";
import Awards from "./Awards";
import Events from "./Events";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Ribbon />
      <Routes>
        {/* <ScrollToTop /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prog" element={<ProgramsServices />} />
        <Route path="/aboutus" element={<AboutUsSection />} />
        <Route path="/life" element={<Studentlife />} />
        <Route path="/join" element={<WhyJoinUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/events" element={<Awards />} />
        <Route path="/awards" element={<Events />} />

        {/* overview */}
      </Routes>
    </>
  );
}

export default App;

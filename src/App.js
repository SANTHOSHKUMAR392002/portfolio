import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TechStack from "./components/tech/tech.js"
import Projects from "./components/projects/projects.js"
import Footer from "./components/footer/footer.js";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TechStack/>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default App;

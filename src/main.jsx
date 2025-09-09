import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import './style/index.css'
import "./style/global/global.css";
import "./style/global/root.css";
import "./style/global/fonts.css";

// global css

// componentes
import Nav from "./components/nav/App.jsx";
import Header from "./components/header/App.jsx";
import About from "./components/about/App.jsx";
import Skills from "./components/skills/App.jsx";
import Expertise from "./components/expertise/App.jsx";
import Project from "./components/project/App.jsx";
import Contact from "./components/contact/App.jsx";
import Footer from "./components/footer/App.jsx";

const view = (
  <StrictMode>
    <Nav />
    <Header />
    <About />
    <Skills />
    {/* <Expertise /> */}
    {/* <Project /> */}
    <Contact />
    <Footer />
  </StrictMode>
);

createRoot(document.getElementById("root")).render(view);

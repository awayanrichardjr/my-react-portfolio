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
import Expertise from "./components/expertise/App.jsx";
import Project from "./components/project/App.jsx";
import Contact from "./components/contact/App.jsx";

const view = (
  <StrictMode>
    <Nav />
    <Header />
    <About />
    <Expertise />
    <Project />
    <Contact />
  </StrictMode>
);

createRoot(document.getElementById("root")).render(view);

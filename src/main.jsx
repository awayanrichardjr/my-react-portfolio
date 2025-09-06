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

const view = (
  <StrictMode>
    <Nav />
    <Header />
    <About />
  </StrictMode>
);

createRoot(document.getElementById("root")).render(view);

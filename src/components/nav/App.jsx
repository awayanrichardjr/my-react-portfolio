import "./App.css";

function App() {
  return (
    <>
      <nav className="navigation">
        <ul className="logo">
          <li>
            <a href="#home">
              <span className="material-symbols-rounded">home_app_logo</span>
              <h3>HARDRIC</h3>
            </a>
          </li>
        </ul>
        <ul className="links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#expertise">Expertise</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;

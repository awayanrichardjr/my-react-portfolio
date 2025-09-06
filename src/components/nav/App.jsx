import "./App.css";
import github from "./github.svg";

function MenuContent() {
  const menuContent = document.getElementById("menu-content");
  const spanIcon = document.getElementById("span-icon").innerText;

  if (spanIcon === "menu") {
    document.getElementById("span-icon").innerText = "close";

    menuContent.style.width = "150px";
    menuContent.style.opacity = "1";
  } else {
    document.getElementById("span-icon").innerText = "menu";
    menuContent.style.opacity = "0";
    menuContent.style.width = "0";
  }
}

function App() {
  return (
    <>
      <nav className="navigation">
        <ul className="logo">
          <li>
            <a href="#">
              <span className="material-symbols-rounded">home_app_logo</span>
              <p className="audiowide-regular">HARDRIC</p>
            </a>
          </li>
        </ul>
        {/* links */}
        <ul className="links">
          <li>
            <a href="#about">
              <p>About me</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Expertise</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Projects</p>
            </a>
          </li>
          <li className="github-link">
            <a
              href="https://github.com/awayanrichardjr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="#">
              <p>Contact</p>
              <span className="material-symbols-rounded">call</span>
            </a>
          </li>
        </ul>
        {/* menu links */}
        <ul className="menu-links">
          <li>
            <a href="#" onClick={MenuContent}>
              <span className="material-symbols-rounded" id="span-icon">
                menu
              </span>
            </a>
          </li>
          <div className="menu-content" id="menu-content">
            <li>
              <a href="#about">
                <p>About me</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Expertise</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Projects</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Contact</p>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default App;

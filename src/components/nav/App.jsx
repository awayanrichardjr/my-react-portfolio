import "./App.css";

function MenuContent() {
  const menuContent = document.getElementById("menu-content");
  const spanIcon = document.getElementById("span-icon").innerText;

  if (spanIcon === "menu") {
    menuContent.style.display = "block";
    document.getElementById("span-icon").innerText = "close";
  } else {
    menuContent.style.display = "none";
    document.getElementById("span-icon").innerText = "menu";
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
            <a href="#">
              <p>Home</p>
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
              <a href="#">
                <p>Home</p>
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

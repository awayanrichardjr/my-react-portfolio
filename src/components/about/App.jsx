import "./App.css";
import profile from "./img/me.jpg";

function App() {
  return (
    <>
      <section className="about" id="about">
        {/* <h1>About me</h1> */}
        <div className="profile-name">
          <img src={profile} alt="profile" className="profile" />
          <div className="name-description">
            <h1>Richard Dumael Awayan Jr.</h1>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="skills">
          <ul className="skills-list">
            <li>
              <img src={profile} alt="asd" />
            </li>
            <li>
              <img src={profile} alt="asd" />
            </li>
            <li>
              <img src={profile} alt="asd" />
            </li>
            <li>
              <img src={profile} alt="asd" />
            </li>
            <li>
              <img src={profile} alt="asd" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;

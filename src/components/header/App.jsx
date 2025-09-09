import "./App.css";
import profilePic from "../assets/img/me/me.jpg";

function App() {
  return (
    <>
      <section className="header" id="home">
        {/**
         * container
         *
         * shows the profile picture image.
         */}
        <div className="container center-img">
          <img className="profile-pic" src={profilePic} alt="profile picture" />
        </div>

        {/* container */}
        <div className="container">
          {/**
           *
           *
           *
           * shows the introduction of self and descriptions.
           */}
          <h5 className="introduction">Hi, I am Richard.</h5>
          <h5 className="profession">Frontend Developer</h5>
          <br />
          <p className="description">
            <q>
              I am a Frontend Developer passionate about creating clean,
              responsive, and user-friendly websites...
            </q>
          </p>
          <br />

          {/**
           *
           *
           * shows about and download button.
           */}
          <div className="buttons">
            <button className="about-me-btn">
              <a href="#about">
                <p>About me</p>
              </a>
            </button>
            <button className="download-btn">
              <a
                href="https://drive.google.com/uc?export=download&id=1Eq5gi_scvnn4po6PWAlnaXPLu-1mq17Q"
                download
              >
                <span className="material-symbols-rounded">download</span>
                <p>Download CV</p>
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

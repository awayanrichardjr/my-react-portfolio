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
          <img className="profile-pic" src={profilePic} alt="" />
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
          <p className="description">
            I am a passionate and detail-oriented Front-End Developer who builds
            and optimizes responsive web applications for exceptional user
            experiences. Proficient in modern web technologies and frameworks
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
              <a href="#">
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

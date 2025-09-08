import "./App.css";
import profilePic from "../assets/img/me/me.jpg";

function App() {
  return (
    <>
      <section className="header" id="home">
        <div className="container">
          <h5 className="introduction">
            Hi there! <br /> I am Richard
          </h5>
          <h5 className="profession">Frontend Developer</h5>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            tenetur? Qui expedita modi similique odio iusto aut magnam
            explicabo, nobis voluptate, quos illo molestias? Tempore hic
            incidunt fuga vero. Dignissimos.
          </p>
          <br />
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
        <div className="container center-img">
          <img className="profile-pic" src={profilePic} alt="" />
        </div>
      </section>
    </>
  );
}

export default App;

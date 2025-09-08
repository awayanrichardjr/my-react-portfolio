import "./App.css";
import profilePic from "../assets/img/me/me.jpg";

function App() {
  return (
    <>
      <section className="header" id="home">
        <div className="container">
          <h1 className="introduction">
            Hi there! <br /> I am Richard
          </h1>
          {/* <br /> */}
          <h1 className="profession">Frontend Developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            tenetur? Qui expedita modi similique odio iusto aut magnam
            explicabo, nobis voluptate, quos illo molestias? Tempore hic
            incidunt fuga vero. Dignissimos.
          </p>
          <br />
          <div className="buttons">
            <button className="about-me-btn">About me</button>
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

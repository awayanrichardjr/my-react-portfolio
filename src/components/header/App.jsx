import "./App.css";

function App() {
  return (
    <>
      <section className="header" id="home">
        <h1>Hi there! I am Richard</h1>
        <p>Frontend Developer</p>

        {/* buttons */}
        <div className="buttons">
          <button className="about-me">About me</button>
          <button className="download-cv">
            <a href="#">
              <span className="material-symbols-rounded">download</span>
              <p>Download CV</p>
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;

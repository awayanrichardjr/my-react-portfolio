import "./App.css";
// import bg from "./bg2.jpg";

function App() {
  return (
    <>
      <header className="header" id="home">
        {/* <img className="bg" src={bg} alt="bg" /> */}
        <h1 className="hardric audiowide-regular">
          <label htmlFor="">H</label>
          <label htmlFor="">A</label>
          <label htmlFor="">R</label>
          <label htmlFor="">D</label>
          <label htmlFor="">R</label>
          <label htmlFor="">I</label>
          <label htmlFor="">C</label>
        </h1>
        <div className="btns">
          <a href="#about" className="about-me">
            About me
          </a>
          <a href="#" className="download-cv bg-btn">
            <span className="material-symbols-rounded">download</span>
            <p>Donwload CV</p>
          </a>
        </div>
        <div className="description">
          <h2>Hi there! I am Richard</h2>
          <p>Frontend Developer</p>
        </div>
      </header>
    </>
  );
}

export default App;

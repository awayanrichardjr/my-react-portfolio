import "./App.css";
// import bg from "./bg.jpg";

function App() {
  return (
    <>
      <header className="header">
        {/* <img className="bg" src={bg} alt="bg" /> */}
        <h1 className="heading1 audiowide-regular">
          <label htmlFor="">H</label>
          <label htmlFor="">A</label>
          <label htmlFor="">R</label>
          <label htmlFor="">D</label>
          <label htmlFor="">R</label>
          <label htmlFor="">I</label>
          <label htmlFor="">C</label>
        </h1>
        <div className="btns">
          <button className="about-me">About me</button>
          <button className="download-cv bg-btn">
            <p>Donwload CV</p>
            <span className="material-symbols-rounded">download</span>
          </button>
        </div>
        <div className="description">
          <h2>I am Richard Dumael Awayan Jr.</h2>
          <p>Frontend Developer</p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            perspiciatis.
          </p>
        </div>
      </header>
    </>
  );
}

export default App;

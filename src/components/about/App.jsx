import "./App.css";
import me from "../assets/img/me/me.jpg";
// import me1 from "../assets/img/me/me1.jpeg";

function App() {
  return (
    <>
      {/* <Importsss /> */}
      <section className="about" id="about">
        {/* <h1>About me</h1> */}
        <div className="profile-name">
          <img
            title="Richard Dumael Awayan Jr."
            src={me}
            alt="me"
            className="profile"
          />
          <div className="name-description">
            <h1>Richard Dumael Awayan Jr.</h1>
            <p>Frontend Developer</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

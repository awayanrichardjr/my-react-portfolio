import "./App.css";
import profilePic from "../assets/img/me/me1.jpeg";

function App() {
  return (
    <>
      <section className="about" id="about">
        <h1>About me</h1>
        <div className="container">
          <img src={profilePic} alt="profile-pic" />
          <div className="profile-name">
            <h1>Richard Dumael Awayan Jr.</h1>
            <p>Frontend Developer</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit, laborum maxime dolores repellat quasi ipsa quae quos
              odio inventore culpa nam fugit quaerat ducimus nihil officiis
              obcaecati! Dicta, molestias sapiente?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              incidunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              reprehenderit ipsum, dicta culpa amet error reiciendis pariatur
              saepe excepturi, nulla vitae, vel tempora quis. Minus repellat
              excepturi ipsam esse id.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

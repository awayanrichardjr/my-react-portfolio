import "./App.css";
import profilePic from "../assets/img/me/me1.jpeg";

function App() {
  return (
    <>
      <section className="about" id="about">
        <h5>About me</h5>
        {/**
         *
         *
         *
         * container
         */}
        <div className="container">
          {/**
           *
           *
           *
           * profile picture
           */}
          <img src={profilePic} alt="profile-pic" />

          {/**
           *
           *
           *
           * profile name and descriptions
           * */}
          <div className="profile-name">
            <h5 className="full-name">Richard D. Awayan Jr.</h5>
            <p className="profession">Frontend Developer</p>
            <br />
            <p className="description">
              <q>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit, laborum maxime dolores repellat quasi ipsa quae quos
                odio inventore culpa nam fugit quaerat ducimus nihil officiis
                obcaecati! Dicta, molestias sapiente?
              </q>
            </p>
            <p className="description">
              <q>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                incidunt.
              </q>
            </p>
            <p className="description">
              <q>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia reprehenderit ipsum, dicta culpa amet error reiciendis
                pariatur saepe excepturi, nulla vitae, vel tempora quis. Minus
                repellat excepturi ipsam esse id.
              </q>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

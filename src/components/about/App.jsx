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
                I am a Frontend Developer passionate about creating clean,
                responsive, and user-friendly websites. I specialize in building
                portfolio websites, browsing platforms, and modern responsive
                layouts that work seamlessly across devices. Currently, I focus
                on developing website designs provided by designers, turning
                static visuals into fully functional and interactive web
                experiences. With a strong emphasis on detail, performance, and
                usability, I aim to deliver websites that are both visually
                appealing and highly effective.
              </q>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

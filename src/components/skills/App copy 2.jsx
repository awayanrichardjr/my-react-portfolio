import "./App.css";

// cloud
import gcloud from "../assets/cloud/gcloud.svg";
import github from "../assets/cloud/github.svg";
import gitlab from "../assets/cloud/gitlab.svg";

// databases
import mysql from "../assets/databases/mysql.svg";

// frameworks
import angular from "../assets/frameworks/angular.svg";
import boostrap from "../assets/frameworks/boostrap.svg";
import django from "../assets/frameworks/django.svg";
import jquery from "../assets/frameworks/jquery.svg";
import laravel from "../assets/frameworks/laravel.svg";
import nodejs from "../assets/frameworks/nodejs.svg";
import react from "../assets/frameworks/react.svg";
import vuejs from "../assets/frameworks/vuejs.svg";

// ides

// img
import me from "../assets/img/me/me.jpg";
// import me1 from "../assets/img/me/me1.jpeg";

// others
import css from "../assets/others/css.svg";
import git from "../assets/others/git.svg";
import html from "../assets/others/html.svg";
import json from "../assets/others/json.svg";
import npm from "../assets/others/npm.svg";

// programming languages
import java from "../assets/programming languages/java.svg";
import javascript from "../assets/programming languages/javascript.svg";
import php from "../assets/programming languages/php.png";
import python from "../assets/programming languages/python.svg";
import typescript from "../assets/programming languages/typescript.svg";

//social icons

//text editors
import vscode from "../assets/text editors/vscode.svg";

function App() {
  return (
    <>
      {/* <Importsss /> */}
      <section className="about" id="about">
        {/* <h5>About me</h5> */}
        <div className="profile-name">
          <img
            title="Richard Dumael Awayan Jr."
            src={me}
            alt="me"
            className="profile"
          />
          <div className="name-description">
            <h5>Richard Dumael Awayan Jr.</h5>
            <p>Frontend Developer</p>
          </div>
        </div>

        {/* skills */}
        <div className="skills">
          {/*  */}
          <ul className="others">
            <li className="category">
              <p>others:</p>
              <span className="material-symbols-rounded">arrow_right</span>
            </li>
            <div className="content">
              <li>
                <img title="css" src={css} alt="css" />
              </li>
              <li>
                <img title="git" src={git} alt="git" />
              </li>
              <li>
                <img title="html" src={html} alt="html" />
              </li>
              <li>
                <img title="json" src={json} alt="json" />
              </li>
              <li>
                <img title="npm" src={npm} alt="npm" />
              </li>
            </div>
          </ul>

          {/*  */}
          <ul className="frameworks">
            <li className="category">
              <p>frameworks:</p>
              <span className="material-symbols-rounded">arrow_right</span>
            </li>
            <div className="content">
              <li>
                <img title="angular" src={angular} alt="angular" />
              </li>
              <li>
                <img title="boostrap" src={boostrap} alt="boostrap" />
              </li>
              <li>
                <img title="django" src={django} alt="django" />
              </li>
              <li>
                <img title="jquery" src={jquery} alt="jquery" />
              </li>
              <li>
                <img title="laravel" src={laravel} alt="laravel" />
              </li>
              <li>
                <img title="nodejs" src={nodejs} alt="nodejs" />
              </li>
              <li>
                <img title="react" src={react} alt="react" />
              </li>
              <li>
                <img title="vuejs" src={vuejs} alt="vuejs" />
              </li>
            </div>
          </ul>

          {/*  */}
          <ul className="cloud">
            <li className="category">
              <p>cloud:</p>
              <span className="material-symbols-rounded">arrow_right</span>
            </li>
            <div className="content">
              <li>
                <img title="gcloud" src={gcloud} alt="gcloud" />
              </li>
              <li>
                <img title="github" src={github} alt="github" />
              </li>
              <li>
                <img title="gitlab" src={gitlab} alt="gitlab" />
              </li>
            </div>
          </ul>

          {/*  */}
          <ul className="database">
            <li className="category">
              <p>database:</p>
              <span className="material-symbols-rounded">arrow_right</span>
            </li>
            <div className="content">
              <li>
                <img title="mysql" src={mysql} alt="mysql" />
              </li>
            </div>
          </ul>

          {/*  */}
          <ul className="programming-languages">
            <li className="category">
              <p>programming-languages:</p>
              <span className="material-symbols-rounded">arrow_right</span>
            </li>
            <div className="content">
              <li>
                <img title="java" src={java} alt="java" />
              </li>
              <li>
                <img title="javascript" src={javascript} alt="javascript" />
              </li>
              <li>
                <img title="php" src={php} alt="php" />
              </li>
              <li>
                <img title="python" src={python} alt="python" />
              </li>
              <li>
                <img title="typescript" src={typescript} alt="typescript" />
              </li>
            </div>
          </ul>

          {/*  */}
          <ul className="text-editors">
            <li className="category">
              <p>editors:</p>
              <span className="material-symbols-rounded">arrow_right</span>
            </li>
            <div className="content">
              <li>
                <img title="vscode" src={vscode} alt="vscode" />
              </li>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;

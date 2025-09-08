import "./App.css";

import github from "../assets/cloud/github.svg";
import mysql from "../assets/databases/mysql.svg";
import react from "../assets/frameworks/react.svg";
import css from "../assets/others/css.svg";
import html from "../assets/others/html.svg";
import javascript from "../assets/programming languages/javascript.svg";
import php from "../assets/programming languages/php.png";
import vscode from "../assets/text editors/vscode.svg";
import git from "../assets/others/git.svg";

function App() {
  return (
    <>
      <section className="skills" id="skills">
        <h5>Skills, Frameworks and Tools</h5>

        {/* skills */}
        <div className="container">
          {/* core languages */}
          <ul className="skills-list">
            <li>
              <img title="html" src={html} alt="html" />
              <label htmlFor="">html</label>
            </li>
            <li>
              <img title="css" src={css} alt="css" />
              <label htmlFor="">css</label>
            </li>
            <li>
              <img title="javascript" src={javascript} alt="javascript" />
              <label htmlFor="">javascript</label>
            </li>
            <li>
              <img title="react" src={react} alt="react" />
              <label htmlFor="">react</label>
            </li>
            <li>
              <img title="git" src={git} alt="git" />
              <label htmlFor="">git</label>
            </li>
            <li>
              <img title="github" src={github} alt="github" />
              <label htmlFor="">github</label>
            </li>
            <li>
              <img title="mysql" src={mysql} alt="mysql" />
              <label htmlFor="">mysql</label>
            </li>
            <li>
              <img title="php" src={php} alt="php" />
              <label htmlFor="">php</label>
            </li>
            <li>
              <img title="vscode" src={vscode} alt="vscode" />
              <label htmlFor="">vscode</label>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;

import "./App.css";

import github from "../assets/cloud/github.svg";
import mysql from "../assets/databases/mysql.svg";
import react from "../assets/frameworks/react.svg";
import css from "../assets/others/css.svg";
import html from "../assets/others/html.svg";
import java from "../assets/programming languages/java.svg";
import javascript from "../assets/programming languages/javascript.svg";
import php from "../assets/programming languages/php.png";
import vscode from "../assets/text editors/vscode.svg";

function App() {
  return (
    <>
      <section className="skills" id="skills">
        <h1>Skills, Frameworks and Tools</h1>

        {/* skills */}
        <div className="container">
          {/* core languages */}
          <ul className="skills-list">
            <li>
              <img title="html" src={html} alt="html" />
            </li>
            <li>
              <img title="css" src={css} alt="css" />
            </li>
            <li>
              <img title="javascript" src={javascript} alt="javascript" />
            </li>
            <li>
              <img title="react" src={react} alt="react" />
            </li>
            <li>
              <img title="github" src={github} alt="github" />
            </li>
            <li>
              <img title="mysql" src={mysql} alt="mysql" />
            </li>
            <li>
              <img title="java" src={java} alt="java" />
            </li>
            <li>
              <img title="php" src={php} alt="php" />
            </li>
            <li>
              <img title="vscode" src={vscode} alt="vscode" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;

import "./App.css";
import github from "../assets/cloud/github.svg";

function App() {
  return (
    <>
      <section className="project" id="project">
        <table>
          <thead>
            <tr>
              <th>
                <h5>Projects</h5>
              </th>
            </tr>
          </thead>
          {/**
           *
           *
           *
           *
           * table body
           *  */}
          <tbody>
            <tr>
              <td>
                <h5>Telehealth Access</h5>
                <p>
                  An Online Consultation and Appointment System with Predictive
                  Analytics
                </p>
                <br />
                <div className="container">
                  <a
                    href="https://github.com/awayanrichardjr/telehealth_access"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="github-link" src={github} alt="github" />
                    <p>Github repository</p>
                  </a>
                  <label id="td-label" htmlFor="">
                    Not Deployed.
                  </label>
                </div>
                <div className="skills-applied">
                  <img
                    alt="PHP"
                    src="https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white"
                  />
                  <img
                    alt="HTML5"
                    src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
                  />
                  <img
                    alt="CSS3"
                    src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"
                  />
                  <img
                    alt="JavaScript"
                    src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
                  />
                  <img
                    alt="Git"
                    src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
                  />
                  <img
                    alt="GitHub"
                    src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white"
                  />
                  <img
                    alt="VS Code"
                    src="https://img.shields.io/badge/-VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white"
                  />
                  <img
                    alt="XAMPP"
                    src="https://img.shields.io/badge/-XAMPP-FB7A24?style=flat-square&logo=xampp&logoColor=white"
                  />
                </div>
              </td>
            </tr>
            {/**
             *
             *
             *
             *
             * closing tags bellow
             */}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;

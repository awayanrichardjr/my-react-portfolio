import "./App.css";

function App() {
  return (
    <>
      <section className="expertise" id="expertise">
        <div className="container">
          {/* table */}
          <table>
            {/* table head */}
            <thead>
              <tr>
                <th>
                  <h5>Expertise</h5>
                </th>
              </tr>
            </thead>

            {/* table body */}
            <tbody>
              <tr>
                <td>
                  <h6>Core Website Development</h6>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, dignissimos?
                  </p>
                  <a href="#">
                    <span className="material-symbols-rounded">link</span>
                    <p>Link</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Optimization & Maintenance</h6>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, quae.
                  </p>
                  <a href="#">
                    <span className="material-symbols-rounded">link</span>
                    <p>Link</p>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default App;

// frontend services link:
// https://chatgpt.com/share/68bee63a-dcac-8008-8087-480a0da20688

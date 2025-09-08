import "./App.css";

function App() {
  return (
    <>
      <section className="contact" id="contact">
        <h1>Contact</h1>
        <div className="conatiner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.803835093697!2d125.60075474478859!3d7.073599136864985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d9e40da7c65%3A0xe94c55fbd7b32544!2sPoblacion%20District%2C%20Davao%20City%2C%208000%20Davao%20del%20Sur!5e0!3m2!1sen!2sph!4v1757291753328!5m2!1sen!2sph"
            className="map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <ul className="contact-details">
            <li>
              <span className="material-symbols-rounded">location_on</span>
              <p>Davao City, 8000, Philippines</p>
            </li>
            <li>
              <span className="material-symbols-rounded">email</span>
              <p>awayanrichardjr@gmail.com</p>
            </li>
            <li>
              <span className="material-symbols-rounded">call</span>
              <p>0906-587-6602</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;

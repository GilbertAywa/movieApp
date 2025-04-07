import myLogo from "../assets/easydev-logo.jpg";
import apiLogo from "../assets/themoviedb_logo.png"

function Footer() {
  return (
    <footer className="bg-dark text-secondary py-5 mt-5">
      <div className="container row mx-auto">

        <div className="col-md-6 d-flex">
          <a href="https://www.themoviedb.org/" className="ratio ratio-1x1 m-1">
            <img src={apiLogo} alt="the movie db logo" className="rounded" />
          </a>

          <a href="https://gilbertaywa.github.io/portfolio/views/" className="ratio ratio-1x1 m-1">
            <img src={myLogo} alt="easy dev logo" className="rounded" />
          </a>
        </div>

        <div className="col-md-3">
          <a href="https://github.com/GilbertAywa" className="p-1 d-flex align-items-center text-secondary fw-bold social-link">
            <div className="social-icon">
              <img src="icons/github-brands.svg" alt="github-icon" />
            </div>
            <div className="ms-2 link-name">github</div>
          </a>

          <a href="https://www.linkedin.com/in/gilbert-aywa-6872b72b5" className="p-1 d-flex align-items-center text-secondary fw-bold social-link">
            <div className="social-icon">
              <img src="icons/linkedin-brands.svg" alt="linkedin-icon" />
            </div>
            <div className="ms-2 link-name">LinkedIn</div>
          </a>

          <a href="#" className="p-1 d-flex align-items-center text-secondary fw-bold social-link">
            <div className="social-icon">
              <img src="icons/twitter-brands.svg" alt="twiter-icon" />
            </div>
            <div className="ms-2 link-name">Twiter</div>
          </a>
        </div>

        <div className="col-md-3">
          <a href="https://gilbertaywa.github.io/portfolio/views/" className="p-1 d-flex align-items-center text-secondary fw-bold social-link">
            <div className="social-icon">
              <img src="icons/globe-solid.svg" alt="globe-icon" />
            </div>
            <div className="ms-2 link-name">www.gilbert_portfolio.com</div>
          </a>

          <a href="mailto:gilbertdev21@gmail.com" className="p-1 d-flex align-items-center text-secondary fw-bold social-link">
            <div className="social-icon">
              <img src="icons/envelope-solid.svg" alt="envelope-icon" />
            </div>
            <div className="ms-2 link-name">gilbertdev21@gmail.com</div>
          </a>

          <a href="#" className="p-1 d-flex align-items-center text-secondary fw-bold social-link">
            <div className="social-icon">
              <img src="icons/facebook-brands.svg" alt="facebook-icon" />
            </div>
            <div className="ms-2 link-name">Facebook</div>
          </a>
        </div>

        <div className="col text-center">&copy; Gilbert Aywa 2025 | Easy dev | All Rights Reserve</div>
      </div>
    </footer>
  )
}

export default Footer;
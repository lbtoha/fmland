import Image from "next/image";

const Footer = () => {
  return (
    // <!-- footer section start -->
    <footer className="footer-section">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-4 col-xl-5 col-lg-4 text-lg-start text-center">
            <a href="index.html" className="footer-logo">
              <Image
                width={232}
                height={64}
                src="/images/logo.png"
                alt="image"
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh
              aenean eu, mattis egestas ut et.
            </p>
          </div>
          <div className="col-xxl-8 col-xl-7 col-lg-8">
            <nav className="footer-nav">
              <ul className="footer-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="show-schedule.html">Show Schedule</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="sponsor.html">Sponsors</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr />
        <div className="row gy-2 align-items-center">
          <div className="col-md-6 text-md-start text-center">
            <p>© 2023 FMland. All rights reserved</p>
          </div>
          <div className="col-md-6">
            <ul className="social-links">
              <li>
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

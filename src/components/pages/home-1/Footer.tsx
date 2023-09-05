import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    //  footer section start
    <footer className="footer-section">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-4 col-xl-5 col-lg-4 text-lg-start text-center">
            <Link href="index" className="footer-logo">
              <Image
                width={232}
                height={64}
                src="/images/logo.png"
                alt="image"
              />
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh
              aenean eu, mattis egestas ut et.
            </p>
          </div>
          <div className="col-xxl-8 col-xl-7 col-lg-8">
            <nav className="footer-nav">
              <ul className="footer-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="about">About Us</Link>
                </li>
                <li>
                  <Link href="show-schedule">Show Schedule</Link>
                </li>
                <li>
                  <Link href="blog">Blog</Link>
                </li>
                <li>
                  <Link href="sponsor">Sponsors</Link>
                </li>
                <li>
                  <Link href="contact-us">Contact</Link>
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
                <Link href="#0">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#0">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="#0">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link href="#0">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

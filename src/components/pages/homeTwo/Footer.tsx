import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    // <!-- footer section start -->
    <footer className="footer-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <Link href="index.html" className="footer-logo">
              <Image
                width={232}
                height={64}
                src="/images/logo.png"
                alt="image"
              />
            </Link>
          </div>
          <div className="col-lg-12">
            <nav className="footer-nav">
              <ul className="footer-menu justify-content-center">
                <li>
                  <Link href="index.html">Home</Link>
                </li>
                <li>
                  <Link href="about.html">About Us</Link>
                </li>
                <li>
                  <Link href="show-schedule.html">Show Schedule</Link>
                </li>
                <li>
                  <Link href="blog.html">Blog</Link>
                </li>
                <li>
                  <Link href="sponsor.html">Sponsors</Link>
                </li>
                <li>
                  <Link href="contact.html">Contact</Link>
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
    // <!-- footer section end -->
  );
};

export default Footer;

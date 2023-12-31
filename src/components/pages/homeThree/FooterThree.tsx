import Image from "next/image";
import Link from "next/link";

const FooterThree = () => {
  return (
    //  footer section start
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-5 justify-content-between">
          <div className="col-lg-3">
            <Link href="#0" className="bottom-logo">
              <Image
                width={151}
                height={42}
                src="/images/logo-white.png"
                alt="image"
              />
            </Link>
            <ul className="footer-info-list">
              <li>
                <i className="far fa-envelope"></i>
                <p>
                  <Link href="mailto:contact.FMland@gmail.com">
                    contact.FMland@gmail.com
                  </Link>
                </p>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <p>
                  <Link href="tel:+1658361253">+1 658 361 253</Link>
                </p>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <p>
                  Ms Alice Smith Apartment 1c 213 Derrick Street Boston, MA
                  02130 USA
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4 col-6">
            <h5>Overview</h5>
            <ul className="footer-general-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#0">Pages</Link>
              </li>
              <li>
                <Link href="/show-schedule">Show schedule</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4 col-6">
            <h5>Services</h5>
            <ul className="footer-general-menu">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="#0">Terms & Condition</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4 col-6">
            <h5>Policy</h5>
            <ul className="footer-general-menu">
              <li>
                <Link href="#0">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#0">Terms of Service</Link>
              </li>
              <li>
                <Link href="#0">Cancellation</Link>
              </li>
              <li>
                <Link href="#0">Referral Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copy-right-area">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-6">
              <p className="copy-right-text text-lg-start text-center">
                © {new Date().getFullYear()} FMland. All rights reserved
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="social-links-two justify-content-lg-end justify-content-center">
                <li>
                  <Link href="#0">
                    <i className="fab fa-facebook-f"></i>
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
                <li>
                  <Link href="#0">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;

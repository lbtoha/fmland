"use client";
import { navbarItems } from "@/../public/data/navbar";
import logo from "@/../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

const NavBar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index: string | number | null) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
    console.log("ami achi"); // Log a message when the button is clicked
  };

  return (
    //   navbar start
    <nav className="navbar main-navbar navbar-expand-xl">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image src={logo} alt="site logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav site-menu m-auto mb-2 mb-lg-0">
            {navbarItems.map(({ id, item, linkURL, dropDown }) => (
              <li
                key={id}
                className={`menu-item ${
                  dropDown !== undefined &&
                  dropDown.length > 1 &&
                  " menu-item-has-children"
                }`}
              >
                <Link href={linkURL}>{item}</Link>
                {dropDown !== undefined && dropDown.length > 1 && (
                  <button
                    onClick={() => toggleSubMenu(id)}
                    className="menu-item-button"
                    type="button"
                  >
                    {openSubMenu === id ? "-" : "+"}
                  </button>
                )}

                {openSubMenu == id && (
                  <AnimateHeight
                    key={id}
                    id={`example-panel-faq${id}`}
                    duration={5000}
                    height={openSubMenu == id ? "auto" : 0}
                  >
                    <ul className="sub-menu" style={{ display: "block" }}>
                      {dropDown !== undefined &&
                        dropDown.map(({ id, dropDownItem, dropDownLink }) => (
                          <li key={id} className="menu-item">
                            <Link href={dropDownLink}>{dropDownItem}</Link>
                          </li>
                        ))}
                    </ul>
                  </AnimateHeight>
                )}

                {dropDown !== undefined && dropDown.length > 1 && (
                  <ul className="sub-menu">
                    {dropDown.map(({ id, dropDownItem, dropDownLink }) => (
                      <li key={id} className="menu-item">
                        <Link href={dropDownLink}>{dropDownItem}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href="sponsor.html" className="btn btn-main mt-xl-0 mt-3">
            Sponsor
          </Link>
        </div>
      </div>
    </nav>
    //    <!-- navbar end -->
  );
};

export default NavBar;

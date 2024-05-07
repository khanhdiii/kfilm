import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper1">
        {/* RIGHT START */}
        <div className="container-footer__right">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="social"
          >
            <FaFacebookF size={20} />
          </div>
          <div
            onClick={() => window.open("https://twitter.com", "_blank")}
            className="social"
          >
            <FaTwitter size={20} />
          </div>
          <div
            onClick={() => window.open("https://youtube.com", "_blank")}
            className="social"
          >
            <FaYoutube size={20} />
          </div>
          <div
            onClick={() => window.open("https://instagram.com", "_blank")}
            className="social"
          >
            <FaInstagram size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </div>
      <div className="wrapper2">
        {/* LEFT START */}
        <div className="left-start">
          © 2024 KFilm , Dev: Khanhdiii, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="right-start">
          <div className="right-start__content">Terms of Sale</div>
          <div className="right-start__content">Terms of Use</div>
          <div className="right-start__content">Privacy Policy</div>
        </div>
        {/* RIGHT END */}
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          backgroundColor: "#c91616",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      />
    </footer>
  );
};

export default Footer;

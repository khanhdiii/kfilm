import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper1 ">
        {/* LEFT START */}
        <div className="container-footer__left ">
          {/* MENU START */}
          <div className="menu-start">
            <div className="menu-start__name">Find a store</div>
            <div className="menu-start__name">become a partner</div>
            <div className="menu-start__name">sign up for email</div>
            <div className="menu-start__name">send us feedback</div>
            <div className="menu-start__name">student discount</div>
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="nomal-start">
            {/* MENU START */}
            <div className="menu-start">
              <div className="menu-start__name">get help</div>
              <div className="menu-start__nameinfo">Order Status</div>
              <div className="menu-start__nameinfo">Returns</div>
              <div className="menu-start__nameinfo">Payment Options</div>
              <div className="menu-start__nameinfo">Contact Us</div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="menu-start">
              <div className="menu-start__name">About shoes</div>
              <div className="menu-start__nameinfo">News</div>
              <div className="menu-start__nameinfo">Careers</div>
              <div className="menu-start__nameinfo">Investors</div>
              <div className="menu-start__nameinfo">Sustainability</div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="container-footer__right ">
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

      <div className=" wrapper2">
        {/* LEFT START */}
        <div className=" left-start ">
          © 2024 KFilm , Dev: Khanhdiii, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="right-start ">
          <div className="right-start__content ">Terms of Sale</div>
          <div className="right-start__content ">Terms of Use</div>
          <div className="right-start__content ">Privacy Policy</div>
        </div>
        {/* RIGHT END */}
      </div>
    </footer>
  );
};

export default Footer;

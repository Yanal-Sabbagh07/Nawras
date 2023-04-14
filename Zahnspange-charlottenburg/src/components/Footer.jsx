import React from "react";
import "../styles/components/Footer.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Button from "./Button";
import GoogleMap from "./GoogleMap";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="google-map-container">
          <GoogleMap />
        </div>
        <div className="footer-content-top-container">
          <div className="footer-content-top">
            <div className="footer-content-left">
              <div className="footer-left-details">
                <div className="details-name email-name">
                  <div className="name-icon logo-icon">
                    <img
                      src={require("../imgs/logo-trans.png")}
                      alt="rose"
                      className="rose"
                    />
                  </div>
                  <div className="name-txt name">Zahnspange Charlottenburg</div>
                  <div className="open-times ot">Öffnungszeiten :</div>
                </div>

                <div className="details-name email-name">
                  <div className="name-icon">
                    <PlaceIcon className="footer-icon" />
                  </div>
                  <div className="name-txt">
                    Richard-Wagner-Platz 3 <br /> 10585 Berlin
                  </div>

                  <div className="open-times">
                    <div className="day">Mo :</div>
                    <div className="time">
                      {" "}
                      09:00 - 12:00 <span> & </span> 13:00 - 18:00
                    </div>
                  </div>
                </div>

                <div className="details-name email-name">
                  <div className="name-icon">
                    <PhoneIcon className="footer-icon" />{" "}
                  </div>
                  <div className="name-txt">030 - 3414 060</div>
                  <div className="open-times">
                    <div className="day">Di :</div>
                    <div className="time">
                      {" "}
                      09:00 - 12:00 <span> & </span> 14:00 - 18:00
                    </div>
                  </div>
                </div>

                <div className="details-name email-name">
                  <div className="name-icon">
                    <LocalPrintshopIcon className="footer-icon" />{" "}
                  </div>
                  <div className="name-txt">030 - 3419 787</div>
                  <div className="open-times">
                    <div className="day">Mi - Do :</div>
                    <div className="time">
                      {" "}
                      09:00 - 12:00 <span> & </span> 13:00 - 18:00
                    </div>
                  </div>
                </div>

                <div className="details-name email-name">
                  <div className="name-icon">
                    <EmailIcon className="footer-icon" />{" "}
                  </div>
                  <div className="name-txt">
                    info@zahnspange-charlottenburg.de
                  </div>
                  {/* <div className="open-times last-open-times">
                    <div className="btn-footer-descktop">
                      <Button bgColor="#fff" color="#424a53" />
                    </div>
                  </div> */}
                  <div className="open-times">
                    <div className="day">Fr :</div>
                    <div className="time"> Nach vereinbarung</div>
                  </div>
                </div>
              </div>
              <div className="last-open-times">
                <div className="btn-footer-descktop">
                  <Button bgColor="#fff" color="#424a53" />
                </div>
              </div>
              <div className="opening-times-mobile">
                <div className="open-times open-times-header">
                  Öffnungszeiten
                </div>
                <div className="open-times">
                  <div className="day">Mo :</div>
                  <div className="time">
                    09:00 - 12:00 <span> & </span>
                    13:00 - 18:00
                  </div>
                </div>
                <div className="open-times">
                  <div className="day">Di :</div>
                  <div className="time">
                    09:00 - 12:00 <span> & </span>
                    14:00 - 18:00
                  </div>
                </div>
                <div className="open-times">
                  <div className="day">Mi - Do :</div>
                  <div className="time">
                    09:00 - 12:00 <span> & </span> 13:00 - 18:00
                  </div>
                </div>
                <div className="open-times">
                  <div className="day">Fr :</div>
                  <div className="time"> Nach vereinbarung</div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-footer-mobile">
            <Button bgColor="#fff" color="#424a53" />
          </div>
        </div>
      </div>
      <div className="footer-content-bottom">
        <div className="footer-copy-right">
          <strong className="copy-sign">
            <CopyrightIcon className="c-icon" />
          </strong>
          2022 Zahnspange-Charlottenburg | <span>Dr.Nawras Darkazanly </span>
        </div>
        <div className="footer-social-media">
          <div className="footer-impressum-mobile">
            <a href="/Impressum">Impressum</a>
            <a
              href="https://www.facebook.com/Zahnspangeberlin"
              target="_blank"
              rel="noreferrer noopener"
              className="social-icon-container fb"
            >
              <FacebookIcon className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/zahnspangeberlin"
              target="_blank"
              rel="noreferrer noopener"
              className="social-icon-container ig"
            >
              <InstagramIcon className="social-icon" />
            </a>
            <a href="/Datenschutz">Datenschutzerklärung</a>
          </div>
        </div>
        <div className="footer-impressum">
          <a href="/Impressum">Impressum</a>
          <div className="footer-social-media-descktop">
            <a
              href="https://www.facebook.com/Zahnspangeberlin"
              target="_blank"
              rel="noreferrer noopener"
              className="social-icon-container fb"
            >
              <FacebookIcon className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/zahnspangeberlin"
              target="_blank"
              rel="noreferrer noopener"
              className="social-icon-container ig"
            >
              <InstagramIcon className="social-icon" />
            </a>
          </div>
          <a href="/Datenschutz">Datenschutzerklärung</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

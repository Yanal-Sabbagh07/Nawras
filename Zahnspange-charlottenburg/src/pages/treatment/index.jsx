import React from "react";
import "../../styles/pages/leistungen/Leistungen.scss";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import WaveSection from "../../components/WaveSection";

const index = () => {
  return (
    <div className="leistungen-main-container">
      <section className="first-container">
        <WaveSection
          header="Unsere Leistungen für Sie"
          content="Unsere Fachpraxis in Charlottenburg bietet Kindern, Jugendlichen und Erwachsenen
          professionelle Behandlungen auf dem neuesten Stand der Zahnmedizin und mit modernster
          Technik.
          Alle Behandler haben jahrzehntelange kieferorthopädische Erfahrung.
          Schöne und gerade Zähne sind in jedem Alter möglich, man ist nie zu alt für eine
          kieferorthopädische Behandlung."
        />
      </section>
      <section className="secound-container">
        <div className="secound-left-container">
          <div className="adult-img"></div>
        </div>
        <div className="secound-right-container">
          <div className="adults-title-container">
            <h1 className="adults-title">Kinder / Jugendliche</h1>
          </div>
          <div className="adults-btn-container">
            <Link to="/treatment/kids" className="adults-btn">
              Unsere Behandlungen für Kinder & Jugendliche
            </Link>
          </div>
        </div>
      </section>
      <section className="third-container">
        <div className="third-left-container">
          <div className="kids-title-container">
            <h2 className="kids-title">Erwachsene</h2>
          </div>
          <div className="kids-btn-container">
            <Link to="/treatment/adults" className="kids-btn">
              Unsere Behandlungen für Erwachsene
            </Link>
          </div>
        </div>
        <div className="third-right-container"></div>
      </section>
      <section className="leistungen-footer-container">
        <Footer />
      </section>
    </div>
  );
};

export default index;

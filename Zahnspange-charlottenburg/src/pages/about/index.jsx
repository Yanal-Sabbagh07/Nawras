import React from "react";
import "../../styles/pages/about/About.scss";
// import { useLocation } from "react-router-dom";
import Slider from "../../components/Slider";
import Collapsable from "../../components/Collapsable";
import NurseCard from "../../components/NurseCard";
import nurses from "../../helpers/nurses";
import Footer from "../../components/Footer";
import { aboutSlider } from "../../helpers/aboutSlider";
const About = () => {
  return (
    <div className="aboutus-page-container">
      <section className="about-slider-contianer">
        <Slider sliderData={aboutSlider} count={6} />
        {/* <div className="about-hero-img"></div> */}
      </section>
      <section className="team-section-container">
        <div className="title-container">
          <h1 className="title">Unser Praxisteam</h1>
        </div>
        <div className="Dr-N-container" id="/about">
          <div className="Dr-N-img-container">
            <div className="Dr-N-img"></div>
          </div>
          <div className="Dr-N-cv-container">
            <div className="dr-name">
              <h3>Dr. Nawras Darkazanly</h3>
            </div>
            <div className="dr-job">
              <p>Fachzahnarzt für Kieferorthopädie</p>
            </div>

            <Collapsable className="dr-cv" />
          </div>
        </div>
        <div className="Dr-P-container" id="/about">
          <div className="Dr-P-cv-container">
            <div className="dr-name">
              <h3>Dr. Petra Löffler </h3>
            </div>
            <div className="dr-job">
              <p>Fachzahnarzt für Kieferorthopädie</p>
            </div>
          </div>
          <div className="Dr-P-img-container">
            <div className="Dr-P-img"></div>
          </div>
        </div>
        <div className="Nurses-container">
          <div className="Nurses-wrapper">
            <NurseCard
              name={nurses[0].name}
              job={nurses[0].job}
              img={nurses[0].img}
            />
            <NurseCard
              name={nurses[1].name}
              job={nurses[1].job}
              img={nurses[1].img}
            />
            <NurseCard
              name={nurses[2].name}
              job={nurses[2].job}
              img={nurses[2].img}
            />
            <NurseCard
              name={nurses[3].name}
              job={nurses[3].job}
              img={nurses[3].img}
            />
            <NurseCard
              name={nurses[4].name}
              job={nurses[4].job}
              img={nurses[4].img}
            />
            <NurseCard
              name={nurses[5].name}
              job={nurses[5].job}
              img={nurses[5].img}
            />
            <NurseCard
              name={nurses[6].name}
              job={nurses[6].job}
              img={nurses[6].img}
            />
            <NurseCard
              name={nurses[7].name}
              job={nurses[7].job}
              img={nurses[7].img}
            />
          </div>
        </div>
        {/* <div className="title-container">
          <h1 className="title">Unsere Praxis</h1>
        </div> */}
      </section>

      <div className="about-footer">
        <Footer />
      </div>

      {/* <section className="slider-contianer">
        <Slider hero2="25" hero1="29" hero3="26" count={2} type=".png" />
      </section> */}
    </div>
  );
};

export default About;

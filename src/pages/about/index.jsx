import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";

import "./style.scss";

const JobSummary =
  "Hey! I'm Dawood, a frontend lover who loves creating awesome websites that look great and are easy to use. I focus on making sure your experience on a website is top-notch, combining a good eye for design with clean and efficient code. I use HTML, CSS, and JavaScript to bring ideas to life, always keeping up with the latest UI/UX trends. Besides coding, I'm big on communication and working smoothly with diverse teams. Check out my portfolio and let's build something amazing together.";
const PersonalDetails = [
  {
    label: "Name:",
    value: "Dawood",
  },
  {
    label: "Age:",
    value: "23y",
  },
  {
    label: "Address:",
    value: "Punjab, Pakistan",
  },
  {
    label: "Email:",
    value: "m.dawood7233@gmail.com",
  },
  {
    label: "Contact-No:",
    value: "+923049943649",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalData">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transfrom: "translateY(0px)",
            }}
          >
            <h3>Front End developer</h3>
            <p>{JobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transfrom: "translateY(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal information
            </h3>
            <ul>
              {PersonalDetails.map((items, i) => (
                <li key={i}>
                  <span className="item">{items.label}</span>
                  <span className="value">{items.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(500px)",
        }}
        end={{
          transfrom: "translateX(0px)",
        }}
      >
        <div className="about__image-container">
          <img
            src="/brown-pent-coat-PhotoRoom.png-PhotoRoom.png"
            alt=""
            className="about__image-container__image"
          />
        </div>
      </Animate>
    </section>
  );
};

export default About;

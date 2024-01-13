import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./style.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((category, i) => (
          <div className="skills__content-wrapper__inner-content" key={i}>
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateY(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__text">
                {category.label}
              </h3>
              <div>
                {category.data.map((skillitem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity :1, opacity: 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar" key={j}>
                      <p>
                        {skillitem.skillName}
                        <Line
                          percent={skillitem.percentage}
                          strokeWidth="2"
                          strokeColor="var(--green-theme-main-color)"
                          trailWidth="20"
                          strokeLinecap="square"
                        />
                      </p>
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { resumeData } from "./utils";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.scss"
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { FaBook } from "react-icons/fa6";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--green-theme-main-color)"
          >
            {resumeData.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background:'none',
                  color: "var(--green-theme-sub-text-color)",
                  border: "1.5px solid var(--green-theme-main-color)"
                }}
                date="2024 - present"
                icon={<MdOutlineLaptopChromebook/>}
                iconStyle={{
                  background:"#181818",
                  color: "var(--green-theme-main-color)"
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--green-theme-main-color)"
          >
          {resumeData.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background:'none',
                  color: "var(--green-theme-sub-text-color)",
                  border: "1.5px solid var(--green-theme-main-color)"
                }}
                date="2024 - present"
                icon={<FaBook/>}
                iconStyle={{
                  background:"#181818",
                  color: "var(--green-theme-main-color)"
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
              </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;

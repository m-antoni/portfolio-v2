"use client";

import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Career() {
  return (
    <>
      <section id="career" className="s-career-title target-section">
        <div className="row">
          <div className="column xl-12">
            <div className="section-header" data-num="02">
              <h2 className="text-display-title">Career.</h2>
            </div>
            {/* end section-header */}
          </div>
        </div>

        <div id="career" className="s-career">
          <div className="items-container">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "white",
                  color: "rgb(39, 40, 34)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  white",
                }}
                date="2021 - present"
                iconStyle={{
                  background: "#E57F60",
                  color: "rgb(39, 40, 34)",
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Senior Software Engineer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Accenture
                </h4>
                {/* <p>
                  Full-stack Web Development, GenAI/LLM, Project Management,
                  Business Development
                </p> */}
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - 2022"
                iconStyle={{
                  background: "#E57F60",
                  color: "rgb(39, 40, 34)",
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  MERN Stack Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Stealth Startup (Project based)
                </h4>
                {/* <p>
                  Frontend Development, Backend Development, User Experience,
                  Team Leading
                </p> */}
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - 2021"
                iconStyle={{
                  background: "#E57F60",
                  color: "rgb(39, 40, 34)",
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Full Stack Web Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Bluehive</h4>
                {/* <p>Full-stack Development, API Development, User Experience</p> */}
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2014 - 2016"
                iconStyle={{
                  background: "#E57F60",
                  color: "rgb(39, 40, 34)",
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Web Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  DC Multinational Group of Companies
                </h4>
                {/* <p>Automation, Data Governance, Statistical Analysis</p> */}
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
}

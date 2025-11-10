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
                  // color: "rgb(39, 40, 34)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid white",
                }}
                date="2021 - Present"
                iconStyle={{
                  background: "#28282B",
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
                <p>
                  Designed, developed, and deployed scalable, secure, and
                  high-performance web applications. Collaborated across teams
                  to translate business needs into technical solutions and
                  optimize overall system performance.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: "7px solid white",
                }}
                date="2022 - 2022"
                iconStyle={{
                  background: "#28282B",
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
                <p>
                  Recruitment system development, API integration, and
                  cross-team collaboration. using MER Stack & TypeScript
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - 2021"
                contentArrowStyle={{
                  borderRight: "7px solid white",
                }}
                iconStyle={{
                  background: "#28282B",
                  color: "rgb(39, 40, 34)",
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Full Stack Web Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Bluehive</h4>
                <p>
                  Developed and maintained large-scale projects aligned with
                  client goals. Documented systems and processes, conducted code
                  reviews, mentored junior developers, and contributed to key
                  technology decisions.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2014 - 2016"
                contentArrowStyle={{
                  borderRight: "7px solid white",
                }}
                iconStyle={{
                  background: "#28282B",
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
                <p>
                  Enhanced projects by implementing security, Wrote clean,
                  maintainable code and modernized legacy systems into scalable
                  web applications.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
}

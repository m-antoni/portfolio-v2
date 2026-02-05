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
                  borderRight: "10px solid white",
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
                <p className="md:text-justify">
                  Designed, developed, and deployed scalable, secure, and
                  high-performance web applications. Partnered with
                  cross-functional teams to translate complex business
                  requirements into effective technical solutions, while
                  continuously optimizing system architecture, performance, and
                  reliability.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: "10px solid white",
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
                  Stealth Startup
                </h4>
                <p className="md:text-justify">
                  "Project-Based" engagement focused on building a recruitment
                  system, integrating external APIs, and collaborating with
                  cross-functional teams. Utilized the MERN stack and TypeScript
                  to deliver a reliable and maintainable solution.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - 2021"
                contentArrowStyle={{
                  borderRight: "10px solid white",
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
                <p className="md:text-justify">
                  Developed and maintained small to large-scale projects aligned
                  with client objectives. Created documentation for systems and
                  workflows, conducted thorough code reviews, mentored junior
                  developers, and contributed to critical technology and
                  architectural decisions
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2014 - 2016"
                contentArrowStyle={{
                  borderRight: "10px solid white",
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
                <p className="md:text-justify">
                  Enhanced existing projects through security enhancements,
                  clean and maintainable code practices, and the modernization
                  of legacy systems into scalable, reliable web applications.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
}

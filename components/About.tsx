import Link from "next/link";
import TechStacks from "./TechStacks";

export default function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="row s-about__content">
        <div className="column xl-12">
          <div className="section-header" data-num="01">
            <h2 className="text-display-title">About Me.</h2>
          </div>
          {/* end section-header */}

          <p className="attention-getter md:text-justify">
            Experienced Software Engineer with a strong foundation in designing
            and developing secure, scalable, and maintainable software
            solutions. I apply industry best practices, modern architectural
            patterns, and rigorous development standards to deliver high-quality
            applications.
          </p>

          <p className="attention-getter md:text-justify">
            In addition to software engineering, I bring practical expertise in
            computer hardware, system installation, maintenance, and
            troubleshooting, enabling me to approach technology with a
            comprehensive end-to-end perspective. I am driven by creating
            meaningful solutions, improving user experiences, and continuously
            advancing my technical skillset. My work is guided by a commitment
            to innovation, reliability, and long-term impact.
          </p>

          <div className="grid-list-items s-about__blocks">
            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Technologies Used</h4>
              <TechStacks />
            </div>
          </div>

          <div className="grid-list-items s-about__blocks">
            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Seminars Events</h4>
              <ul className="s-about__list">
                <li>
                  Programmers & Developers Meet Up 8{" "}
                  <span>2019 - Microsoft Philippines Inc.</span>
                </li>
                <li>
                  All Out Connect (Learning Beyond The Fundamentals of IT)
                  <span>
                    2018 - Polytechnic University of the Philippines Taguig
                  </span>
                </li>
                <li>
                  Web Dev Summit 2017 (Ignite The Future of Technology){" "}
                  <span>2017 - Far Eastern University</span>
                </li>
                <li>
                  The 18th Graphic Expo 2013 (Innovation Beyond Limits){" "}
                  <span>2013 - SMX Convention Center, Manila</span>
                </li>
              </ul>
            </div>
            {/* end s-about__block */}

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Certifications & Awards</h4>
              <ul className="s-about__list">
                <li>
                  <Link
                    href="https://university.mongodb.com/course_completion/bb6c31a1-00f5-4eb6-81b0-81c2948ad7ff"
                    target="_blank"
                    className="text-link"
                  >
                    M220JS - MongoDB for JavaScript Developers
                    <span>2021 - Oct</span>
                  </Link>
                </li>
                <li>
                  <a href="#0">
                    Best Programmer
                    <span>2019 - Acer Academy Awardee at St Clare College</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Computer Programmer Assistant{" "}
                    <span>
                      2019 - International Certificate Level Royal Institution
                      Singapore at St Clare College
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Best Web Design Award
                    <span>2017 - St. Clare College of Caloocan</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* end s-about__block */}
          </div>

          {/* end grid-list-items */}
        </div>
        {/* end column */}
      </div>
      {/* end s-about__content */}
    </section>
  );
}

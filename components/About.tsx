export default function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="row s-about__content">
        <div className="column xl-12">
          <div className="section-header" data-num="01">
            <h2 className="text-display-title">About Me.</h2>
          </div>
          {/* end section-header */}

          <p className="attention-getter">
            Experienced Software Engineer with a strong track record in
            designing and building secure, efficient, and maintainable
            applications using industry best practices. Passionate about
            continuous learning and developing innovative projects that make a
            positive impact. In addition to software expertise, I bring hands-on
            experience in computer hardware, system installation, maintenance,
            and troubleshooting.
          </p>

          <p className="attention-getter">
            I love creating projects that solve real-world problems, push the
            boundaries of technology, and deliver meaningful experiences for
            users. Building innovative solutions and seeing them come to life is
            what drives me every day.
          </p>

          <div className="grid-list-items s-about__blocks">
            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Seminars Events</h4>
              <ul className="s-about__list">
                <li>
                  Google Developer Group DevFest Manila 2025{" "}
                  <span>2025 - Accenture Hub, Taguig, Philippines</span>
                </li>
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
              <h4 className="s-about__block-title">Cetifications & Awards</h4>
              <ul className="s-about__list">
                <li>
                  <a href="#0">
                    M220JS - MongoDB for JavaScript Developers
                    <span>2021 - Oct</span>
                  </a>
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

            {/* <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Skills</h4>
              <ul className="s-about__list">
                <li>
                  Programming
                  <span>Node (Express)</span>
                  <span>Laravel</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>Reactjs/ Nextjs</span>
                  <span>Redux </span>
                  <span>Angular</span>
                  <span>MongoDB</span>
                  <span>Firebase (BaaS)</span>
                  <span>Supabase (BaaS)</span>
                  <span>MySQL</span>
                  <span>CSS</span>
                  <span>GIT</span>
                </li>
                <li>
                  Methodologies & Practices
                  <span>Agile (Scrum / Kanban)</span>
                  <span>Code Review</span>
                  <span>Clean Coding</span>
                  <span>Creating Docs in Confluence </span>
                </li>
                <li>
                  Graphics
                  <span>Canva</span>
                  <span>Adobe Photoshop</span>
                  <span>Draw.io</span>
                  <span>Coggle</span>
                </li>
              </ul>
            </div> */}

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

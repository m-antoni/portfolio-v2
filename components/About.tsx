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
              <h4 className="s-about__block-title">Experience</h4>
              <ul className="s-about__list">
                <li>
                  Spotify <span>Product Designer</span>
                </li>
                <li>
                  Dropbox <span>Interface Developer</span>
                </li>
                <li>
                  Google <span>Lead UI Designer</span>
                </li>
                <li>
                  Figma <span>UI Designer</span>
                </li>
                <li>
                  Microsoft <span>UI Designer</span>
                </li>
              </ul>
            </div>
            {/* end s-about__block */}

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Awards</h4>
              <ul className="s-about__list">
                <li>
                  <a href="#0">
                    Site Of The Month <span>Awwwards — 2023</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Site Of The Day <span>Awwwards — 2023</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Agency of The Year <span>Awwwards — 2022</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    FWA of The Month <span>FWA — 2022</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Site Of The Month <span>Awwwards — 2022</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* end s-about__block */}

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Skills</h4>
              <ul className="s-about__list">
                <li>Product Design</li>
                <li>UI/UX Design</li>
                <li>Prototyping</li>
                <li>Frontend Development</li>
                <li>Illustration</li>
                <li>Visual Design</li>
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

"use client";

import Link from "next/link";

export default function Intro() {
  return (
    <section id="intro" className="s-intro target-section">
      <div className="row s-intro__content width-sixteen-col">
        <div className="column lg-12 s-intro__content-inner grid-block grid-16">
          <div className="s-intro__content-text">
            <div className="s-intro__content-pretitle text-pretitle">Hello</div>
            <h1 className="s-intro__content-title">
              I'm Michael Antoni <br />a Senior Software Engineer base in
              Philippines.
            </h1>

            <div className="s-intro__content-btns">
              <a className="smoothscroll btn" href="#about">
                More About Me
              </a>
              {/* <Link className="smoothscroll btn btn--stroke" href="#footer">
                Get In Touch
              </Link> */}
              <a
                href="/michaelantoni_cv.pdf"
                download
                className="btn btn--stroke"
                style={{ cursor: "pointer" }} // make it clear it’s clickable
              >
                GET MY CV
              </a>
            </div>
            {/* s-intro__content-btns */}
          </div>
          {/* s-intro__content-text */}
        </div>
        {/* s-intro__content-inner */}
      </div>
      {/* s-intro__content */}

      <ul className="s-intro__social social-list">
        {/* LinkedIn */}
        <li>
          <Link href="https://www.linkedin.com/in/m-antoni" target="_blank">
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.036-1.849-3.036-1.849 0-2.132 1.445-2.132 2.937v5.668h-3.554v-11.48h3.414v1.561h.049c.476-.899 1.637-1.848 3.372-1.848 3.602 0 4.268 2.37 4.268 5.455v6.312zM5.337 8.433c-1.144 0-2.068-.926-2.068-2.067 0-1.143.924-2.068 2.068-2.068 1.144 0 2.068.925 2.068 2.068 0 1.141-.924 2.067-2.068 2.067zm1.777 12.019h-3.554v-11.48h3.554v11.48z" />
            </svg>

            <span className="u-screen-reader-text">LinkedIn</span>
          </Link>
        </li>

        {/* Github */}
        <li>
          <Link href="https://github.com/m-antoni" target="_blank">
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.46 11.46 0 013-.404c1.02.004 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.912 1.23 3.222 0 4.61-2.805 5.625-5.475 5.922.429.369.81 1.096.81 2.21 0 1.595-.015 2.877-.015 3.267 0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>

            <span className="u-screen-reader-text">Github</span>
          </Link>
        </li>

        <li>
          <Link
            href="https://www.facebook.com/michaelantoni.dev"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z"
                fill="currentColor"
              />
            </svg>

            <span className="u-screen-reader-text">Facebook</span>
          </Link>
        </li>

        {/* Instagram */}
        {/* <li>
          <a href="#0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(0,0,0,1)"
            >
              <path d="M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306-.088-.79-.166-2.006.034-2.868.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425.853 0 1.264.64 1.264 1.407 0 .858-.546 2.139-.827 3.327-.235.994.499 1.805 1.479 1.805 1.775 0 3.141-1.872 3.141-4.575 0-2.392-1.719-4.064-4.173-4.064-2.843 0-4.512 2.132-4.512 4.335 0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133-.044.183-.145.222-.335.134-1.247-.581-2.027-2.405-2.027-3.871 0-3.151 2.289-6.045 6.601-6.045 3.466 0 6.159 2.469 6.159 5.77 0 3.444-2.171 6.213-5.184 6.213-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2" />
            </svg>
            <span className="u-screen-reader-text">Instagram</span>
          </a>
        </li> */}
      </ul>
      {/* end s-intro__social */}

      <div className="s-intro__content-media">
        <img
          src="/images/intro-bg.webp"
          alt="Intro Background"
          width={1920}
          height={1080}
          srcSet="/images/intro-bg.webp 1x, /images/intro-bg.webp 2x"
          data-priority
        />
      </div>
      {/* s-intro__content-media */}

      {/* <div className="s-intro__btn-download">
        <Link className="btn btn--stroke" href="#0">
          Get My CV
        </Link>
      </div> */}
      {/* end s-intro__btn-download */}

      <div className="s-intro__scroll-down">
        <a href="#about" className="smoothscroll">
          <div className="scroll-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(0,0,0,1)"
            >
              <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" />
            </svg>
          </div>
          <span className="scroll-text u-screen-reader-text">Scroll Down</span>
        </a>
      </div>
      {/* s-intro__scroll-down */}
    </section>
  );
}

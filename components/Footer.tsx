"use client";

import Link from "next/link";
import React from "react";
import { FaArrowUp, FaArrowUp19 } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer" className="s-footer target-section">
      <div className="row">
        <div className="column lg-12">
          <div className="section-header light-on-dark" data-num="05">
            <h2 className="text-display-title">Get In Touch.</h2>
          </div>
        </div>
      </div>

      <div className="row s-footer__content">
        <div className="column xl-6 md-12 s-footer__block s-footer__about">
          <p className="attention-getter">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            illum quasi facere libero, fugiat laboriosam possimus amet
            consectetur adipisicing elit reprehenderit eveniet tempore quisquam
            ipsa id esse. Facere ratione dignissimos. */}
          </p>
        </div>

        <div className="column xl-6 md-12 s-footer__block s-footer__site-links">
          <div className="row">
            <div className="column xl-4 lg-5 md-6 tab-12">
              <h5>Follow Me</h5>
              <ul className="link-list">
                <li>
                  <Link
                    href="https://www.facebook.com/michaelantoni.dev"
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </li>
                {/* <li>
                  <Link href="#0">Twitter</Link>
                </li> */}
                {/* <li>
                  <a href="#0">Instagram</a>
                </li> */}
                <li>
                  <Link
                    href="https://www.linkedin.com/in/m-antoni"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/m-antoni" target="_blank">
                    Github
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column xl-6 md-6 tab-12">
              <h5>Contact Me</h5>
              <ul className="link-list">
                <li>
                  <a href="mailto:#0">michaelantoni.tech@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+639278798439">+63 927 879 8439</a>
                </li>
                <li>
                  <a href="tel:+639278798439">+63 939 420 1796 </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row s-footer__buttons">
        <div className="column xl-6 tab-12">
          <a
            href="mailto:#michaelantoni.tech@gmail.com"
            className="btn btn--primary btn--large u-fullwidth"
          >
            Message Me
          </a>
        </div>

        <div className="column xl-6 tab-12">
          <Link
            href="/michael_antoni_cv.pdf"
            className="btn btn--stroke btn--large u-fullwidth"
          >
            Get My CV
          </Link>
        </div>
      </div>

      {/* <div className="row s-footer__bottom">
        <div className="column xl-6 lg-12">
          <ul className="s-footer__social social-list">
            <li>
              <a href="#0" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#0" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809..." />
                </svg>
              </a>
            </li>
            <li>
              <a href="#0" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z" />
                  <circle cx="16.806" cy="7.207" r="1.078" />
                  <path d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632..." />
                </svg>
              </a>
            </li>
            <li>
              <a href="#0" aria-label="Dribbble">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64..." />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="column xl-6 lg-12">
          <p className="ss-copyright">
            <span>© Copyright Hudson 2023</span>
            <span>
              Design by <a href="https://styleshout.com/">StyleShout</a>{" "}
              Distribution by <a href="https://themewagon.com">ThemeWagon</a>
            </span>
          </p>
        </div>
      </div> */}

      <div className="ss-go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
          </svg>
        </a>
        <span>Back To Top</span>
      </div>
    </footer>
  );
}

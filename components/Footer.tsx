"use client";

import Link from "next/link";
import EmailModal from "./ui/EmailModal";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const test = () => {
    // toast.success("🦄 Wow so easy!");
  };

  return (
    <footer className="s-footer target-section">
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
            onClick={() => setIsOpen(true)}
            className="btn btn--primary btn--large u-fullwidth"
          >
            Message Me
          </a>
        </div>

        <div className="column xl-6 tab-12">
          <Link
            onClick={() => test()}
            href="/michaelantoni_cv.pdf"
            className="btn btn--stroke btn--large u-fullwidth"
          >
            Get My CV
          </Link>
        </div>
      </div>

      <div id="footer" className="ss-go-top">
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

      <EmailModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </footer>
  );
}

import ProjectGallery from "./ProjectPhotoGallery";

export default function Projects() {
  return (
    <>
      <section id="projects" className="s-works target-section">
        <div className="row">
          <div className="column xl-12">
            <div className="section-header" data-num="03">
              <h2 className="text-display-title">Personal Projects.</h2>
            </div>
            {/* end section-header */}
          </div>
        </div>

        <div className="row folio-entries">
          {/* Entry 1 */}
          <div className="column entry">
            <a
              href="/images/folio/datacenter/datacenter.jpg"
              className="entry__link glightbox"
              data-gallery="datacenter"
              data-glightbox="title: Data Center v2 - (MERN Stack + TypeScript); description: .entry__desc-01"
            >
              <div className="entry__thumb">
                <img
                  src="/images/folio/datacenter.jpg"
                  srcSet="/images/folio/datacenter.jpg 1x, /images/folio/datacenter@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">Data Center v2</h4>
                <div className="entry__cat">MERN Stack - TypeSCript</div>
              </div>
            </a>

            <div className="glightbox-desc entry__desc-01">
              <p>
                A full-stack data visualization dashboard built with React
                (TypeScript) and Node.js (Express + TypeScript). The client app
                fetches data from a custom Node API, which in turn retrieves
                data from a third-party API, processes it, and stores the
                results in MongoDB..{" "}
                <a
                  href="https://github.com/m-antoni/datacenter-api-vr2"
                  target="_blank"
                >
                  Project Link
                </a>
              </p>
            </div>
          </div>
          {/* end entry */}

          {/* Entry 2 */}
          <div className="column entry">
            <a
              href="/images/folio/eshop/eshop.jpg"
              data-gallery="eshop"
              className="entry__link glightbox"
              data-glightbox="title: eshop - (MERN Stack + Redux, Paypal sandbox); description: .entry__desc-02"
            >
              <div className="entry__thumb">
                <img
                  src="/images/folio/eshop.jpg"
                  srcSet="/images/folio/eshop.jpg 1x, /images/folio/eshop@2x.jpg"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">e-shop</h4>
                <div className="entry__cat">
                  MERN Stack + Redux for state management
                </div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-02">
              <p>
                A complete eCommerce web application built using the MERN stack
                (MongoDB, Express, React + Redux, Node.js). This project
                includes a secure backend API and frontend interface where users
                can browse products, add items to their cart, and complete
                purchases using PayPal or COD.{" "}
                <a
                  href="https://github.com/m-antoni/e-commerce-mern-api"
                  target="_blank"
                >
                  Project Link
                </a>
              </p>
            </div>
          </div>
          <ProjectGallery category="eshop" />
          {/* end entry */}

          {/* Entry 3 */}
          <div className="column entry">
            <a
              href="/images/folio/quiz/quiz.jpg"
              className="entry__link glightbox"
              data-gallery="quiz"
              data-glightbox="title: Quizp App - (React, React Hooks Firebase, Firebase Auth).; description: .entry__desc-03"
            >
              <div className="entry__thumb">
                <img
                  src="/images/folio/quiz.jpg"
                  srcSet="/images/folio/quiz.jpg 1x, /images/folio/quiz@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">Quizp App</h4>
                <div className="entry__cat">
                  React, React Hooks Firebase, Firebase Auth
                </div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-03">
              <p>
                A simple and interactive quiz application built with React,
                Redux, and Firebase Firestore. The app dynamically fetches
                questions from the Open Trivia Database (opentdb.com) and stores
                player scores in Firestore. .{" "}
                <a href="https://github.com/m-antoni/quiz-app" target="_blank">
                  Project Link
                </a>
              </p>
            </div>
          </div>
          <ProjectGallery category="quiz" />
          {/* end entry */}

          {/* Entry 4 */}
          <div className="column entry">
            <a
              href="/images/folio/weather/weather.jpg"
              className="entry__link glightbox"
              data-gallery="weather"
              data-glightbox="title: Weather App - React Hooks, Context API with openweathermap API; description: .entry__desc-04"
            >
              <div className="entry__thumb">
                <img
                  src="/images/folio/weather.jpg"
                  srcSet="/images/folio/weather.jpg 1x, /images/folio/weather@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">Weather App</h4>
                <div className="entry__cat">
                  {" "}
                  React Hooks, Context API with openweathermap API
                </div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-04">
              <p>
                A pretty simple and straightforward weather forecast application
                built with React and the React Context API. It allows users to
                search for weather forecasts by city or country and even compare
                two weather forecasts side-by-side. This project integrates with
                the OpenWeatherMap API to fetch live and accurate weather data..{" "}
                <a
                  href="https://github.com/m-antoni/weather-app"
                  target="_blank"
                >
                  Project Link
                </a>
              </p>
            </div>
          </div>
          <ProjectGallery category="weather" />
          {/* end entry */}

          {/* Entry 5 */}
          <div className="column entry">
            <a
              href="/images/folio/login/login.jpg"
              className="entry__link glightbox"
              data-gallery="login"
              data-glightbox="title: Attendance Monitoring System using QRCode - (Laravel and MySQL); description: .entry__desc-05"
            >
              <div className="entry__thumb">
                <img
                  src="/images/folio/login.jpg"
                  srcSet="/images/folio/login.jpg 1x, /images/folio/login@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">
                  Attendance Monitoring System using QRCode
                </h4>
                <div className="entry__cat">Laravel and MySQL</div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-05">
              <p>
                This project was created on October 2020 as a school project.
                It’s a simple attendance monitoring system built with Laravel
                and MySQL that uses QR codes for employee and intern time
                tracking..{" "}
                <a href="https://github.com/m-antoni/login" target="_blank">
                  Project Link
                </a>
              </p>
            </div>
          </div>
          <ProjectGallery category="login" />
          {/* end entry */}

          {/* Entry 6 */}
          <div className="column entry">
            <a
              href="/images/folio/learn/learn.jpg"
              data-gallery="learn"
              className="entry__link glightbox"
              data-glightbox="title: Advanced and Interactive Learning System - Microsoft Fox Pro 9.0; description: .entry__desc-06"
            >
              <div className="entry__thumb">
                <img
                  src="/images/folio/learn.jpg"
                  srcSet="/images/folio/learn.jpg 1x, /images/folio/learn@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">
                  Advanced and Interactive Learning System
                </h4>
                <div className="entry__cat">Microsoft Visual Fox Pro</div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-06">
              <p>
                This project was a school project developed in 2016 as part of
                an academic requirement focused on creating an educational and
                interactive learning environment for students using Microsoft
                Visual FoxPro..{" "}
                <a
                  href="https://github.com/m-antoni/learning_system"
                  target="_blank"
                >
                  Project Link
                </a>
              </p>
            </div>
          </div>
          <ProjectGallery category="learn" />
          {/* end entry */}
        </div>
        {/* folio entries */}

        {/* Testimonials */}
        {/* end s-testimonials */}
      </section>
      {/* end s-works */}
    </>
  );
}

export default function Works() {
  return (
    <>
      {/* # works ================================================== */}
      <section id="works" className="s-works target-section">
        <div className="row">
          <div className="column xl-12">
            <div className="section-header" data-num="02">
              <h2 className="text-display-title">Selected Works.</h2>
            </div>
            {/* end section-header */}
          </div>
        </div>

        <div className="row folio-entries">
          {/* Entry 1 */}
          <div className="column entry">
            <a
              href="images/folio/gallery/g-datacenter.jpg"
              className="entry__link glightbox"
              data-glightbox="title: Data Center v2 - (MERN Stack + TypeScript); description: .entry__desc-01"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/datacenter.jpg"
                  srcSet="images/folio/datacenter.jpg 1x, images/folio/datacenter@2x.jpg 2x"
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
              href="images/folio/gallery/g-eshop.jpg"
              className="entry__link glightbox"
              data-glightbox="title: eshop - (MERN Stack + Redux, Paypal sandbox); description: .entry__desc-02"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/eshop.jpg"
                  srcSet="images/folio/eshop.jpg 1x, images/folio/eshop@2x.jpg 2x"
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
                purchases using PayPal or COD..{" "}
                <a
                  href="https://github.com/m-antoni/e-commerce-mern-api"
                  target="_blank"
                >
                  Project Link
                </a>
                .
              </p>
            </div>
          </div>
          {/* end entry */}

          {/* Entry 3 */}
          <div className="column entry">
            <a
              href="images/folio/gallery/g-quiz.jpg"
              className="entry__link glightbox"
              data-glightbox="title: Quizp App - (React, React Hooks Firebase, Firebase Auth); description: .entry__desc-03"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/quiz.jpg"
                  srcSet="images/folio/quiz.jpg 1x, images/folio/quiz@2x.jpg 2x"
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
                .
              </p>
            </div>
          </div>
          {/* end entry */}

          {/* Entry 4 */}
          <div className="column entry">
            <a
              href="images/folio/gallery/g-weather.jpg"
              className="entry__link glightbox"
              data-glightbox="title: Weather App - React Hooks, Context API with openweathermap API; description: .entry__desc-04"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/weather.jpg"
                  srcSet="images/folio/weather.jpg 1x, images/folio/weather@2x.jpg 2x"
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
                .
              </p>
            </div>
          </div>
          {/* end entry */}

          {/* Entry 5 */}
          <div className="column entry">
            <a
              href="images/folio/gallery/g-login.jpg"
              className="entry__link glightbox"
              data-glightbox="title: Attendance Monitoring System using QRCode - (Laravel and MySQL); description: .entry__desc-05"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/login.jpg"
                  srcSet="images/folio/login.jpg 1x, images/folio/login@2x.jpg 2x"
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
                .
              </p>
            </div>
          </div>
          {/* end entry */}

          {/* Entry 6 */}
          <div className="column entry">
            <a
              href="images/folio/gallery/g-is.jpg"
              className="entry__link glightbox"
              data-glightbox="title: Is; description: .entry__desc-06"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/is.jpg"
                  srcSet="images/folio/is.jpg 1x, images/folio/is@2x.jpg 2x"
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
                LThis project was a school project developed in 2016 as part of
                an academic requirement focused on creating an educational and
                interactive learning environment for students using Microsoft
                Visual FoxPro..{" "}
                <a
                  href="https://github.com/m-antoni/learning_system"
                  target="_blank"
                >
                  Project Link
                </a>
                .
              </p>
            </div>
          </div>
          {/* end entry */}
        </div>
        {/* folio entries */}

        {/* Testimonials */}
        <div id="testimonials" className="row s-testimonials target-section">
          <div className="column xl-12">
            <h3 className="s-testimonials__header">Testimonials</h3>

            <div className="swiper-container s-testimonials__slider">
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="s-testimonials__slide swiper-slide">
                  <div className="s-testimonials__author">
                    <img
                      src="images/avatars/alejandro.jpg"
                      alt="Author image"
                      className="s-testimonials__avatar"
                    />
                    <cite className="s-testimonials__cite">
                      <strong>Alejandro Mendoza</strong>
                      <span>Network Infrastructure Engineer at Indra</span>
                    </cite>
                  </div>
                  <p className="text-justify">
                    He has a strong work ethic and always makes sure to finish
                    what he starts, no matter how challenging the task. I’m
                    really proud of him for achieving his goal of becoming a
                    programmer it’s something he worked hard for and truly
                    deserves.
                  </p>
                </div>

                {/* end s-testimonials__slide */}

                {/* Slide 2 */}
                <div className="s-testimonials__slide swiper-slide">
                  <div className="s-testimonials__author">
                    <img
                      src="images/avatars/jimar.jpeg"
                      alt="Author image"
                      className="s-testimonials__avatar"
                    />
                    <cite className="s-testimonials__cite">
                      <strong>Jimar Zape</strong>
                      <span>Principal Software Engineer at Nokkel</span>
                    </cite>
                  </div>
                  <p className="text-justify">
                    Michael is a very industrious and hardworking colleague that
                    I had ever work with. He has a passion in programming which
                    causing him to improve his skills rapidly.
                  </p>
                </div>
                {/* end s-testimonials__slide */}

                {/* Slide 3 */}
                <div className="s-testimonials__slide swiper-slide">
                  <div className="s-testimonials__author">
                    <img
                      src="images/avatars/andrew.jpg"
                      alt="Author image"
                      className="s-testimonials__avatar"
                    />
                    <cite className="s-testimonials__cite">
                      <strong>Al Andrew Paul Beltran</strong>
                      <span>Full stack Developer at Maya</span>
                    </cite>
                  </div>
                  <p className="text-justify">
                    Mike is a hardworking full stack engineer and he can easily
                    adopt with the new technology and he has an eagerness to
                    learn and also has a capability to handle stress and any
                    complicated project situation.
                  </p>
                </div>
                {/* end s-testimonials__slide */}

                {/* Slide 3 */}
                <div className="s-testimonials__slide swiper-slide">
                  <div className="s-testimonials__author">
                    <img
                      src="images/avatars/marvin.jpg"
                      alt="Author image"
                      className="s-testimonials__avatar"
                    />
                    <cite className="s-testimonials__cite">
                      <strong>John Marvin Roque</strong>
                      <span>Senior Front-end Developer at Global Payments</span>
                    </cite>
                  </div>
                  <p className="text-justify">
                    Michael is my go-to programmer. Whenever I need
                    clarification in programming I make sure to reach out to
                    him, as he is the best at it. He has been collaborating with
                    me for a couple of years, and on top of being a great leader
                    and classmate, he is also an easy-going person. I definitely
                    recommend Michael to any job.
                  </p>
                </div>
                {/* end s-testimonials__slide */}

                {/* Slide 4 */}
                <div className="s-testimonials__slide swiper-slide">
                  <div className="s-testimonials__author">
                    <img
                      src="images/avatars/neil.jpg"
                      alt="Author image"
                      className="s-testimonials__avatar"
                    />
                    <cite className="s-testimonials__cite">
                      <strong>Neil James Tony Perdigon</strong>
                      <span>Software Engineer at Accenture</span>
                    </cite>
                  </div>
                  <p className="text-justify">
                    Michael is like my mentor when it comes to programming and
                    life lessons, he's my go-to people when i need some advice
                    or career direction. he's very passionate about what he's
                    doing right now that makes his surroundings follow his
                    directions.
                  </p>
                </div>
                {/* end s-testimonials__slide */}
              </div>
              {/* end swiper-wrapper */}

              <div className="swiper-pagination"></div>
            </div>
            {/* end swiper-container */}
          </div>
          {/* end column */}
        </div>
        {/* end s-testimonials */}
      </section>
      {/* end s-works */}
    </>
  );
}

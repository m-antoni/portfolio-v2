export default function Works() {
  return (
    <>
      {/* # works ================================================== */}
      <section
        id="testimonials"
        className="target-section mt-10"
        style={{ marginTop: "200px" }}
      >
        <div className="row">
          <div className="column xl-12">
            <div className="section-header" data-num="03">
              <h2 className="text-display-title">Testimonials.</h2>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div
          className="row s-testimonials target-section"
          style={{ marginTop: "-150px" }}
        >
          <div className="column xl-12">
            <h3 className="s-testimonials__header"></h3>

            <div className="swiper-container s-testimonials__slider">
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="s-testimonials__slide swiper-slide">
                  <div className="s-testimonials__author">
                    <img
                      src="/images/avatars/alejandro.jpg"
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
                      src="/images/avatars/jimar.jpeg"
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
                      src="/images/avatars/andrew.jpg"
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
                      src="/images/avatars/marvin.jpg"
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
                      src="/images/avatars/neil.jpg"
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

// components/Works.tsx
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
              href="images/folio/gallery/g-turban.jpg"
              className="entry__link glightbox"
              data-glightbox="title: White Knit Cap; description: .entry__desc-01"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/white_turban.jpg"
                  srcSet="images/folio/white_turban.jpg 1x, images/folio/white_turban@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">White Knit Cap</h4>
                <div className="entry__cat">Frontend Design</div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-01">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore ipsum iste soluta fugiat, impedit illum ducimus
                deleniti facilis ab, tempora non! Nisi, tempora provident.{" "}
                <a href="https://www.behance.net/">Project Link</a>.
              </p>
            </div>
          </div>
          {/* end entry */}

          {/* Entry 2 */}
          <div className="column entry">
            <a
              href="images/folio/gallery/g-woodcraft.jpg"
              className="entry__link glightbox"
              data-glightbox="title: WoodCraft; description: .entry__desc-02"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/woodcraft.jpg"
                  srcSet="images/folio/woodcraft.jpg 1x, images/folio/woodcraft@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">WoodCraft</h4>
                <div className="entry__cat">Product Design</div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-02">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore ipsum iste soluta fugiat, impedit illum ducimus
                deleniti facilis ab, tempora non! Nisi, tempora provident.{" "}
                <a href="https://www.behance.net/">Project Link</a>.
              </p>
            </div>
          </div>
          {/* end entry */}

          {/* Entry 3 */}
          <div className="column entry">
            <a
              href="images/folio/gallery/g-tulips.jpg"
              className="entry__link glightbox"
              data-glightbox="title: Caffeine & Tulips; description: .entry__desc-03"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/caffeine_and_tulips.jpg"
                  srcSet="images/folio/caffeine_and_tulips.jpg 1x, images/folio/caffeine_and_tulips@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">Caffeine & Tulips</h4>
                <div className="entry__cat">Brand Identity</div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-03">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore ipsum iste soluta fugiat, impedit illum ducimus
                deleniti facilis ab, tempora non! Nisi, tempora provident.{" "}
                <a href="https://www.behance.net/">Project Link</a>.
              </p>
            </div>
          </div>
          {/* end entry */}

          {/* Entry 4 */}
          <div className="column entry">
            <a
              href="images/folio/gallery/g-grayscale.jpg"
              className="entry__link glightbox"
              data-glightbox="title: Grayscale; description: .entry__desc-04"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/grayscale.jpg"
                  srcSet="images/folio/grayscale.jpg 1x, images/folio/grayscale@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">Grayscale</h4>
                <div className="entry__cat">Product Design</div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-04">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore ipsum iste soluta fugiat, impedit illum ducimus
                deleniti facilis ab, tempora non! Nisi, tempora provident.{" "}
                <a href="https://www.behance.net/">Project Link</a>.
              </p>
            </div>
          </div>
          {/* end entry */}

          {/* Entry 5 */}
          <div className="column entry">
            <a
              href="images/folio/gallery/g-lamp.jpg"
              className="entry__link glightbox"
              data-glightbox="title: The Lamp; description: .entry__desc-05"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/lamp.jpg"
                  srcSet="images/folio/lamp.jpg 1x, images/folio/lamp@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">The Lamp</h4>
                <div className="entry__cat">Brand Identity</div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-05">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore ipsum iste soluta fugiat, impedit illum ducimus
                deleniti facilis ab, tempora non! Nisi, tempora provident.{" "}
                <a href="https://www.behance.net/">Project Link</a>.
              </p>
            </div>
          </div>
          {/* end entry */}

          {/* Entry 6 */}
          <div className="column entry">
            <a
              href="images/folio/gallery/g-tropical.jpg"
              className="entry__link glightbox"
              data-glightbox="title: Tropical; description: .entry__desc-06"
            >
              <div className="entry__thumb">
                <img
                  src="images/folio/tropical.jpg"
                  srcSet="images/folio/tropical.jpg 1x, images/folio/tropical@2x.jpg 2x"
                  alt=""
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">Tropical</h4>
                <div className="entry__cat">Frontend Design</div>
              </div>
            </a>
            <div className="glightbox-desc entry__desc-06">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore ipsum iste soluta fugiat, impedit illum ducimus
                deleniti facilis ab, tempora non! Nisi, tempora provident.{" "}
                <a href="https://www.behance.net/">Project Link</a>.
              </p>
            </div>
          </div>
          {/* end entry */}
        </div>
        {/* folio entries */}

        {/* Testimonials */}
        <div className="row s-testimonials">
          <div className="column xl-12">
            <h3 className="s-testimonials__header">Testimonials</h3>

            <div className="swiper-container s-testimonials__slider">
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="s-testimonials__slide swiper-slide">
                  <div className="s-testimonials__author">
                    <img
                      src="images/avatars/jimar.jpeg"
                      alt="Author image"
                      className="s-testimonials__avatar"
                    />
                    <cite className="s-testimonials__cite">
                      <strong>Jimar Zape</strong>
                      <span>Principal Software Engineer @Nokkel</span>
                    </cite>
                  </div>
                  <p className="text-justify">
                    Michael is a very industrious and hardworking colleague that
                    I had ever work with. He has a passion in programming which
                    causing him to improve his skills rapidly.
                  </p>
                </div>
                {/* end s-testimonials__slide */}

                {/* Slide 2 */}
                <div className="s-testimonials__slide swiper-slide">
                  <div className="s-testimonials__author">
                    <img
                      src="images/avatars/alejandro.png"
                      alt="Author image"
                      className="s-testimonials__avatar"
                    />
                    <cite className="s-testimonials__cite">
                      <strong>Alejandro Mendoza</strong>
                      <span>Network Infrastructure Engineer @Indra</span>
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

                {/* Slide 3 */}
                <div className="s-testimonials__slide swiper-slide">
                  <div className="s-testimonials__author">
                    <img
                      src="images/avatars/marvin.png"
                      alt="Author image"
                      className="s-testimonials__avatar"
                    />
                    <cite className="s-testimonials__cite">
                      <strong>John Marvin Roque</strong>
                      <span>Senior Front-end Developer @Global Payments</span>
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
                      src="images/avatars/user-06.jpg"
                      alt="Author image"
                      className="s-testimonials__avatar"
                    />
                    <cite className="s-testimonials__cite">
                      <strong>Henry Ford</strong>
                      <span>Ford Motor Co.</span>
                    </cite>
                  </div>
                  <p>
                    Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc
                    ac augue. Fusce vel dui. In ac felis quis tortor malesuada
                    pretium. Curabitur vestibulum aliquam leo. Qui sed at
                    corrupti expedita voluptas odit. Nihil ea quia nesciunt.
                    Ducimus aut sed ipsam.
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

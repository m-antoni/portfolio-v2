export default function Header() {
  return (
    // <!-- s-header -->
    <header className="s-header ">
      <div className="row s-header__inner">
        <div className="s-header__block">
          <div className="s-header__logo">
            <a className="logo smoothscroll" href="#intro">
              {/* <img src="/images/logo.svg" alt="Homepage" /> */}
              <span className="text-white">{`Michael`}</span>
            </a>
          </div>

          <a className="s-header__menu-toggle" href="#0">
            <span>Menu</span>
          </a>
        </div>
        {/* end s-header__block */}

        <nav className="s-header__nav">
          <ul className="s-header__menu-links">
            <li className="current">
              <a className="smoothscroll" href="#intro">
                Intro
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#works">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#footer">
                Contact
              </a>
            </li>
          </ul>
          {/* s-header__menu-links */}
        </nav>
        {/* end s-header__nav */}
      </div>
      {/* end s-header__inner */}
    </header>
    // <!-- end s-header -->
  );
}

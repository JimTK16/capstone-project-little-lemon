import { Link } from 'react-router'
import { HashLink } from 'react-router-hash-link'
import Logo from '../../assets/Logo.svg'
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg karla-text">
      <div className="container">
        <Link className="navbar-brand d-none d-lg-block" to={'/'}>
          <img src={Logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navItems"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navItems">
          <ul className="navbar-nav ms-lg-auto d-flex align-items-end">
            <li className="nav-item">
              <Link
                to={'/'}
                className="nav-link"
                href="#home"
                aria-label="home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={'/about'}
                className="nav-link"
                href="#about"
                aria-label="about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                className="nav-link"
                to={'/#specials'}
                aria-label="specials"
              >
                Specials
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                className="nav-link"
                to={'/#testimonials'}
                aria-label="testimonials"
              >
                Testimonials
              </HashLink>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn responsive-bg p-0  rounded-5 nav-link px-lg-4 py-lg-2"
              >
                Order Online
              </button>
            </li>
          </ul>
        </div>
        <div className="ms-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 46 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.7273 27.2381V33.5238H46V37.7143H39.7273V44H35.5455V37.7143H29.2727V33.5238H35.5455V27.2381H39.7273ZM23 23.0476C20.7 23.0476 18.8182 24.9333 18.8182 27.2381C18.8182 29.5429 20.7 31.4286 23 31.4286C25.3 31.4286 27.1818 29.5429 27.1818 27.2381C27.1818 24.9333 25.3 23.0476 23 23.0476ZM25.8227 39.8095H9.40909C7.48545 39.8095 5.87545 38.5105 5.39455 36.7505L0.0836363 17.3276C-7.45058e-08 17.139 0 16.9505 0 16.7619C0 15.6095 0.940909 14.6667 2.09091 14.6667H12.1064L21.2645 0.942857C21.6618 0.335238 22.3309 0 23 0C23.6691 0 24.3382 0.335238 24.7355 0.921905L33.8936 14.6667H43.9091C45.0591 14.6667 46 15.6095 46 16.7619L45.9373 17.3276L43.9091 24.7448C42.7173 24.0952 41.3791 23.5505 39.9782 23.2781L41.1909 18.8571H4.83L9.40909 35.619H25.0909C25.0909 37.0857 25.3627 38.4895 25.8227 39.8095ZM17.1455 14.6667H28.8545L23 5.86667L17.1455 14.6667Z"
              fill="#495E57"
            />
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

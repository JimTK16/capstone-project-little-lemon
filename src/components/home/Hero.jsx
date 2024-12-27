import { Link } from 'react-router'
import heroImg from '../../assets/restaurant chef B.jpg'

const Hero = () => {
  return (
    <section className=" p-4 bg-secondary">
      <div className=" container">
        <div className=" row align-items-center">
          <div className="col col-xs-12 col-lg-6">
            <h1 className="text-primary fs-1 mb-0 lh-1">Little Lemon</h1>
            <h3 className="text-white fs-2 lh-1">Chicago</h3>
            <p className="text-light karla-text fs-4">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="btn btn-primary karla-text fw-bold rounded-5 fs-4">
              <Link
                to="/booking"
                className="text-dark text-decoration-none"
                tabIndex={-1}
              >
                Reserve a table
              </Link>
            </button>
          </div>

          <div className="d-none d-md-block col-md-6">
            <img src={heroImg} alt="hero image" className="rounded img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero

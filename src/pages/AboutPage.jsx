import aboutImg from '../assets/Mario and Adrian A.jpg'
import NavBar from '../components/common/NavBar'
const AboutPage = () => {
  return (
    <>
      <NavBar />
      <section className="mt-5 karla-text">
        <div className="container">
          <h1 className="text-center text-uppercase fs-2 fw-bolder mb-4">
            Our Story
          </h1>
          <div className="row">
            <div className="col-md-6">
              <img src={aboutImg} alt="About Us Image" className="img-fluid" />
            </div>
            <div className="col-md-6 fs-3 lh-2 d-flex flex-column justify-content-center ">
              <p>
                Welcome to{' '}
                <span className="fw-bold text-primary">Little Lemon</span>,
                where we&apos;re passionate about serving up delicious food and
                exceptional service. Our team is dedicated to providing a warm
                and welcoming atmosphere that makes you feel right at home.
              </p>
              <p>
                We&apos;re committed to using only the freshest ingredients and
                traditional cooking methods to bring you the best flavors from
                around the world. From our signature dishes to our daily
                specials, there&apos;s something for everyone to enjoy.
              </p>
              <p>
                Whether you&apos;re a foodie, a family, or just looking for a
                quick bite, we invite you to come and experience the [Your
                Restaurant Name] difference. We can&apos;t wait to serve you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AboutPage

import Footer from '../components/common/Footer'
import NavBar from '../components/common/NavBar'
import Hero from '../components/home/Hero'
import MenuCategories from '../components/home/MenuCategories'
import Specials from '../components/home/Specials'
import Testimonials from '../components/home/Testimonials'
const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <MenuCategories />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  )
}
export default HomePage

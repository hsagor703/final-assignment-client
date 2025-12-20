// import Plants from '../../components/Home/Plants'
import AboutSection from '../../components/HomeSections/About'
import HeroBanner from '../../components/HomeSections/Banner'
import ContactCTA from '../../components/HomeSections/ContactCTA'
import FAQ from '../../components/HomeSections/FAQ'
import FeaturesShowcase from '../../components/HomeSections/FeaturesShowcase'
import HowItWorks from '../../components/HomeSections/HowItWorks'
import Packages from '../../components/HomeSections/Packages'
import TestimonialsStats from '../../components/HomeSections/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <AboutSection/>
      <Packages/>
      <FeaturesShowcase/>
      <TestimonialsStats/>
      <HowItWorks/>
      <FAQ/>
      <ContactCTA/>
    </div>
  )
}

export default Home

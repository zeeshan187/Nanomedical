import React from 'react'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import OurMission from './components/OurMission'
import OurVission from './components/OurVission'
import ServicesCards from './components/ServicesCards'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className='mt-[60px]'>
      <HeroSection />
      <AboutUs />
      <OurMission />
      <OurVission />
      <ServicesCards />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home

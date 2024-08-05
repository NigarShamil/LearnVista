import React from 'react'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Banner from './components/banner/Banner'
import Subscribe from './components/subscribe/Subscribe'
import SecondBanner from './components/banner/SecondBanner'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-white text-dark'>
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <SecondBanner />
      <Footer/>
    </div>
  )
}

export default App


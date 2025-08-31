import React from 'react'
import Logo from './components/Logo/Logo'
import { LogIn } from 'lucide-react'
import LoginBtn from './components/LoginBtn'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar/Navbar'
import HeroCarousel from './components/HeroSection/HeroCarousel'
import Hero from './components/HeroSection/Hero'
import QuickAction from './components/HomeActionBtns/QuickAction'
import DeliverySolutions from './components/DeliverySolutions/DeliverySolutions'
import ShopAndShipSection from './components/ShopAndShip/ShopAndShipSection'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import GetInTouch from './components/GetInTouch/GetInTouch'
import WhatsTrending from './components/WhatsTrending/WhatsTrending'
import AwardsSection from './components/Awards/AwardsSection'
import GlobalReach from './components/GlobalReach/GlobalReach'
import FooterSection from './components/Footer/FooterSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <QuickAction/>
      <DeliverySolutions/>
      <ShopAndShipSection/>
      <WhyChooseUs/>
      <GetInTouch/>
      <WhatsTrending/>
      <AwardsSection/>
      <GlobalReach/>
      <FooterSection/>
      <ToastContainer/>
    </div>
  )
}

export default App

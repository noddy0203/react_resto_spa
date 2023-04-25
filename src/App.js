import React from 'react'
import "./App.css"
import Navbar from './components/navbar/Navbar'
import {
  AboutUs,
  Chef,
  FindUS,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu
} from "./containers/index"

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Header/>
         <AboutUs/>
        <SpecialMenu/>
       <Chef/>
        {/* <Intro/>
        <Laurels/>
        <Gallery/>
        <FindUS/>
        <Footer/> */}
      </div>
    </>
  )
}

export default App

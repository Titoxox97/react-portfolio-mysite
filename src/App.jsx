import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Writing from './components/writing/writing'
import Portfolio from './components/portfolio/Portfolio'
import Interests from './components/interests/interests'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Writing />
      <Portfolio />
      <Interests />
      <Contact />
      <Footer />

    </>
  )
}

export default App



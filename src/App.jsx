import React, { useLayoutEffect } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Published from './components/published/Published'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

// Blocks that rise into view as you scroll.
const REVEAL = 'section > h5, section > h2, section > .container'

const App = () => {
  useLayoutEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return
    if (typeof IntersectionObserver === 'undefined') return

    const nodes = Array.from(document.querySelectorAll(REVEAL))
    if (!nodes.length) return

    // The hidden state is added here rather than in the markup, so if this
    // effect never runs the content is simply visible.
    nodes.forEach((n) => n.classList.add('js-reveal'))

    const show = (n) => n.classList.add('is-in')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target)
            observer.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    nodes.forEach((n) => observer.observe(n))

    // Safety net. Strips the hiding class rather than adding the shown one,
    // because if the transition timeline is frozen (throttled tab, reduced
    // power mode, headless browser) adding .is-in leaves opacity stuck at 0.
    // Removing .js-reveal drops both the opacity and the transition.
    const reveal = () => nodes.forEach((n) => n.classList.remove('js-reveal'))
    const failsafe = setTimeout(reveal, 1500)
    const onPrint = reveal
    window.addEventListener('beforeprint', onPrint)

    return () => {
      observer.disconnect()
      clearTimeout(failsafe)
      window.removeEventListener('beforeprint', onPrint)
    }
  }, [])

  return (
    <>
      <Header />
      <Published />
      <Nav />
      <About />
      <Experience />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App

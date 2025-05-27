// src/App.jsx
import './App.css'

import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Equipment from './components/Equipment'
import Promos from './components/Promos'
import Testimonials from './components/Testimonials'
import Tips from './components/Tips'
import Contact from './components/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import './components/FloatingWhatsApp.css'

function App() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Services />
        <Equipment />
        <Promos />
        <Testimonials />
        <Tips />
        <Contact />
      </div>
      <FloatingWhatsApp />
    </>
  )
}

export default App

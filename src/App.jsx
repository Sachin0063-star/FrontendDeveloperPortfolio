import {React,useEffect} from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'


function App() {
  useEffect(()=>{
    Aos.init({
      duration:1000.
    })
  },[])
  return (
  <main className='bg-gray-950'>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>

  </main>
  )
}

export default App

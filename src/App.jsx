import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Leadership from './components/Leadership'
import Services from './components/Services'
import Footer from './components/Footer'
import ModeToggle from './components/ModeToggle'
import CustomCursor from './components/CustomCursor'
import Resume from './components/Resume'
import Preloader from './components/Preloader'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function App() {
  const [mode, setMode] = useState('dev') // 'dev' or 'creative'
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader mode={mode} key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen transition-colors duration-700 ${mode === 'dev' ? 'bg-[#f4f4f5]' : 'bg-[#fafafa]'}`}>
        <CustomCursor />
        <header className={`fixed top-0 left-0 w-full z-50 px-2 lg:px-4 ${mode === 'dev' ? 'bg-[#f5f5f7]/80' : 'bg-[#fafafa]/80'} backdrop-blur-md`}>
          <div className="max-w-[1024px] mx-auto flex items-center gap-4 h-[44px]">
            <Navbar mode={mode} />
            <ModeToggle mode={mode} setMode={setMode} />
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-24 pb-16 md:pb-24 space-y-12 md:space-y-20">
          <section id="about">
            <Hero mode={mode} />
          </section>

          {mode === 'dev' && (
            <>
              <About />
              <Experience mode={mode} />
              <Projects mode={mode} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Skills mode={mode} />
                </motion.div>
              </AnimatePresence>
              <Resume mode={mode} />
            </>
          )}

          {mode === 'creative' && (
            <>
              <Projects mode={mode} />
              <Services mode={mode} />
            </>
          )}

          <section id="contact">
            <Footer mode={mode} />
          </section>
        </main>
      </div>
    </>
  )
}

export default App

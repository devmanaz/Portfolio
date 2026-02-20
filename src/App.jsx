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
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function App() {
  const [mode, setMode] = useState('dev') // 'dev' or 'creative'

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
    <div className={`min-h-screen transition-colors duration-700 ${mode === 'dev' ? 'bg-[#f4f4f5]' : 'bg-[#fafafa]'}`}>
      <CustomCursor />
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f4f4f5]/80 backdrop-blur-lg border-b border-black/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6">
          <Navbar mode={mode} />
          <ModeToggle mode={mode} setMode={setMode} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-24 space-y-20">
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
  )
}

export default App

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Footer from './components/Footer'
import ModeToggle from './components/ModeToggle'

function App() {
  const [mode, setMode] = useState('dev') // 'dev' or 'creative'

  return (
    <div className={`min-h-screen transition-colors duration-700 ${mode === 'dev' ? 'bg-[#050505]' : 'bg-[#0a0a0f]'}`}>
      <div className="fixed top-6 right-6 z-50">
        <ModeToggle mode={mode} setMode={setMode} />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        <Hero mode={mode} />

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

        <Experience mode={mode} />
        <Projects mode={mode} />
        <Leadership mode={mode} />
        <Footer mode={mode} />
      </main>
    </div>
  )
}

export default App

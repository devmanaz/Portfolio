import { motion } from 'framer-motion'

const Hero = ({ mode }) => {
    return (
        <section id="hero" className="min-h-[calc(100vh-160px)] flex flex-col justify-center items-start">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full py-20"
            >
                <div className="space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-accent-cyan font-mono text-lg"
                    >
                        {mode === 'dev' ? '> Hello, I am' : 'Welcome to the creative space of'}
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
                    >
                        Devamanas <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">S</span>
                    </motion.h1>
                </div>
                <p className="text-xl md:text-3xl font-light text-gray-400 max-w-2xl leading-relaxed">
                    {mode === 'dev'
                        ? 'Computer Science student empowering innovation through code, logic, and visual storytelling..'
                        : 'Capturing moments and crafting experiences. Community Director at BRIK, pushing the boundaries of visual impact.'}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-accent-cyan text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all cursor-pointer"
                    >
                        View Work
                    </motion.a>
                    {mode === 'dev' && (
                        <motion.a
                            href="#resume"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all cursor-pointer text-white font-medium"
                        >
                            Download CV
                        </motion.a>
                    )}
                </div>
            </motion.div>
        </section>
    )
}

export default Hero

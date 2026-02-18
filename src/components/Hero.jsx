import { motion } from 'framer-motion'

const Hero = ({ mode }) => {
    return (
        <section className="min-h-[70vh] flex flex-col justify-center items-start pt-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-accent-cyan font-mono mb-4">
                    {mode === 'dev' ? '> Hello, I am' : 'Welcome to the creative space of'}
                </h2>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
                    Devamanas <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">S</span>
                </h1>
                <p className="text-xl md:text-3xl font-light text-gray-400 max-w-2xl leading-relaxed">
                    {mode === 'dev'
                        ? 'Empowering Innovation through Code and Creativity. Computer Science student blending logic with visual storytelling.'
                        : 'Capturing moments and crafting experiences. Community Director at BRIK, pushing the boundaries of visual impact.'}
                </p>

                <div className="mt-10 flex gap-4">
                    <button className="px-8 py-3 bg-accent-cyan text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all">
                        View Work
                    </button>
                    <button className="px-8 py-3 border border-gray-700 rounded-full hover:bg-white/5 transition-all">
                        Download CV
                    </button>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero

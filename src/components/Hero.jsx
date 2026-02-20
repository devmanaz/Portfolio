import { motion } from 'framer-motion'

const Hero = ({ mode }) => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-start pt-20 md:pt-24 -mt-16 md:-mt-24">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full py-6 md:py-10"
            >
                <div className="space-y-3 md:space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`${mode === 'dev' ? 'text-accent-blue' : 'text-accent-red'} font-mono text-sm md:text-lg`}
                    >
                        {mode === 'dev' ? '> Hello, I am' : 'Welcome to the creative space of'}
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6"
                    >
                        Devamanas S
                    </motion.h1>
                </div>
                <p className="text-base sm:text-xl md:text-3xl font-light text-gray-600 max-w-2xl leading-relaxed">
                    {mode === 'dev'
                        ? 'Computer Science student empowering innovation through code, logic, and visual storytelling..'
                        : 'Capturing moments and crafting experiences. Community Director at BRIK, pushing the boundaries of visual impact.'}
                </p>

                <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 md:px-8 py-3 ${mode === 'dev' ? 'bg-accent-blue' : 'bg-accent-red'} text-white font-bold rounded-full hover:shadow-lg transition-all cursor-pointer text-sm md:text-base`}
                    >
                        View Work
                    </motion.a>
                    <motion.a
                        href="#resume"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 border border-black/20 rounded-full hover:bg-black/5 transition-all cursor-pointer text-black font-medium text-sm md:text-base"
                    >
                        Download CV
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero

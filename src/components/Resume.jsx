import { motion } from 'framer-motion'

const CV_URL = 'https://drive.google.com/uc?export=download&id=1HDVqJ2HaOTx92u_p2hoRtLEa1lfXzxcg'

const Resume = () => {

    const handleDownload = (e) => {
        e.stopPropagation()
        const link = document.createElement('a')
        link.href = CV_URL
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="resume" className="scroll-mt-32 py-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
                {/* Signature Name */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-5xl md:text-7xl font-['Ms_Madi'] text-black"
                >
                    Devamanas S
                </motion.h2>

                {/* Black Pill Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                >
                    <button
                        onClick={handleDownload}
                        className="px-12 py-5 bg-black text-white text-xl font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                        Download Resume
                    </button>
                </motion.div>

                {/* Description Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl px-6"
                >
                    Computer Science student & innovator driven by an end-to-end approach where design, functionality, and strategy align. Dedicated to building digital solutions that drive engagement, scalability, and tangible impact.
                </motion.p>
            </div>
        </section>
    )
}

export default Resume

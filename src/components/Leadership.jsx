import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

const Leadership = ({ mode }) => {
    return (
        <section id="resume" className="space-y-10 scroll-mt-32">


            <div className="flex flex-col items-center justify-center text-center space-y-12 py-12">
                {/* Signature Name */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    className="relative"
                >
                    <h2 className="text-5xl md:text-7xl font-['Ms_Madi'] text-white select-none">
                        Devamanas S
                    </h2>
                </motion.div>

                {/* Pill Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-4 bg-white text-black font-bold rounded-full text-xl shadow-2xl hover:bg-white/90 transition-all flex items-center gap-2"
                    >
                        Download Resume
                    </motion.a>
                </motion.div>

                {/* Centered Bio Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed font-medium"
                >
                    Computer Science student & innovator driven by an end-to-end approach where design, functionality, and strategy align.
                    Dedicated to building digital solutions that drive engagement, scalability, and tangible impact.
                </motion.p>
            </div>
        </section>
    )
}

export default Leadership

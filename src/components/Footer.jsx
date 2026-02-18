import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = ({ mode }) => {
    return (
        <footer id="contact" className="pt-24 pb-12 border-t border-white/5 scroll-mt-32">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                {/* Left Side: Copy */}
                <div className="space-y-6 max-w-2xl text-left">
                    <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="text-3xl md:text-5xl font-bold tracking-tight"
                    >
                        Let's work together
                    </motion.h4>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
                        Whether you want to discuss a new project, a creative collaboration, or just talk tech—my inbox is always open.
                    </p>
                </div>

                {/* Right Side: Actions */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 flex-wrap">
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/devmanaz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-cyan hover:text-black transition-all"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/devamanas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-cyan hover:text-black transition-all"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:devamanashere@gmail.com"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-cyan hover:text-black transition-all"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    <motion.a
                        href="mailto:devamanashere@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-3 bg-white text-black font-bold rounded-full text-lg hover:bg-accent-cyan transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] whitespace-nowrap"
                    >
                        Contact Now
                    </motion.a>
                </div>
            </div>

            <div className="pt-24 flex justify-center items-center">
                <p className="text-xs text-gray-500 font-mono text-center">
                    © {new Date().getFullYear()} Devamanas S. Designed with <span className="text-red-500">❤️</span> and Code.
                </p>
            </div>
        </footer>
    )
}

export default Footer

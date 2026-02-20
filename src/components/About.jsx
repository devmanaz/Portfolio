import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about-section" className="scroll-mt-32">
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
                {/* Left Side: Category Label */}
                <div className="shrink-0">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="text-2xl md:text-3xl font-bold font-mono tracking-wider leading-none"
                    >
                        About
                    </motion.h3>
                </div>

                {/* Right Side: Typographic Content */}
                <motion.div
                    className="flex-1 space-y-8 max-w-4xl pt-[2px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.215, 0.61, 0.355, 1]
                    }}
                >
                    <div className="space-y-6">
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            I am a Computer Science student who is passionate about building innovative solutions to daily problems. While I am skilled in marketing and persuasion, communication is another strength I possess. Idea pitching and designing are my other talents.
                        </p>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            I have designed websites for various personal as well as social causes and even for organizations like NSS and IEEE. I am currently working on a project which can bring a huge positive change in the healthcare industry.
                        </p>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            Cybersecurity enthusiast exploring ethical hacking, network security, and digital threat defense. Eager to learn and grow in the cyber world.
                        </p>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            I follow an end-to-end development approach where design, functionality, and strategy align to drive engagement, scalability, and tangible business results.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About

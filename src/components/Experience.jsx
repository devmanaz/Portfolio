import { motion } from 'framer-motion'

const Experience = () => {
    const experiences = [
        {
            role: 'Community Director',
            company: 'BRIK (NGO)',
            period: '2023 - Present',
            desc: 'Leading community initiatives and events. Mentoring students and driving creative outreach programs.',
        },
        {
            role: 'Digital Marketing Intern',
            company: 'Roldant Globalz',
            period: '2023',
            desc: 'Developed social media strategies and managed content creation for global clients.',
        },
        {
            role: 'IEEE Media Lead',
            company: 'IEEE Student Branch',
            period: '2023 - 2024',
            desc: 'Orchestrating visual storytelling and branding for major tech summits. Managing a team of 10+ creatives.',
        },
        {
            role: 'NSS Volunteer Secretary',
            company: 'National Service Scheme',
            period: '2022 - 2024',
            desc: 'Coordinating community service projects and social impact initiatives. Leading student volunteer teams.',
        }
    ]

    return (
        <section id="experience" className="space-y-10 scroll-mt-32 pt-10">
            <div className="mb-10">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    className="text-2xl md:text-3xl font-bold font-mono tracking-wider"
                >
                    Experience
                </motion.h3>
            </div>

            <div className="space-y-10">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.215, 0.61, 0.355, 1]
                        }}
                        className="space-y-6 group cursor-default"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm md:text-base font-mono border-b border-white/20 pb-4 transition-all duration-300 group-hover:border-white/40">
                            <span className="w-48 text-gray-400 group-hover:text-white transition-all duration-300">{exp.period}</span>
                            <span className="flex-1 text-white uppercase tracking-wider group-hover:font-bold transition-all duration-300">{exp.role}</span>
                            <span className="text-gray-400 uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-all duration-300">
                                <span className="h-4 w-[1px] bg-white/20 hidden md:block group-hover:bg-white/40"></span>
                                {exp.company}
                            </span>
                        </div>
                        <p className="text-base md:text-lg leading-relaxed max-w-5xl text-gray-400 group-hover:text-white/90 transition-all duration-300">
                            {exp.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience

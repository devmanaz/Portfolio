import { motion } from 'framer-motion'

const Experience = ({ mode }) => {
    const experiences = [
        {
            role: 'Community Director',
            company: 'BRIK (NGO)',
            period: '2023 - Present',
            desc: 'Leading community initiatives and events. Mentoring students and driving creative outreach programs.',
            impact: '500+ students impacted'
        },
        {
            role: 'Digital Marketing Intern',
            company: 'Roldant Globalz',
            period: '2023',
            desc: 'Developed social media strategies and managed content creation for global clients.',
            impact: '20% growth in engagement'
        }
    ]

    return (
        <section id="experience" className="space-y-12">
            <h3 className="text-3xl font-bold">Professional <span className="text-accent-purple">Journey</span></h3>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-8 group"
                    >
                        <div className="relative z-10">
                            <div className="w-6 h-6 rounded-full bg-accent-purple outline outline-8 outline-dark group-hover:scale-125 transition-transform" />
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex-1 hover:border-accent-purple/50 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold">{exp.role}</h4>
                                    <p className="text-accent-purple font-mono">{exp.company}</p>
                                </div>
                                <span className="text-gray-500 bg-white/5 px-4 py-1 rounded-full text-sm">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {exp.desc}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-accent-neon font-bold">
                                <span className="w-2 h-2 rounded-full bg-accent-neon animate-pulse" />
                                {exp.impact}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience

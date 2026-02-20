import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'

const Projects = ({ mode }) => {
    const projects = [
        {
            title: 'Eventique',
            desc: 'A digital platform streamlines event management, automating processes, enhancing efficiency, boosting attendance, and ensuring accuracy.',
            status: 'Ongoing',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
            live: '#',
            code: '#'
        },
        {
            title: 'MunchMate',
            desc: 'A canteen app to reduce waiting queues, allowing customers to pre-book meals for faster service and efficiency.',
            status: 'Ongoing',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
            live: '#',
            code: '#'
        }
    ]

    return (
        <section id="projects" className="space-y-12 scroll-mt-32">
            <div className="mb-12">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    className="text-2xl md:text-3xl font-bold font-mono tracking-wider"
                >
                    My Works
                </motion.h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.215, 0.61, 0.355, 1]
                        }}
                        viewport={{ once: false, margin: "-50px" }}
                        className={`flex flex-col bg-[#fcfcfc] border border-black/5 rounded-[2rem] p-6 ${mode === 'dev' ? 'hover:border-accent-blue/30' : 'hover:border-accent-red/30'} transition-all group shadow-sm hover:shadow-md`}
                    >
                        <h4 className="text-xl font-bold mb-4">{project.title}</h4>

                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-dark/50">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="flex-1 space-y-4">
                            <p className="text-gray-600 text-sm leading-relaxed min-h-[4rem]">
                                {project.desc}
                            </p>

                            {project.status && (
                                <p className="text-[#111111] text-sm font-semibold">
                                    Status : <span className="font-normal text-gray-600">{project.status}</span>
                                </p>
                            )}

                            <div className="flex gap-3 pt-2">
                                <a
                                    href={project.live}
                                    className={`flex-1 py-2 px-4 border ${mode === 'dev' ? 'border-accent-blue hover:bg-accent-blue' : 'border-accent-red hover:bg-accent-red'} text-[#111111] rounded-xl text-center text-sm font-medium hover:text-white transition-all`}
                                >
                                    Live
                                </a>
                                <a
                                    href={project.code}
                                    className={`flex-1 py-2 px-4 border ${mode === 'dev' ? 'border-accent-blue hover:bg-accent-blue' : 'border-accent-red hover:bg-accent-red'} text-[#111111] rounded-xl text-center text-sm font-medium hover:text-white transition-all`}
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects

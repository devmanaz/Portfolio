import { motion } from 'framer-motion'
import { Github, ExternalLink, Box } from 'lucide-react'

const Projects = ({ mode }) => {
    const projects = [
        {
            title: 'Scenario-Driven Containerized Sandbox',
            desc: 'A robust, isolated environment for running and testing code scenarios in real-time. Built with scalability and security in mind.',
            stack: ['Node.js', 'React', 'Express.js', 'Docker'],
            image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=1200',
            github: '#',
            demo: '#'
        }
    ]

    return (
        <section id="projects" className="space-y-12">
            <div className="flex justify-between items-end">
                <h3 className="text-3xl font-bold">Featured <span className="text-accent-cyan">Creations</span></h3>
                <a href="#" className="text-accent-cyan hover:underline font-mono">View all projects {`->`}</a>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-accent-cyan/50 transition-colors">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-8">
                                <div className="flex gap-4">
                                    <Box className="text-accent-cyan" />
                                    <span className="font-mono text-xs uppercase tracking-widest text-white/50">Technical Project</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-3xl font-bold group-hover:text-accent-cyan transition-colors">{project.title}</h4>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.desc}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {project.stack.map(tech => (
                                    <span key={tech} className="bg-white/5 border border-white/10 px-4 py-1 rounded-full text-xs font-mono text-gray-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-6 pt-4">
                                <a href={project.github} className="flex items-center gap-2 text-white hover:text-accent-cyan transition-colors">
                                    <Github size={20} />
                                    <span>Codebase</span>
                                </a>
                                <a href={project.demo} className="flex items-center gap-2 text-white hover:text-accent-cyan transition-colors">
                                    <ExternalLink size={20} />
                                    <span>Live Sandbox</span>
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

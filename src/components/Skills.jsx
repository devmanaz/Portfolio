import { motion } from 'framer-motion'
import { Database, Code2, Layout, Camera, Palette, Share2 } from 'lucide-react'

const Skills = ({ mode }) => {
    const devSkills = [
        { title: 'Full Stack', icon: <Code2 className="text-accent-blue" />, desc: 'React, Node.js, Express.js', size: 'col-span-2 row-span-2' },
        { title: 'Databases', icon: <Database className="text-accent-red" />, desc: 'SQL & NoSQL', size: 'col-span-1 row-span-1' },
        { title: 'Languages', icon: <div className="text-accent-neon font-mono">C, Java</div>, desc: 'Core Programming', size: 'col-span-1 row-span-2' },
        { title: 'Python', icon: <div className="text-yellow-400 font-mono">Py</div>, desc: 'Automation & Data', size: 'col-span-1 row-span-1' },
    ]

    const creativeSkills = [
        { title: 'Photography', icon: <Camera className="text-accent-red" />, desc: 'Visual Storytelling', size: 'col-span-2 row-span-2' },
        { title: 'Adobe Suite', icon: <Palette className="text-accent-blue" />, desc: 'Ps, Pr, Lr, Ai', size: 'col-span-1 row-span-1' },
        { title: 'Digital Marketing', icon: <Share2 className="text-accent-neon" />, desc: 'Content Strategy', size: 'col-span-1 row-span-2' },
        { title: 'UI/UX Design', icon: <Layout className="text-pink-500" />, desc: 'Figma & Prototyping', size: 'col-span-1 row-span-1' },
    ]

    const skills = mode === 'dev' ? devSkills : creativeSkills

    return (
        <section id="skills" className="space-y-12 scroll-mt-32">
            <div className="mb-12">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    className="text-2xl md:text-3xl font-bold font-mono tracking-wider"
                >
                    Toolbox
                </motion.h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[100px] md:auto-rows-[120px]">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.215, 0.61, 0.355, 1]
                        }}
                        whileHover={{ scale: 1.02 }}
                        className={`bg-black/5 border border-black/5 rounded-3xl p-6 flex flex-col justify-between hover:bg-black/10 transition-colors ${skill.size}`}
                    >
                        <div className="flex items-center justify-start mb-4">
                            {skill.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">{skill.title}</h4>
                            <p className="text-sm text-gray-600">{skill.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills

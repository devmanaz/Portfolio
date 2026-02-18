import { motion } from 'framer-motion'
import { Database, Code2, Layout, Camera, Palette, Share2 } from 'lucide-react'

const Skills = ({ mode }) => {
    const devSkills = [
        { title: 'Full Stack', icon: <Code2 className="text-accent-cyan" />, desc: 'React, Node.js, Express.js', size: 'col-span-2 row-span-2' },
        { title: 'Databases', icon: <Database className="text-accent-purple" />, desc: 'SQL & NoSQL', size: 'col-span-1 row-span-1' },
        { title: 'Languages', icon: <div className="text-accent-neon font-mono">C, Java</div>, desc: 'Core Programming', size: 'col-span-1 row-span-2' },
        { title: 'Python', icon: <div className="text-yellow-400 font-mono">Py</div>, desc: 'Automation & Data', size: 'col-span-1 row-span-1' },
    ]

    const creativeSkills = [
        { title: 'Photography', icon: <Camera className="text-accent-purple" />, desc: 'Visual Storytelling', size: 'col-span-2 row-span-2' },
        { title: 'Adobe Suite', icon: <Palette className="text-accent-cyan" />, desc: 'Ps, Pr, Lr, Ai', size: 'col-span-1 row-span-1' },
        { title: 'Digital Marketing', icon: <Share2 className="text-accent-neon" />, desc: 'Content Strategy', size: 'col-span-1 row-span-2' },
        { title: 'UI/UX Design', icon: <Layout className="text-pink-500" />, desc: 'Figma & Prototyping', size: 'col-span-1 row-span-1' },
    ]

    const skills = mode === 'dev' ? devSkills : creativeSkills

    return (
        <section id="skills" className="space-y-8">
            <h3 className="text-3xl font-bold mb-8">Technical & Creative <span className="text-accent-cyan">Toolbox</span></h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px]">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.title}
                        whileHover={{ scale: 1.02 }}
                        className={`bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors ${skill.size}`}
                    >
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
                            {skill.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">{skill.title}</h4>
                            <p className="text-sm text-gray-500">{skill.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills

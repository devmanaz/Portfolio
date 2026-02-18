import { motion } from 'framer-motion'
import { Award, Zap, Heart } from 'lucide-react'

const Leadership = ({ mode }) => {
    const roles = [
        {
            title: 'IEEE Media Lead',
            org: 'IEEE Student Branch',
            icon: <Zap className="text-orange-400" />,
            desc: 'Orchestrating visual storytelling and branding for major tech summits. Managing a team of 10+ creatives.',
            color: 'border-orange-500/20'
        },
        {
            title: 'NSS Volunteer Secretary',
            org: 'National Service Scheme',
            icon: <Heart className="text-red-400" />,
            desc: 'Coordinating community service projects and social impact initiatives. Leading student volunteer teams.',
            color: 'border-red-500/20'
        }
    ]

    return (
        <section id="leadership" className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h3 className="text-3xl font-bold">Leadership & <span className="text-accent-neon">Impact</span></h3>
                <p className="text-gray-500">Going beyond the code to lead communities and drive social change through dedicated service and creative direction.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {roles.map((role) => (
                    <motion.div
                        key={role.title}
                        whileHover={{ y: -10 }}
                        className={`p-10 rounded-3xl bg-white/5 border ${role.color} hover:bg-white/10 transition-all cursor-default relative overflow-hidden group`}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            {role.icon}
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                            {role.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-2">{role.title}</h4>
                        <p className="text-accent-neon font-mono text-sm mb-6">{role.org}</p>
                        <p className="text-gray-400 leading-relaxed">
                            {role.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Community Impact Counter */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12">
                <div className="text-center border-r border-white/10 last:border-0">
                    <div className="text-4xl font-bold text-white mb-2">10+</div>
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-mono">Events Led</p>
                </div>
                <div className="text-center border-r border-white/10 last:border-0">
                    <div className="text-4xl font-bold text-white mb-2">500+</div>
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-mono">Students Mentored</p>
                </div>
                <div className="text-center border-r border-white/10 last:border-0 col-span-2 md:col-span-1">
                    <div className="text-4xl font-bold text-white mb-2">25+</div>
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-mono">Creative Projects</p>
                </div>
            </div>
        </section>
    )
}

export default Leadership

import { motion } from 'framer-motion'
import { Camera, Video, Palette, Mail } from 'lucide-react'

const Services = ({ mode }) => {
    const services = [
        {
            title: 'Photography',
            icon: <Camera className="text-accent-red" size={32} />,
            desc: 'Professional photography services including event coverage, portraits, and product shoots.'
        },
        {
            title: 'Videography',
            icon: <Video className={`${mode === 'dev' ? 'text-accent-blue' : 'text-accent-red'}`} size={32} />,
            desc: 'Cinematic video production, editing, and storytelling for brands and individuals.'
        },
        {
            title: 'Graphic Design',
            icon: <Palette className={`${mode === 'dev' ? 'text-accent-blue' : 'text-accent-red'}`} size={32} />,
            desc: 'Creative visual designs, branding, and social media content creation.'
        }
    ]

    return (
        <section id="services" className="space-y-12 scroll-mt-32">
            <div className="mb-12">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    className="text-2xl md:text-3xl font-bold font-mono tracking-wider"
                >
                    Services
                </motion.h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-3xl bg-black/5 border border-black/5 hover:border-accent-red/50 transition-all"
                    >
                        <div className="mb-6">{service.icon}</div>
                        <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Services

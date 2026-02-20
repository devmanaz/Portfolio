import { motion } from 'framer-motion'

const Navbar = ({ mode }) => {
    const devItems = [
        { name: 'About', href: '#about-section' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ]

    const creativeItems = [
        { name: 'Works', href: '#projects' },
        { name: 'Service', href: '#services' },
        { name: 'Contact', href: '#contact' }
    ]

    const navItems = mode === 'dev' ? devItems : creativeItems

    return (
        <ul className="flex gap-4 md:gap-6 font-mono">
            {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ y: -2 }}>
                    <a
                        href={item.href}
                        className={`text-black/70 ${mode === 'dev' ? 'hover:text-accent-blue' : 'hover:text-accent-red'} text-[10px] md:text-sm transition-colors tracking-widest uppercase whitespace-nowrap`}
                    >
                        {item.name}
                    </a>
                </motion.li>
            ))}
        </ul>
    )
}

export default Navbar

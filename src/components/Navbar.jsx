import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ mode }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const devItems = [
        { name: 'About', href: '#about' },
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
    // Force dev theme (black text) for both modes as requested
    const textColor = 'text-black/80 hover:text-black'
    const borderColor = 'border-black/10'

    return (
        <nav className={`w-full flex items-center justify-between text-[11px] md:text-[13px] font-sans tracking-wide text-black`}>
            {/* Logo */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center h-[44px] opacity-80 hover:opacity-100 transition-opacity"
            >
                <img
                    src="https://i.postimg.cc/q4HsmLLR/Dev-LOGO.png"
                    alt="Dev Logo"
                    className="h-5 w-auto object-contain"
                />
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 mx-4 lg:mx-8">
                {navItems.map(item => (
                    <a key={item.name} href={item.href} className={`transition-opacity ${textColor}`}>
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Mobile Hamburger View */}
            <div className="flex md:hidden items-center ml-auto">
                <button onClick={() => setMenuOpen(!menuOpen)} className={`transition-opacity ${textColor}`}>
                    {menuOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`absolute top-full left-0 w-full overflow-hidden flex flex-col px-4 ${mode === 'dev' ? 'bg-[#f5f5f7]' : 'bg-[#fafafa]'} md:hidden z-50 ${borderColor} border-t`}
                    >
                        <div className="py-4 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`text-sm tracking-widest uppercase transition-opacity border-b ${borderColor} pb-2 last:border-0 ${textColor}`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar

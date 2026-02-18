import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = ({ mode }) => {
    return (
        <footer className="pt-24 pb-12 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h4 className="text-3xl font-bold">Let's <span className="text-accent-cyan">Connect</span></h4>
                    <p className="text-gray-400 max-w-sm">
                        Whether you want to discuss a new project, a creative collaboration, or just talk tech—my inbox is always open.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-cyan hover:text-black transition-all">
                            <Github size={22} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-cyan hover:text-black transition-all">
                            <Linkedin size={22} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-cyan hover:text-black transition-all">
                            <Twitter size={22} />
                        </a>
                        <a href="mailto:contact@devamanas.com" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-cyan hover:text-black transition-all">
                            <Mail size={22} />
                        </a>
                    </div>
                </div>

                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
                    <h5 className="font-bold flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-neon shadow-[0_0_10px_#39ff14]" />
                        Available for new opportunities
                    </h5>
                    <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-accent-cyan transition-colors">
                        Send a Message
                    </button>
                    <p className="text-center text-xs text-gray-500 font-mono">
                        © {new Date().getFullYear()} Devamanas S. Designed with <span className="text-red-500">❤️</span> and Code.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

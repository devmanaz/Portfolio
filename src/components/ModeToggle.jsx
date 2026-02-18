import { Terminal, Camera } from 'lucide-react'

const ModeToggle = ({ mode, setMode }) => {
    return (
        <div className="flex bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-2xl">
            <button
                onClick={() => setMode('dev')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${mode === 'dev'
                        ? 'bg-accent-cyan text-black font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
            >
                <Terminal size={18} />
                <span className="text-sm">Developer</span>
            </button>
            <button
                onClick={() => setMode('creative')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${mode === 'creative'
                        ? 'bg-accent-purple text-white font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
            >
                <Camera size={18} />
                <span className="text-sm">Creative</span>
            </button>
        </div>
    )
}

export default ModeToggle

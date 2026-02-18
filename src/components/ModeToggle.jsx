import { Terminal, Camera } from 'lucide-react'

const ModeToggle = ({ mode, setMode }) => {
    return (
        <div className="flex bg-white/5 backdrop-blur-md p-0.5 rounded-full border border-white/10 shadow-2xl font-mono">
            <button
                onClick={() => setMode('dev')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${mode === 'dev'
                        ? 'bg-accent-cyan text-black font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
            >
                <Terminal size={14} />
                <span className="text-[10px] uppercase tracking-tighter">Dev</span>
            </button>
            <button
                onClick={() => setMode('creative')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${mode === 'creative'
                        ? 'bg-accent-purple text-white font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
            >
                <Camera size={14} />
                <span className="text-[10px] uppercase tracking-tighter">Creative</span>
            </button>
        </div>
    )
}

export default ModeToggle

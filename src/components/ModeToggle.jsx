import { Terminal, Camera } from 'lucide-react'

const ModeToggle = ({ mode, setMode }) => {
    return (
        <div className="flex bg-black/5 backdrop-blur-md p-0.5 rounded-full border border-black/10 shadow-lg font-mono">
            <button
                onClick={() => setMode('dev')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${mode === 'dev'
                    ? 'bg-accent-blue text-white font-bold shadow-md'
                    : 'text-gray-600 hover:text-black'
                    }`}
            >
                <Terminal size={14} />
                <span className="text-[10px] uppercase tracking-tighter">Dev</span>
            </button>
            <button
                onClick={() => setMode('creative')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${mode === 'creative'
                    ? 'bg-accent-red text-white font-bold shadow-md'
                    : 'text-gray-600 hover:text-black'
                    }`}
            >
                <Camera size={14} />
                <span className="text-[10px] uppercase tracking-tighter">Creative</span>
            </button>
        </div>
    )
}

export default ModeToggle

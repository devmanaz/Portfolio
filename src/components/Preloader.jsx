import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Preloader = ({ onComplete, mode }) => {
    const text1 = 'Think. Design. Build.'
    const text2 = 'Portfolio 2026'
    const [displayedText, setDisplayedText] = useState('')
    const [progress, setProgress] = useState(0)
    const [isPhaseTwo, setIsPhaseTwo] = useState(false)

    useEffect(() => {
        let i = 0
        const totalChars = text1.length + text2.length

        const interval = setInterval(() => {
            if (i <= text1.length) {
                // Typing phrase 1
                setDisplayedText(text1.slice(0, i))
            } else if (i <= text1.length + text2.length) {
                // Switch to phrase 2
                if (i === text1.length + 1) {
                    setIsPhaseTwo(true)
                }
                setDisplayedText(text2.slice(0, i - text1.length))
            }

            setProgress((i / totalChars) * 100)
            i++

            if (i > totalChars) {
                clearInterval(interval)
                setTimeout(() => {
                    onComplete()
                }, 800)
            }
        }, 80) // speed of typing
        return () => clearInterval(interval)
    }, [onComplete])

    const bgColor = mode === 'dev' ? 'bg-[#f4f4f5]' : 'bg-[#fafafa]'
    const textColor = 'text-black'

    return (
        <motion.div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center font-sans ${bgColor} ${textColor}`}
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2 h-10 justify-center">
                    {!isPhaseTwo ? (
                        <span className="text-lg md:text-2xl font-mono tracking-wider flex items-center">
                            {displayedText}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="w-[2px] h-5 md:h-6 bg-black ml-1 inline-block"
                            />
                        </span>
                    ) : (
                        <span className="text-xl md:text-3xl font-bold font-sans tracking-tight flex items-center">
                            {displayedText}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="w-[3px] h-6 md:h-8 bg-black ml-1 inline-block"
                            />
                        </span>
                    )}
                </div>

                {/* Progress bar */}
                <div className="w-48 md:w-64 h-[3px] bg-black/10 overflow-hidden relative mt-4 rounded-full">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-black/80 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Preloader

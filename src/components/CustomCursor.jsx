import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    const springConfig = { damping: 25, stiffness: 200 }
    const cursorX = useSpring(0, springConfig)
    const cursorY = useSpring(0, springConfig)

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, .group')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [cursorX, cursorY])

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-blue/80 pointer-events-none z-[9999] hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
                scale: isHovering ? 1.5 : 1,
                backgroundColor: isHovering ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 250 }}
        />
    )
}

export default CustomCursor

import { useRef, useState, useEffect } from 'react'

export default function useLongPress(callback, time = 500) {
    const timer = useRef(null)
    const progressTimer = useRef(null)
    const [isPressing, setIsPressing] = useState(false)
    const [progress, setProgress] = useState(0)

    function handlePressStart() {
        setIsPressing(true)
        setProgress(0)

        const interval = 16 // ~60fps
        const steps = time / interval
        let current = 0

        progressTimer.current = setInterval(() => {
            current++
            setProgress(Math.min((current / steps) * 100, 100))
        }, interval)

        timer.current = setTimeout(() => {
            setIsPressing(false)
            setProgress(0)
            clearInterval(progressTimer.current)
            callback()
        }, time)
    }

    function handlePressEnd() {
        setIsPressing(false)
        setProgress(0)
        clearTimeout(timer.current)
        clearInterval(progressTimer.current)
    }

    return { handlePressStart, handlePressEnd, isPressing, progress }
}
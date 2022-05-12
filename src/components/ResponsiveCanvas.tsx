import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export function ResponsiveCanvas() {
    const { setSize } = useThree()

    useEffect(() => {
        window.addEventListener('resize', onWindowResize, false)
        function onWindowResize() {
            setSize(window.innerWidth, window.innerHeight)
        }
        return () => window.removeEventListener('resize', onWindowResize, false)
    }, [])

    return <></>
}

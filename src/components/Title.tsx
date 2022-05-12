import { Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

export function Title() {
    const { viewport } = useThree()

    const textRef = useRef<any>(null)
    useFrame(state => {
        if (viewport.width < 20) {
            textRef.current.lookAt(0, -5, 10)
            textRef.current.position.set(0, 0, 0)
            return
        }
        textRef.current.lookAt(
            state.mouse.x * state.viewport.width * 0.15,
            state.mouse.y * state.viewport.height * 0.6 - 4,
            10
        )
        textRef.current.position.set(state.mouse.x * 1.3, state.mouse.y * 0.5, 0)
    })

    return (
        <group position={[0, -1, 1]} scale={viewport.width > 20 ? 1 : viewport.width * 0.04}>
            <Text
                ref={textRef}
                fontSize={2}
                color={'white'}
                strokeColor={'cyan'}
                fillOpacity={0}
                strokeWidth={0.02}
                strokeOpacity={1}
                letterSpacing={0.15}
            >
                JOEL ADVING
            </Text>
        </group>
    )
}

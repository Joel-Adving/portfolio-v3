import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { CameraShake, Html, Sparkles } from '@react-three/drei'
import { DepthOfField, EffectComposer, Noise } from '@react-three/postprocessing'
import { MeshTrail } from '../components/MeshTrail'
import { Ground } from '../components/Ground'
import { Title } from '../components/Title'

function ResponsiveCanvas() {
    const { camera, setSize } = useThree()

    useEffect(() => {
        window.addEventListener('resize', onWindowResize, false)

        function onWindowResize() {
            camera.updateProjectionMatrix()
            setSize(window.innerWidth, window.innerHeight)
        }
        return () => window.removeEventListener('resize', onWindowResize, false)
    }, [])

    return <></>
}

export function SceneOne() {
    return (
        <>
            <Suspense fallback={<div className="min-h-screen"></div>}>
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ fov: 70, position: [0, -5, 10], rotation: [-Math.PI * 1.9, 0, 0] }}
                    className="min-h-screen max-w-screen"
                >
                    {/* Scene */}
                    <color attach="background" args={[0, 0, 0]} />
                    <fog attach="fog" args={['black', 0, 40]} />
                    <hemisphereLight args={['cyan', 'cyan']} />

                    {/* Objects */}
                    <Title />
                    <Ground />
                    <MeshTrail />

                    <ResponsiveCanvas />

                    {/* Effects */}
                    <EffectComposer multisampling={0} disableNormalPass={true}>
                        <DepthOfField
                            target={[0, 0, -1.3]}
                            focusDistance={0}
                            focalLength={0.005}
                            bokehScale={2}
                            height={480}
                        />
                        <Noise opacity={0.01} />
                    </EffectComposer>
                    <Sparkles scale={2} position={[-1, -5, 9]} color={'cyan'} size={0.3} count={50} speed={0.1} />
                    <Sparkles scale={2} position={[1, -5, 9]} color={'cyan'} size={0.3} count={50} speed={0.1} />
                    <Sparkles scale={1} position={[0, -4, 9]} color={'cyan'} size={0.3} count={10} speed={0.1} />
                    <Sparkles scale={2} position={[-1, -4, 9]} color={'white'} size={0.3} count={80} speed={0.1} />
                    <Sparkles scale={2} position={[1, -4, 9]} color={'white'} size={0.3} count={80} speed={0.1} />
                    <CameraShake intensity={0.7} />
                </Canvas>
            </Suspense>
        </>
    )
}

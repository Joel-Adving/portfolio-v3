'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { CameraShake, Sparkles } from '@react-three/drei'
import { MeshTrail } from './MeshTrail'
import { Ground } from './Ground'
import { Title } from './Title'
import { ResponsiveCanvas } from './ResponsiveCanvas'
import { useInView } from 'react-intersection-observer'
import { FadeIn } from './FadeIn'
import { useGetGPUTier } from '@/hooks/useGetGPUTier'

const DisableRender = () => useFrame(() => null, 1000)

export default function ThreeScene() {
  const { ref, inView } = useInView()
  const { GPUTier } = useGetGPUTier()

  return (
    <section className="h-screen transition-opacity relative bg-gradient-to-b from-black to-[#001010]">
      {GPUTier && GPUTier <= 1 ? (
        <FadeIn instant={true} delay={0} duration={2}>
          <div className="grid min-h-screen text-center place-content-center">
            <h1 className="transition-all duration-200 font-thin  text-center tracking-[0.2em] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cyan-400">
              JOEL ADVING
            </h1>
          </div>
        </FadeIn>
      ) : (
        <div ref={ref}>
          {inView && (
            <FadeIn className="h-screen" duration={2.5}>
              <Canvas shadows dpr={[1, 2]} camera={{ fov: 70, position: [0, -5, 10], rotation: [-Math.PI * 1.9, 0, 0] }}>
                {!inView && <DisableRender />}
                <ResponsiveCanvas />

                {/* Scene */}
                <color attach="background" args={[0, 0, 0]} />
                <fog attach="fog" args={['black', 0, 40]} />
                <hemisphereLight args={['cyan', 'cyan']} />

                {/* Objects */}
                <Title />
                <Ground />
                <MeshTrail />

                {/* Effects */}
                <Sparkles
                  scale={2}
                  position={[-1, -5, 9]}
                  color={'cyan'}
                  size={0.6}
                  count={20}
                  speed={0.1}
                  matrixWorldAutoUpdate={undefined}
                  getObjectsByProperty={undefined}
                />
                <Sparkles
                  matrixWorldAutoUpdate={undefined}
                  getObjectsByProperty={undefined}
                  scale={2}
                  position={[1, -5, 9]}
                  color={'cyan'}
                  size={0.3}
                  count={20}
                  speed={0.1}
                />
                <Sparkles
                  matrixWorldAutoUpdate={undefined}
                  getObjectsByProperty={undefined}
                  scale={1}
                  position={[0, -4, 9]}
                  color={'cyan'}
                  size={0.3}
                  count={10}
                  speed={0.1}
                />
                <Sparkles
                  matrixWorldAutoUpdate={undefined}
                  getObjectsByProperty={undefined}
                  scale={2}
                  position={[-1, -4, 9]}
                  color={'white'}
                  size={0.6}
                  count={30}
                  speed={0.1}
                />
                <Sparkles
                  matrixWorldAutoUpdate={undefined}
                  getObjectsByProperty={undefined}
                  scale={2}
                  position={[1, -4, 9]}
                  color={'white'}
                  size={0.8}
                  count={30}
                  speed={0.1}
                />
                <CameraShake intensity={0.5} />
              </Canvas>
            </FadeIn>
          )}
        </div>
      )}
    </section>
  )
}

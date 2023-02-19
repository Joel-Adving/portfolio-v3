'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { CameraShake, Loader, Sparkles, useDetectGPU } from '@react-three/drei'
import { DepthOfField, EffectComposer, Noise } from '@react-three/postprocessing'
import { MeshTrail } from './MeshTrail'
import { Ground } from './Ground'
import { Title } from './Title'
import { ResponsiveCanvas } from './ResponsiveCanvas'
import { useInView } from 'react-intersection-observer'
import { FadeIn } from './FadeIn'

const DisableRender = () => useFrame(() => null, 1000)

export function SceneOne() {
  const { ref, inView } = useInView()

  return (
    <div ref={ref}>
      {/* <Suspense fallback={null}> */}
      {inView && (
        <FadeIn className="h-screen" duration={2.5}>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 70, position: [0, -5, 10], rotation: [-Math.PI * 1.9, 0, 0] }}
            // className="h-screen max-w-screen"
          >
            {!inView && <DisableRender />}
            <ResponsiveCanvas />

            {/* Scene */}
            <color attach="background" args={[0, 0, 0]} />
            {/* <fog attach="fog" args={['black', 0, 40]} /> */}
            <hemisphereLight args={['cyan', 'cyan']} />

            {/* Objects */}
            <Title />
            <Ground />
            <MeshTrail />

            {/* Effects */}
            {/* <EffectComposer multisampling={0} disableNormalPass={true}>
              <DepthOfField target={[0, 0, -1.3]} focusDistance={0} focalLength={0.005} bokehScale={2} height={480} />
              <Noise opacity={0.01} />
            </EffectComposer> */}
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
      {/* </Suspense> */}
      {/* <Loader /> */}
    </div>
  )
}

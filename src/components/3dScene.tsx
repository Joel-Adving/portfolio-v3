'use client'

import { FadeIn } from '@/animations/FadeIn'
import { useGetGPUTier } from '@/hooks/useGetGPUTier'
import { SceneOne } from '@/scenes/SceneOne'

export default function ThreeDScene() {
  const { GPUTier, isMobile } = useGetGPUTier()

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
        <SceneOne />
      )}
    </section>
  )
}

'use client'

import { useDetectGPU } from '@react-three/drei'
import { useEffect, useState } from 'react'

export function useGetGPUTier() {
  const [tier, setTier] = useState<number>(1)
  const [isMobile, setIsMobile] = useState<boolean | undefined>(false)
  const GPUTier = useDetectGPU()

  useEffect(() => {
    if (!GPUTier) return
    setTier(GPUTier.tier)
    setIsMobile(GPUTier.isMobile)
  }, [GPUTier])

  return { GPUTier: tier, isMobile }
}

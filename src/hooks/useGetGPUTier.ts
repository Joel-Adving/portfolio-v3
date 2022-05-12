import { useDetectGPU } from '@react-three/drei'
import { useEffect, useState } from 'react'

export function useGetGPUTier() {
    const [tier, setTier] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState<boolean | undefined>(false)
    const GPUTier = useDetectGPU()

    useEffect(() => {
        if (!GPUTier) return
        setTier(GPUTier.tier)
        setIsMobile(GPUTier.isMobile)
        console.log(GPUTier)
    }, [GPUTier])
    return { GPUTier: tier, isMobile }
}

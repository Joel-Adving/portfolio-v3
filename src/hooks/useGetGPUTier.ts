import { useDetectGPU } from '@react-three/drei'
import { useEffect, useState } from 'react'

export function useGetGPUTier() {
    const [tier, setTier] = useState<number | null>(null)
    const GPUTier = useDetectGPU()

    useEffect(() => {
        if (!GPUTier) return
        setTier(GPUTier.tier)
    }, [GPUTier])
    return { tier }
}

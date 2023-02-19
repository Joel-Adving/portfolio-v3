'use client'

import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

export function useSmoothScrollPolyfill() {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])
}

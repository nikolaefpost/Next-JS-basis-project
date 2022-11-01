import { useEffect, useState } from 'react'

interface IuseScrollY {
  scrollY: number
  resetScroll: () => void
}

export const useScrollY = (): IuseScrollY => {
  const isBrowser = typeof window !== 'undefined'
  const [scrollY, setScrollY] = useState<number>(0)

  const handleScroll = () => {
    const currentScrollY = isBrowser ? window.scrollY : 0
    setScrollY(currentScrollY)
  }

  const resetScroll = () => {
    // document.documentElement.scrollTop  = 0;
    window.scrollTo({
      top: 0,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, resetScroll }
}

'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isBrowser = () => typeof window !== 'undefined'

  function scrollToTop() {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {isVisible && (
        <div>
          <button
            onClick={scrollToTop}
            className="fixed bottom-0 right-0 bg-black rounded-s-full px-4 py-2 mr-6 mb-[71px] z-50 items-center text-xs flex gap-2"
          >
            <ArrowUp />
            Voltar ao topo
          </button>
        </div>
      )}
    </>
  )
}

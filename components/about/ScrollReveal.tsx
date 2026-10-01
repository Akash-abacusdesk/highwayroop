'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const TARGETS = '.ab-head,.ab-story,.ab-stats,.ab-mosaic,.ab-milestone,.ab-platform,.ab-units,.ab-caps,.ab-ceo,.ab-leaders,.ab-news-feature,.ab-news-grid'

// Fades the inner-page blocks in as they scroll into view. Anything already on screen
// is left alone, and reduced-motion users get no animation.
export default function ScrollReveal() {
  const path = usePathname()
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      es => es.forEach(e => {
        if (!e.isIntersecting) return
        e.target.classList.add('in')
        io.unobserve(e.target)
      }),
      { threshold: 0.12 },
    )
    document.querySelectorAll(TARGETS).forEach(el => {
      if (el.getBoundingClientRect().top < innerHeight * 0.9) return
      el.classList.add('ab-reveal')
      io.observe(el)
    })
    return () => io.disconnect()
  }, [path])
  return null
}

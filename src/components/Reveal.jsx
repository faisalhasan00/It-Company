import { useEffect, useRef } from 'react'

function Reveal({ children, className = "", id }) {
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <section id={id} className={`reveal ${className}`.trim()} ref={ref}>
      {children}
    </section>
  )
}

export default Reveal

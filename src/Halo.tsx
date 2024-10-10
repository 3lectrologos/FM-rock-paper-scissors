import { ReactNode, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Halo({
  size,
  xOffset,
  enabled,
  children,
}: {
  size: number
  xOffset: number
  enabled: boolean
  children: ReactNode
}) {
  const container = useRef(null)
  const innerRingRef = useRef(null)
  const middleRingRef = useRef(null)
  const outerRingRef = useRef(null)

  useGSAP(
    () => {
      if (!enabled) {
        return
      }

      const duration = 0.1
      gsap.fromTo(
        innerRingRef.current,
        {
          opacity: 0,
        },
        {
          duration,
          opacity: 1,
        }
      )
      gsap.fromTo(
        middleRingRef.current,
        { opacity: 0 },
        {
          delay: duration,
          duration,
          opacity: 1,
        }
      )
      gsap.fromTo(
        outerRingRef.current,
        { opacity: 0 },
        {
          delay: 2 * duration,
          duration,
          opacity: 1,
        }
      )
    },
    { dependencies: [enabled], scope: container }
  )

  return (
    <div className="relative z-0" ref={container}>
      {enabled && (
        <>
          <div
            className="absolute bg-white/5 rounded-full scale-[140%] z-[-1]"
            style={{ top: 0, left: xOffset, width: size, height: size }}
            ref={innerRingRef}
          />
          <div
            className="absolute bg-white/5 rounded-full scale-[190%] z-[-1]"
            style={{ top: 0, left: xOffset, width: size, height: size }}
            ref={middleRingRef}
          />
          <div
            className="absolute bg-white/5 rounded-full scale-[240%] z-[-1]"
            style={{ top: 0, left: xOffset, width: size, height: size }}
            ref={outerRingRef}
          />
        </>
      )}
      {children}
    </div>
  )
}

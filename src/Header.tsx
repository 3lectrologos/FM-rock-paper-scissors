import Logo from '@/icons/Logo.tsx'
import { cn } from '@/lib/utils.ts'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'

export default function Header({
  score,
  className,
}: {
  score: number
  className?: string
}) {
  return (
    <header
      className={cn(
        'w-full max-w-[700px] flex justify-between items-center p-3 pl-6 border-[3px] border-white/30 rounded-[5px]',
        'tablet:py-5 pl-8 pr-6 rounded-[15px]',
        className
      )}
    >
      <Logo className="w-[49px] h-[48px] tablet:w-[110px] tablet:h-[110px]" />
      <Score score={score} />
    </header>
  )
}

function Score({ score }: { score: number }) {
  const scoreRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const [previousScore, setPreviousScore] = useState(score)
  const [scoreDiff, setScoreDiff] = useState(0)
  if (score !== previousScore) {
    setPreviousScore(score)
    setScoreDiff(score - previousScore)
  }

  useGSAP(
    () => {
      console.log(score, previousScore, scoreDiff)

      const duration = 0.1

      gsap.fromTo(
        textRef.current,
        { x: '=', filter: 'blur(0)' },
        {
          duration,
          x: scoreDiff > 0 ? '-=50' : '+=50',
          filter: 'blur(5px)',
        }
      )
      gsap.fromTo(
        textRef.current,
        {
          x: scoreDiff > 0 ? '+=100' : '-=100',
          filter: 'blur(5px)',
        },
        {
          delay: duration,
          duration,
          x: scoreDiff > 0 ? '-=100' : '+=100',
          filter: 'blur(0px)',
        }
      )
    },
    { dependencies: [score] }
  )

  return (
    <div
      className={cn(
        'flex flex-col w-20 rounded-[4px] items-center py-[10px]',
        'bg-gradient-to-t from-[#f3f3f3] to-white',
        '[box-shadow:0_3px_3px_0_rgb(0_0_0_/_0.2)]',
        'overflow-hidden',
        'tablet:w-[150px] tablet:py-4 tablet:rounded-[8px]'
      )}
      ref={scoreRef}
    >
      <span
        className={cn(
          'uppercase text-[10px] text-bluish font-semibold tracking-[1.563px] leading-[normal]',
          'tablet:text-[16px] tablet:tracking-[2.5px]'
        )}
      >
        Score
      </span>
      <span
        className={cn(
          'text-[40px] text-darkgray font-bold leading-[40px]',
          'tablet:text-[64px] tablet:leading-[64px]'
        )}
        ref={textRef}
      >
        {score}
      </span>
    </div>
  )
}

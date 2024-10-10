import { Attack, Result } from '@/types.ts'
import { cn } from '@/lib/utils.ts'
import { Button } from '@/components/ui/button.tsx'
import AttackIcon from '@/icons/AttackIcon.tsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
import { useIsTablet } from '@/use-is-tablet.ts'
import Halo from '@/Halo.tsx'

export default function ResultScreen({
  attack,
  houseAttack,
  result,
  onPlayAgain,
  className,
}: {
  attack: Attack | null
  houseAttack: Attack | null
  result: Result | null
  onPlayAgain: () => void
  className?: string
}) {
  const isTablet = useIsTablet()
  const attackContainerRef = useRef(null)
  const [hasResult, setHasResult] = useState(false)

  useGSAP(
    () => {
      if (result === null) {
        return
      }

      gsap.to(attackContainerRef.current, {
        delay: 0.3,
        duration: 0.25,
        columnGap: isTablet ? 350 : 0,
        onComplete: () => {
          setHasResult(true)
        },
      })
    },
    { dependencies: [result] }
  )

  return (
    <div
      className={cn(
        'relative w-[311px] flex flex-col tablet:w-full tablet:items-center tablet:justify-center',
        className
      )}
    >
      <div
        className={cn(
          'flex justify-between mb-[56px] tablet:mb-0 z-0',
          'tablet:gap-x-16',
          hasResult && 'tablet:gap-[350px]'
        )}
        ref={attackContainerRef}
      >
        <AttackDisplayWithText
          className={cn(result === 'win' && 'z-[-1]')}
          attack={attack}
          text="You picked"
          halo={result === 'win'}
        />
        <AttackDisplayWithText
          className={cn(
            houseAttack === null && 'invisible',
            result === 'lose' && 'z-[-1]'
          )}
          attack={houseAttack}
          text="The house picked"
          halo={result === 'lose'}
        />
      </div>
      <ResultCard
        className={cn(
          result === null && 'invisible',
          isTablet &&
            'absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[25%]'
        )}
        result={result}
        onPlayAgain={onPlayAgain}
      />
    </div>
  )
}

function AttackDisplay({
  attack,
  halo,
}: {
  attack: Attack | null
  halo?: boolean
}) {
  const isTablet = useIsTablet()

  if (attack === null) {
    return (
      <div className="w-[132px] h-[133px] tablet:w-[297px] tablet:h-[299px]">
        <div className="w-[124px] h-[125px] bg-white/10 rounded-full" />
      </div>
    )
  }

  return (
    <Halo
      size={isTablet ? 279 : 124}
      xOffset={isTablet ? 10 : 5}
      enabled={halo ?? false}
    >
      <AttackIcon
        className={cn('w-[132px] h-[133px] tablet:w-[297px] tablet:h-[299px]')}
        attack={attack}
      />
    </Halo>
  )
}

function AttackDisplayWithText({
  attack,
  text,
  halo,
  className,
}: {
  attack: Attack | null
  text: string
  halo?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-y-[17px]',
        'tablet:flex-col-reverse tablet:gap-y-16',
        className
      )}
    >
      <AttackDisplay attack={attack} halo={halo} />
      <span
        className={cn(
          'text-[15px] text-white [text-shadow:_0_3px_3px_rgb(0_0_0_/_0.2)] font-bold leading-[32px] tracking-[1.875px] uppercase',
          'tablet:text-[24px] tablet:tracking-[3px]'
        )}
      >
        {text}
      </span>
    </div>
  )
}

function ResultCard({
  result,
  onPlayAgain,
  className,
}: {
  result: Result | null
  onPlayAgain: () => void
  className?: string
}) {
  const container = useRef(null)
  const text = useRef(null)
  const button = useRef(null)
  const isTablet = useIsTablet()

  useGSAP(
    () => {
      if (result === null) {
        return
      }

      gsap.fromTo(
        text.current,
        {
          opacity: 0,
          scale: 3,
        },
        {
          opacity: 1,
          scale: 1,
          delay: 0.3,
          duration: 0.25,
        }
      )

      gsap.fromTo(
        button.current,
        {
          scale: 0,
          opacity: 0,
          x: isTablet ? 0 : -500,
          y: isTablet ? 500 : 0,
        },
        {
          scale: 1,
          opacity: 1,
          delay: 0.3 + 0.25,
          duration: 0.25,
          x: 0,
          y: 0,
          ease: isTablet ? 'elastic.out(0.75, 1)' : 'elastic.out(1, 0.75)',
        }
      )
    },
    { dependencies: [result], scope: container }
  )

  return (
    <div
      className={cn('flex flex-col gap-y-4 items-center', className)}
      ref={container}
    >
      <span
        className="text-[56px] text-white font-bold leading-[normal] uppercase opacity-0"
        ref={text}
      >
        You {result ?? ''}
      </span>
      <Button
        className={cn(
          'w-[220px] h-12 bg-white rounded-[8px]',
          'text-[16px] text-darkblue font-semibold leading-[normal] tracking-[2.5px] uppercase',
          'hover:bg-white hover:text-lightred'
        )}
        onClick={onPlayAgain}
        ref={button}
      >
        Play Again
      </Button>
    </div>
  )
}

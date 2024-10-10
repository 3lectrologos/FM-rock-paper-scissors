import { Attack, Result } from '@/types.ts'
import { cn } from '@/lib/utils.ts'
import { Button } from '@/components/ui/button.tsx'
import AttackIcon from '@/icons/AttackIcon.tsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

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
  return (
    <div
      className={cn(
        'w-[311px] flex flex-col tablet:w-full tablet:items-center',
        className
      )}
    >
      <div className="flex justify-between mb-[62px] tablet:gap-x-16 tablet:mb-0">
        <AttackDisplayWithText attack={attack} text="You picked" />
        <AttackDisplayWithText
          className={cn(houseAttack === null && 'invisible')}
          attack={houseAttack}
          text="The house picked"
        />
      </div>
      <ResultCard
        className={cn(result === null && 'invisible', 'tablet:hidden')}
        result={result}
        onPlayAgain={onPlayAgain}
      />
    </div>
  )
}

function AttackDisplay({ attack }: { attack: Attack | null }) {
  if (attack === null) {
    return (
      <div className="w-[132px] h-[133px] tablet:w-[297px] tablet:h-[299px]">
        <div className="w-[124px] h-[125px] bg-white/10 rounded-full" />
      </div>
    )
  }

  return (
    <AttackIcon
      className={cn('w-[132px] h-[133px] tablet:w-[297px] tablet:h-[299px]')}
      attack={attack}
    />
  )
}

function AttackDisplayWithText({
  attack,
  text,
  className,
}: {
  attack: Attack | null
  text: string
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
      <AttackDisplay attack={attack} />
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
          duration: 0.25,
        }
      )

      gsap.fromTo(
        button.current,
        {
          scale: 0,
          opacity: 0,
          x: -500,
        },
        {
          scale: 1,
          opacity: 1,
          delay: 0.25,
          duration: 0.25,
          x: 0,
          ease: 'elastic.out(1, 0.75)',
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

import { Attack, Result } from '@/types.ts'
import { cn } from '@/lib/utils.ts'
import { Button } from '@/components/ui/button.tsx'
import AttackIcon from '@/icons/AttackIcon.tsx'

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
    <div className={cn('w-full flex flex-col', className)}>
      <div className="flex justify-between mb-[62px]">
        <AttackDisplayWithText attack={attack} text="You picked" />
        <AttackDisplayWithText attack={houseAttack} text="The house picked" />
      </div>
      <ResultCard
        className={cn(result === null && 'invisible')}
        result={result}
        onPlayAgain={onPlayAgain}
      />
    </div>
  )
}

function AttackDisplay({ attack }: { attack: Attack | null }) {
  if (attack === null) {
    return (
      <div className="w-[132px] h-[133px]">
        <div className="w-[124px] h-[125px] bg-white/10 rounded-full" />
      </div>
    )
  }

  return <AttackIcon className={cn('w-[132px] h-[133px]')} attack={attack} />
}

function AttackDisplayWithText({
  attack,
  text,
}: {
  attack: Attack | null
  text: string
}) {
  return (
    <div className="flex flex-col items-center gap-y-[17px]">
      <AttackDisplay attack={attack} />
      <span className="text-[15px] text-white [text-shadow:_0_3px_3px_rgb(0_0_0_/_0.2)] font-bold leading-[32px] tracking-[1.875px] uppercase">
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
  return (
    <div className={cn('flex flex-col gap-y-4 items-center', className)}>
      <span className="text-[56px] text-white font-bold leading-[normal] uppercase">
        You {result ?? ''}
      </span>
      <Button
        className={cn(
          'w-[220px] h-12 bg-white rounded-[8px]',
          'text-[16px] text-darkblue font-semibold leading-[normal] tracking-[2.5px] uppercase',
          'hover:bg-white hover:text-lightred'
        )}
        onClick={onPlayAgain}
      >
        Play Again
      </Button>
    </div>
  )
}

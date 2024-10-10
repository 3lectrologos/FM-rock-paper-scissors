import Paper from '@/icons/Paper.tsx'
import Pentagon from '@/icons/Pentagon.tsx'
import Rock from '@/icons/Rock.tsx'
import Lizard from '@/icons/Lizard.tsx'
import Spock from '@/icons/Spock.tsx'
import Scissors from '@/icons/Scissors.tsx'
import { Attack } from '@/types.ts'
import { cn } from '@/lib/utils.ts'
import AttackButton from '@/AttackButton.tsx'

export default function ButtonSelector({
  className,
  onClick,
}: {
  className?: string
  onClick: (attack: Attack) => void
}) {
  return (
    <div
      className={cn(
        'relative w-[227px] h-[227px] tablet:w-[325px] tablet:h-[325px]',
        className
      )}
    >
      <Pentagon className="stroke-[18px]" />

      <AttackButton
        id={'scissors'}
        className={cn('absolute translate-x-[0] -translate-y-[100%]')}
        onClick={() => {
          onClick('scissors')
        }}
      >
        <Scissors />
      </AttackButton>

      <AttackButton
        id={'paper'}
        className="absolute translate-x-[100%] -translate-y-[20%]"
        onClick={() => {
          onClick('paper')
        }}
      >
        <Paper />
      </AttackButton>

      <AttackButton
        id={'rock'}
        className="absolute translate-x-[66%] translate-y-[100%]"
        onClick={() => {
          onClick('rock')
        }}
      >
        <Rock />
      </AttackButton>

      <AttackButton
        id={'lizard'}
        className="absolute -translate-x-[66%] translate-y-[100%]"
        onClick={() => {
          onClick('lizard')
        }}
      >
        <Lizard />
      </AttackButton>

      <AttackButton
        id={'spock'}
        className="absolute -translate-x-[100%] -translate-y-[20%]"
        onClick={() => {
          onClick('spock')
        }}
      >
        <Spock />
      </AttackButton>
    </div>
  )
}

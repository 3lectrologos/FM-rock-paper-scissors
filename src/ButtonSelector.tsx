import Paper from '@/icons/Paper.tsx'
import Pentagon from '@/icons/Pentagon.tsx'
import Rock from '@/icons/Rock.tsx'
import Lizard from '@/icons/Lizard.tsx'
import Spock from '@/icons/Spock.tsx'
import Scissors from '@/icons/Scissors.tsx'
import { ReactNode } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { Attack } from '@/types.ts'
import { cn } from '@/lib/utils.ts'

export default function ButtonSelector({
  className,
  onClick,
}: {
  className?: string
  onClick: (attack: Attack) => void
}) {
  return (
    <div className={cn('relative w-[227px] h-[227px]', className)}>
      <Pentagon className="stroke-[22px]" />

      <AttackButton
        id={'scissors'}
        className="absolute translate-x-[65px] -translate-y-[260px]"
        onClick={() => {
          onClick('scissors')
        }}
      >
        <Scissors />
      </AttackButton>

      <AttackButton
        id={'paper'}
        className="absolute translate-x-[172px] -translate-y-[180px]"
        onClick={() => {
          onClick('paper')
        }}
      >
        <Paper />
      </AttackButton>

      <AttackButton
        id={'rock'}
        className="absolute translate-x-[135px] -translate-y-[50px]"
        onClick={() => {
          onClick('rock')
        }}
      >
        <Rock />
      </AttackButton>

      <AttackButton
        id={'lizard'}
        className="absolute -translate-x-[5px] -translate-y-[50px]"
        onClick={() => {
          onClick('lizard')
        }}
      >
        <Lizard />
      </AttackButton>

      <AttackButton
        id={'spock'}
        className="absolute -translate-x-[45px] -translate-y-[180px]"
        onClick={() => {
          onClick('spock')
        }}
      >
        <Spock />
      </AttackButton>
    </div>
  )
}

function AttackButton({
  onClick,
  children,
  id,
  className,
}: {
  onClick: () => void
  children: ReactNode
  id?: string
  className?: string
}) {
  return (
    <Button
      id={id}
      className={cn(
        'p-0 bg-transparent border-0 rounded-full h-auto w-auto',
        'attack',
        className
      )}
      asChild
    >
      <div className="cursor-pointer" onClick={onClick}>
        {children}
      </div>
    </Button>
  )
}

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
        onClick={() => {
          onClick('paper')
        }}
      >
        <Paper className="absolute right-0 top-0 translate-x-11 translate-y-10" />
      </AttackButton>
      <AttackButton
        onClick={() => {
          onClick('spock')
        }}
      >
        <Spock className="absolute left-0 top-0 -translate-x-11 translate-y-10" />
      </AttackButton>

      <AttackButton
        onClick={() => {
          onClick('rock')
        }}
      >
        <Rock className="absolute -right-1 bottom-0 translate-y-10" />
      </AttackButton>
      <AttackButton
        onClick={() => {
          onClick('lizard')
        }}
      >
        <Lizard className="absolute -left-1 bottom-0 translate-y-10" />
      </AttackButton>

      <AttackButton
        onClick={() => {
          onClick('scissors')
        }}
      >
        <Scissors className="absolute right-1/2 top-0 translate-x-1/2 -translate-y-1/2" />
      </AttackButton>
    </div>
  )
}

function AttackButton({
  onClick,
  children,
}: {
  onClick: () => void
  children: ReactNode
}) {
  return (
    <Button
      className="p-0 bg-transparent border-0 rounded-full h-auto w-auto"
      asChild
    >
      <div onClick={onClick}>{children}</div>
    </Button>
  )
}

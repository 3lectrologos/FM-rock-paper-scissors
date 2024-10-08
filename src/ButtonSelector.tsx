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
          onClick('scissors')
        }}
      >
        <Scissors className="absolute translate-x-[113.5px] -translate-y-[227px]" />
      </AttackButton>

      <AttackButton
        onClick={() => {
          onClick('paper')
        }}
      >
        <Paper className="absolute translate-x-[220px] -translate-y-[140px]" />
      </AttackButton>

      <AttackButton
        onClick={() => {
          onClick('rock')
        }}
      >
        <Rock className="absolute translate-x-[180px] -translate-y-[17px]" />
      </AttackButton>

      <AttackButton
        onClick={() => {
          onClick('lizard')
        }}
      >
        <Lizard className="absolute translate-x-[47px] -translate-y-[17px]" />
      </AttackButton>

      <AttackButton
        onClick={() => {
          onClick('spock')
        }}
      >
        <Spock className="absolute translate-x-[7px] -translate-y-[140px]" />
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

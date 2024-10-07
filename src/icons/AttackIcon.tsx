import Rock from '@/icons/Rock.tsx'
import Scissors from '@/icons/Scissors.tsx'
import Paper from '@/icons/Paper.tsx'
import Lizard from '@/icons/Lizard.tsx'
import Spock from '@/icons/Spock.tsx'

export default function AttackIcon({
  attack,
  className,
}: {
  attack: string
  className?: string
}) {
  switch (attack) {
    case 'rock':
      return <Rock className={className} />
    case 'paper':
      return <Paper className={className} />
    case 'scissors':
      return <Scissors className={className} />
    case 'lizard':
      return <Lizard className={className} />
    case 'spock':
      return <Spock className={className} />
  }
}

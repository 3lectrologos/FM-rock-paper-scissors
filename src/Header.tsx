import Logo from '@/icons/Logo.tsx'
import { cn } from '@/lib/utils.ts'

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
        'w-full flex justify-between items-center p-3 pl-6 border-[3px] border-white/30 rounded-[5px]',
        className
      )}
    >
      <Logo className="w-[49px] h-[48px]" />
      <Score score={score} />
    </header>
  )
}

function Score({ score }: { score: number }) {
  return (
    <div className="flex flex-col w-20 h-[72px] bg-white rounded-[4px] items-center p-[10px]">
      <span className="uppercase text-[10px] text-bluish font-semibold tracking-[1.563px] leading-[normal]">
        Score
      </span>
      <span className="text-[40px] text-darkgray font-bold leading-[40px]">
        {score}
      </span>
    </div>
  )
}

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
    <div
      className={cn(
        'flex flex-col w-20 h-[72px] rounded-[4px] items-center p-[10px]',
        'bg-gradient-to-t from-[#f3f3f3] to-white',
        '[box-shadow:0_3px_3px_0_rgb(0_0_0_/_0.2)]'
      )}
    >
      <span className="uppercase text-[10px] text-bluish font-semibold tracking-[1.563px] leading-[normal]">
        Score
      </span>
      <span className="text-[40px] text-darkgray font-bold leading-[40px]">
        {score}
      </span>
    </div>
  )
}

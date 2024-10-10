import { Button } from '@/components/ui/button.tsx'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils.ts'

export default function AttackButton({
  onClick,
  children,
  id,
  className,
}: {
  onClick?: () => void
  children: ReactNode
  id?: string
  className?: string
}) {
  return (
    <Button
      id={id}
      className={cn(
        'p-0 bg-transparent border-0 rounded-full',
        'attack',
        'w-[102px] h-[103px] tablet:w-[146px] tablet:h-[147px]',
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

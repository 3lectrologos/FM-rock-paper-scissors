import { Button } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'

export default function Footer() {
  return (
    <div>
      <Button
        className={cn(
          'w-32 h-10 border border-white rounded-[8px]',
          'text-[16px] text-white font-semibold leading-[normal] tracking-[2.5px] uppercase',
          'hover:bg-white hover:text-darkblue'
        )}
      >
        Rules
      </Button>
    </div>
  )
}

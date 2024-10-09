import { Button } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx'
import Close from '@/icons/Close.tsx'
import Rules from '@/icons/Rules.tsx'

export default function Footer() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={cn(
              'w-32 h-10 border border-white rounded-[8px]',
              'text-[16px] text-white font-semibold leading-[normal] tracking-[2.5px] uppercase',
              'hover:bg-white hover:text-darkblue',
              'tablet:absolute tablet:bottom-8 tablet:right-8'
            )}
          >
            Rules
          </Button>
        </DialogTrigger>
        <DialogContent
          className={cn(
            'flex flex-col gap-y-5 p-8 items-center',
            'w-full h-full rounded-none tablet:w-[400px] tablet:h-auto tablet:rounded-[8px] tablet:pb-12'
          )}
        >
          <DialogHeader
            className={cn(
              'w-full flex flex-row items-end',
              'justify-center tablet:justify-between',
              'h-[15%] tablet:h-auto'
            )}
          >
            <DialogTitle className="text-[32px] text-darkblue font-bold leading-[32px] uppercase">
              Rules
            </DialogTitle>
            <DialogDescription></DialogDescription>
            <DialogClose className="hidden tablet:inline-block">
              <Close />
            </DialogClose>
          </DialogHeader>
          <div className="h-[70%] flex-grow w-full max-w-[350px] flex items-start justify-center">
            <Rules />
          </div>
          <DialogClose className="h-[15%] flex shrink-0 items-center tablet:hidden">
            <Close />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}

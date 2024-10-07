import { cn } from '@/lib/utils.ts'

export default function Pentagon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 329 313"
      className={cn('stroke-[20px] stroke-black/20', className)}
    >
      <path
        fill="none"
        d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
      />
    </svg>
  )
}

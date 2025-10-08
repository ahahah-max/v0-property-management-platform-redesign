import { Home } from "lucide-react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
        <Home className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold text-primary">DomiHive</span>
    </div>
  )
}

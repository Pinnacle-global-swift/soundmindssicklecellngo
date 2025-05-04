import { Activity } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 flex items-center justify-center bg-brand-green/10 rounded-full mb-4">
          <Activity className="h-8 w-8 text-brand-green" />
          <div className="absolute inset-0 rounded-full border-t-2 border-brand-green animate-spin"></div>
        </div>
        <p className="text-brand-green font-medium">Loading...</p>
      </div>
    </div>
  )
}

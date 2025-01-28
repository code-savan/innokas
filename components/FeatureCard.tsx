import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  Icon: LucideIcon
}

export default function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl slide-in">
      <div className="flex items-center mb-4">
        <div className="bg-primary p-3 rounded-full mr-4">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}


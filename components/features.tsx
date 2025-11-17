import { Card } from '@/components/ui/card'
import { Shield, MapPin, Star, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Verified & Safe",
    description: "All landlords and PGs are verified. Your safety is our priority."
  },
  {
    icon: MapPin,
    title: "Campus Proximity",
    description: "All listings are within walking distance or a short auto ride from ADU."
  },
  {
    icon: Star,
    title: "Honest Reviews",
    description: "Real student reviews help you make informed decisions about your accommodation."
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with other students and find roommates with similar interests."
  }
]

export function Features() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Why Choose UniStay?</h2>
          <p className="text-lg text-muted-foreground">Making student accommodation simple and trustworthy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className={`p-6 border-border transition duration-300 hover:shadow-md hover:shadow-primary/30 hover:shadow-lg hover:-translate-y-1 cursor-pointer animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit transition duration-300 hover:scale-105">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

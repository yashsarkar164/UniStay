'use client'

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Search & Filter',
      description: 'Browse verified PGs near Assam Downtown University with advanced filters for price, amenities, and preferences.'
    },
    {
      number: 2,
      title: 'View Details',
      description: 'Check photos, amenities, house rules, and read real reviews from current and past students.'
    },
    {
      number: 3,
      title: 'Connect with Landlord',
      description: 'Message landlords directly, ask questions, and schedule a visit to the property.'
    },
    {
      number: 4,
      title: 'Book & Move In',
      description: 'Complete the booking process and move into your perfect student accommodation.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Finding your perfect PG is just four simple steps away</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              <div className="bg-white rounded-xl p-8 h-full shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-4 group-hover:scale-110 transition duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-16 -right-4 text-blue-300 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

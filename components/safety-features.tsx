'use client'

export function SafetyFeatures() {
  const features = [
    {
      title: 'Verified Listings',
      description: 'All PGs are manually verified for authenticity and safety standards.'
    },
    {
      title: 'Student Reviews',
      description: 'Read authentic reviews from actual students living in these PGs.'
    },
    {
      title: 'Secure Payments',
      description: 'Safe and secure transaction process for your peace of mind.'
    },
    {
      title: 'Legal Documentation',
      description: 'Clear lease agreements and proper documentation for all bookings.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Your Safety Matters</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We ensure every listing and transaction is secure and verified</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300 text-xl">
                ✓
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

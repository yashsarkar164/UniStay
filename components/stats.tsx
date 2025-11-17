'use client'

export function Stats() {
  const stats = [
    { number: '500+', label: 'Verified PGs' },
    { number: '2000+', label: 'Happy Students' },
    { number: '100%', label: 'Safe & Verified' },
    { number: '24/7', label: 'Customer Support' }
  ]

  return (
    <section className="py-16 px-4 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition duration-300 inline-block">
                {stat.number}
              </div>
              <p className="text-blue-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

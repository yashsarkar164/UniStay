'use client'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'ADTU Student, 2nd Year',
      image: '/student-avatar-1.jpg',
      text: 'Found my perfect PG in just 2 days! The platform made it so easy to compare options and read real reviews. Highly recommended!'
    },
    {
      name: 'Arjun Singh',
      role: 'ADTU Student, 1st Year',
      image: '/student-avatar-2.jpg',
      text: 'Great experience from start to finish. The landlord was responsive and the PG is exactly as shown. Best student rental platform!'
    },
    {
      name: 'Isha Dutta',
      role: 'ADTU Student, 3rd Year',
      image: '/student-avatar-3.jpg',
      text: 'The verified listings and safety features gave me peace of mind. My parents were also very comfortable with my choice.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Real experiences from real ADTU students</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center mb-4 gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

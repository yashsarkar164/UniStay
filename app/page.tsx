import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { FeaturedPGs } from '@/components/featured-pgs'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { SafetyFeatures } from '@/components/safety-features'
import { Stats } from '@/components/stats'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <HowItWorks />
      <FeaturedPGs />
      <SafetyFeatures />
      <Testimonials />
      <FAQ />
      <Features />
      <Footer />
    </main>
  )
}

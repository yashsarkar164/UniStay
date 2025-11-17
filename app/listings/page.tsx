'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PGListings } from '@/components/pg-listings'

export default function ListingsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PGListings />
      <Footer />
    </main>
  )
}

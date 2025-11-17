'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PGDetail } from '@/components/pg-detail'
import { useParams } from 'next/navigation'

export default function DetailPage() {
  const params = useParams()
  const id = params.id as string

  return (
    <main className="min-h-screen">
      <Navigation />
      <PGDetail pgId={id} />
      <Footer />
    </main>
  )
}

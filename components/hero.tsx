'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-foreground animate-fade-in-up">
            Find Your Perfect Student Home
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-fade-in-up stagger-1">
            Discover verified, affordable PG accommodations near Assam Downtown University. Safe, comfortable, and budget-friendly living spaces for students.
          </p>

          <div className="flex justify-center mb-12 animate-fade-in-up stagger-2">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 py-6 px-8 text-lg transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link href="/listings">Browse PGs Near ADTU</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto text-center">
            <div className="animate-fade-in-up stagger-3">
              <p className="text-2xl sm:text-3xl font-bold text-primary animate-bounce-gentle">150+</p>
              <p className="text-sm text-muted-foreground">Listed PGs</p>
            </div>
            <div className="animate-fade-in-up stagger-4">
              <p className="text-2xl sm:text-3xl font-bold text-primary animate-bounce-gentle" style={{animationDelay: '0.2s'}}>2500+</p>
              <p className="text-sm text-muted-foreground">Happy Students</p>
            </div>
            <div className="animate-fade-in-up stagger-5">
              <p className="text-2xl sm:text-3xl font-bold text-primary animate-bounce-gentle" style={{animationDelay: '0.4s'}}>4.8★</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

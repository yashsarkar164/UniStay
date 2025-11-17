'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition duration-300">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition duration-300">
              <span className="text-primary-foreground font-bold text-lg">U</span>
            </div>
            <span className="font-bold text-xl text-foreground">UniStay</span>
          </Link>
          
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/listings" className="text-foreground hover:text-primary transition duration-300 relative group">
              Find PG
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground transition duration-300">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>

          <button 
            className="md:hidden transition duration-300 hover:opacity-80"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-slide-in-down">
            <Link href="/listings" className="block py-2 text-foreground hover:text-primary transition duration-300">
              Find PG
            </Link>
            <Link href="/about" className="block py-2 text-foreground hover:text-primary transition duration-300">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-primary transition duration-300">
              Contact
            </Link>
            <div className="flex gap-2 mt-4">
              <Button asChild variant="outline" size="sm" className="flex-1 transition duration-300">
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild size="sm" className="flex-1 bg-primary transition duration-300 hover:shadow-lg hover:-translate-y-1">
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

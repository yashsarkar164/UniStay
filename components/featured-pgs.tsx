'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Users, Wifi, Zap, Heart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const featuredPGs = [
  {
    id: 1,
    name: "Dipu Boys PG",
    location: "Near ADTU gate, 500m from campus",
    price: "₹5,000",
    rating: 4.8,
    reviews: 24,
    image: "/modern-pg-room-interior.jpg",
    amenities: ["WiFi", "Electricity Included"],
    beds: 1,
  },
  {
    id: 2,
    name: "Ankita Girl's PG",
    location: "Near Hanuman Mandir, Walking distance",
    price: "₹4,500",
    rating: 4.9,
    reviews: 31,
    image: "/bright-student-accommodation-room.jpg",
    amenities: ["WiFi", "Electricity Included"],
    beds: 2,
  },
  {
    id: 3,
    name: "SL boy's PG",
    location: "Near Elaka Saloon, 800m from university",
    price: "₹5,500",
    rating: 4.7,
    reviews: 18,
    image: "/comfortable-shared-living-space.jpg",
    amenities: ["WiFi", "Electricity Included"],
    beds: 1,
  },
  {
    id: 4,
    name: "Bajrang PG",
    location: "Near Zaika Restaurant, Easy commute",
    price: "₹3,800",
    rating: 4.6,
    reviews: 42,
    image: "/affordable-student-hostel-room.jpg",
    amenities: ["WiFi", "Electricity Included"],
    beds: 3,
  },
]

export function FeaturedPGs() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  return (
    <section className="py-16 sm:py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Featured PGs</h2>
          <p className="text-lg text-muted-foreground">Popular accommodations trusted by students</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPGs.map((pg, index) => (
            <Card 
              key={pg.id} 
              className={`overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer animate-fade-in-up stagger-${(index % 4) + 1}`}
            >
              <div className="relative h-48 bg-muted overflow-hidden group">
                <img 
                  src={pg.image || "/placeholder.svg"} 
                  alt={pg.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <button
                  onClick={() => toggleFavorite(pg.id)}
                  className="absolute top-3 right-3 p-2 bg-background/80 rounded-full hover:bg-background transition duration-300 hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 transition duration-300 ${
                      favorites.has(pg.id)
                        ? 'fill-accent text-accent animate-scale-in'
                        : 'text-muted-foreground'
                    }`}
                  />
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground mb-1">{pg.name}</h3>
                
                <div className="flex items-start gap-1 mb-3">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{pg.location}</p>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-primary">{pg.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-foreground">{pg.rating}★</span>
                  <span className="text-sm text-muted-foreground">({pg.reviews} reviews)</span>
                </div>

                <div className="flex gap-2 mb-4 flex-wrap">
                  {pg.amenities.map((amenity) => (
                    <span key={amenity} className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs transition duration-300">
                      {amenity === 'WiFi' && <Wifi className="w-3 h-3" />}
                      {amenity === 'Electricity Included' && <Zap className="w-3 h-3" />}
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{pg.beds} shared room(s)</span>
                </div>

                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Link href={`/pg/${pg.id}`}>View Details</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up stagger-3">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <Link href="/listings">View All PGs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

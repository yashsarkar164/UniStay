'use client'

import { useState, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Users, Wifi, Zap, Heart, Filter, X, Search } from 'lucide-react'
import Link from 'next/link'

interface PG {
  id: number
  name: string
  location: string
  price: number
  rating: number
  reviews: number
  image: string
  amenities: string[]
  beds: number
  gender?: string
  distance: number
}

const allPGs: PG[] = [
  {
    id: 1,
    name: "Dipu Boys PG",
    location: "Near ADTU gate",
    price: 5000,
    rating: 4.8,
    reviews: 24,
    image: "/modern-pg-room-interior.jpg",
    amenities: ["WiFi", "Electricity Included", "Laundry"],
    beds: 1,
    gender: "All",
    distance: 0.01,
  },
  {
    id: 2,
    name: "Ankita Girl's PG",
    location: "Near Hanuman Mandir",
    price: 4500,
    rating: 4.9,
    reviews: 31,
    image: "/bright-student-accommodation-room.jpg",
    amenities: ["WiFi", "Electricity Included", "Hot Water"],
    beds: 2,
    gender: "Female",
    distance: 0.02,
  },
  {
    id: 3,
    name: "SL boy's PG",
    location: "Near Elaka Saloon",
    price: 5500,
    rating: 4.7,
    reviews: 18,
    image: "/comfortable-shared-living-space.jpg",
    amenities: ["WiFi", "Electricity Included", "Parking"],
    beds: 1,
    gender: "All",
    distance: 0.05,
  },
  {
    id: 4,
    name: "Bajrang PG",
    location: "Near Zaika Restaurant",
    price: 3800,
    rating: 4.6,
    reviews: 42,
    image: "/affordable-student-hostel-room.jpg",
    amenities: ["WiFi", "Electricity Included", "Common Kitchen"],
    beds: 3,
    gender: "All",
    distance: 0.5,
  },
  {
    id: 5,
    name: "Campus Elite PG",
    location: "Pan Bazaar",
    price: 6000,
    rating: 4.7,
    reviews: 15,
    image: "/placeholder.svg?key=qwert",
    amenities: ["WiFi", "Electricity Included", "AC"],
    beds: 1,
    gender: "Male",
    distance: 0.6,
  },
  {
    id: 6,
    name: "Scholar's Inn",
    location: "ADTU gate",
    price: 4200,
    rating: 4.5,
    reviews: 28,
    image: "/placeholder.svg?key=asdfg",
    amenities: ["WiFi", "Electricity Included"],
    beds: 2,
    gender: "Female",
    distance: 0.7,
  },
  {
    id: 7,
    name: "Urban Stay",
    location: "Fancy Bazaar",
    price: 5200,
    rating: 4.8,
    reviews: 22,
    image: "/placeholder.svg?key=zxcvb",
    amenities: ["WiFi", "Electricity Included", "Gym"],
    beds: 1,
    gender: "All",
    distance: 1.1,
  },
  {
    id: 8,
    name: "Cozy Corner",
    location: "Rukmini Nagar",
    price: 4800,
    rating: 4.6,
    reviews: 19,
    image: "/placeholder.svg?key=hjkly",
    amenities: ["WiFi", "Electricity Included", "Terrace"],
    beds: 2,
    gender: "All",
    distance: 0.9,
  },
]

export function PGListings() {
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([3000, 7000])
  const [selectedAmenities, setSelectedAmenities] = useState<Set<string>>(new Set())
  const [selectedGender, setSelectedGender] = useState<string>('All')
  const [sortBy, setSortBy] = useState('relevant')
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const filteredAndSortedPGs = useMemo(() => {
    let filtered = allPGs.filter(pg => {
      const matchesSearch = pg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           pg.location.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = pg.price >= priceRange[0] && pg.price <= priceRange[1]
      const matchesGender = selectedGender === 'All' || pg.gender === selectedGender || pg.gender === 'All'
      const matchesAmenities = selectedAmenities.size === 0 || 
                               Array.from(selectedAmenities).some(amenity => pg.amenities.includes(amenity))

      return matchesSearch && matchesPrice && matchesGender && matchesAmenities
    })

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'distance') return a.distance - b.distance
      return 0
    })

    return filtered
  }, [searchQuery, priceRange, selectedAmenities, selectedGender, sortBy])

  const toggleAmenity = (amenity: string) => {
    const newAmenities = new Set(selectedAmenities)
    if (newAmenities.has(amenity)) {
      newAmenities.delete(amenity)
    } else {
      newAmenities.add(amenity)
    }
    setSelectedAmenities(newAmenities)
  }

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
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Find Your Perfect PG</h1>
          <p className="text-muted-foreground">{filteredAndSortedPGs.length} PGs available near ADU</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by location, PG name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-base"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2 border-primary text-primary hover:bg-primary/10"
          >
            <Filter className="w-4 h-4" />
            Filters
            {showFilters && <X className="w-4 h-4" />}
          </Button>

          <div className="flex-1">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option value="relevant">Most Relevant</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="distance">Closest Distance</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-card p-6 rounded-lg border border-border sticky top-24">
                {/* Price Filter */}
                <div className="mb-6">
                  <h3 className="font-bold text-foreground mb-4">Price Range</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-muted-foreground">Min: ₹{priceRange[0]}</label>
                      <input
                        type="range"
                        min="2000"
                        max="7000"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Max: ₹{priceRange[1]}</label>
                      <input
                        type="range"
                        min="2000"
                        max="7000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Gender Filter */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h3 className="font-bold text-foreground mb-3">Occupancy</h3>
                  <div className="space-y-2">
                    {['All', 'Male', 'Female'].map(gender => (
                      <label key={gender} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          checked={selectedGender === gender}
                          onChange={(e) => setSelectedGender(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-foreground">{gender}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Amenities Filter */}
                <div>
                  <h3 className="font-bold text-foreground mb-3">Amenities</h3>
                  <div className="space-y-2">
                    {['WiFi', 'Electricity Included', 'AC', 'Parking', 'Gym'].map(amenity => (
                      <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAmenities.has(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-foreground">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setPriceRange([3000, 7000])
                    setSelectedAmenities(new Set())
                    setSelectedGender('All')
                  }}
                  className="w-full mt-6 border-border text-muted-foreground hover:bg-muted"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}

          {/* PG Cards Grid */}
          <div className="flex-1">
            {filteredAndSortedPGs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAndSortedPGs.map((pg) => (
                  <Card key={pg.id} className="overflow-hidden hover:shadow-lg transition group cursor-pointer">
                    <div className="relative h-48 bg-muted overflow-hidden">
                      <img
                        src={pg.image || "/placeholder.svg"}
                        alt={pg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition"
                      />
                      <button
                        onClick={() => toggleFavorite(pg.id)}
                        className="absolute top-3 right-3 p-2 bg-background/80 rounded-full hover:bg-background transition"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.has(pg.id)
                              ? 'fill-accent text-accent'
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

                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-lg font-bold text-primary">₹{pg.price}</span>
                          <span className="text-sm text-muted-foreground">/month</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-foreground">{pg.rating}★</div>
                          <div className="text-xs text-muted-foreground">({pg.reviews})</div>
                        </div>
                      </div>

                      <div className="flex gap-2 mb-4 flex-wrap">
                        {pg.amenities.slice(0, 2).map((amenity) => (
                          <span key={amenity} className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs">
                            {amenity === 'WiFi' && <Wifi className="w-3 h-3" />}
                            {amenity === 'Electricity Included' && <Zap className="w-3 h-3" />}
                            {amenity}
                          </span>
                        ))}
                        {pg.amenities.length > 2 && (
                          <span className="text-xs text-muted-foreground">+{pg.amenities.length - 2} more</span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{pg.beds} room(s)</span>
                        </div>
                        <div className="text-sm px-2 py-1 bg-primary/10 text-primary rounded">
                          {pg.distance}km
                        </div>
                      </div>

                      <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href={`/pg/${pg.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">No PGs found matching your criteria</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setPriceRange([3000, 7000])
                    setSelectedAmenities(new Set())
                    setSelectedGender('All')
                  }}
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

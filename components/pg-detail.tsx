'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Users, Wifi, Zap, Heart, MessageSquare, Phone, Mail, Star, ChevronLeft, ChevronRight, Clock, Home, DoorOpen, Coffee, Utensils } from 'lucide-react'
import Link from 'next/link'

interface Review {
  id: number
  author: string
  rating: number
  date: string
  text: string
  avatar: string
}

interface PGData {
  id: number
  name: string
  location: string
  price: number
  rating: number
  reviews: Review[]
  images: string[]
  amenities: string[]
  beds: number
  gender?: string
  distance: number
  description: string
  rules: string[]
  contact: {
    name: string
    phone: string
    email: string
  }
}

const pgDatabase: Record<string, PGData> = {
  '1': {
    id: 1,
    name: "Dipu Boys PG",
    location: "Near ADTU gate, 500m from campus",
    price: 5000,
    rating: 4.8,
    reviews: [
      {
        id: 1,
        author: "Arjun Kumar",
        rating: 5,
        date: "2 weeks ago",
        text: "Excellent PG with great facilities. The landlord is very cooperative and maintenance is top-notch. Highly recommended for students!",
        avatar: "/placeholder.svg?key=user1",
      },
      {
        id: 2,
        author: "Priya Singh",
        rating: 4,
        date: "1 month ago",
        text: "Good location and clean rooms. WiFi is reliable. The only downside is limited parking space.",
        avatar: "/placeholder.svg?key=user2",
      },
      {
        id: 3,
        author: "Rahul Patel",
        rating: 5,
        date: "2 months ago",
        text: "Perfect for students! Very close to campus and affordable. The common area is great for studying.",
        avatar: "/placeholder.svg?key=user3",
      },
    ],
    images: ["/modern-pg-room-interior.jpg", "/placeholder.svg?key=9200i", "/placeholder.svg?key=9201i"],
    amenities: ["WiFi", "Electricity Included", "Laundry", "Hot Water", "Common Kitchen"],
    beds: 1,
    gender: "All",
    distance: 0.01,
    description: "Dipu Boys PG offers modern, well-furnished rooms with all essential amenities for students. Located just 500m from ADU campus, it's the perfect home away from home. Each room is equipped with high-speed WiFi and comfortable bedding.",
    rules: ["No loud noise after 10 PM", "Guests allowed on weekends only", "Monthly maintenance includes room cleaning", "No smoking inside rooms"],
    contact: {
      name: "Ravi Kumar",
      phone: "+91 98765 43210",
      email: "comfort.stay@pgmail.com"
    }
  },
  '2': {
    id: 2,
    name: "Ankita Girl's PG",
    location: "Near Hanuman Mandir, Walking distance",
    price: 4500,
    rating: 4.9,
    reviews: [
      {
        id: 1,
        author: "Neha Devi",
        rating: 5,
        date: "1 week ago",
        text: "Absolutely amazing! The PG is very clean and the landlord is very helpful. Great food options nearby!",
        avatar: "/placeholder.svg?key=user4",
      },
      {
        id: 2,
        author: "Amit Sharma",
        rating: 5,
        date: "3 weeks ago",
        text: "Best decision I made! Supportive environment, good facilities, and fair pricing.",
        avatar: "/placeholder.svg?key=user5",
      },
      {
        id: 3,
        author: "Divya Gupta",
        rating: 4,
        date: "1.5 months ago",
        text: "Very good PG. The only issue is water supply during summer months.",
        avatar: "/placeholder.svg?key=user6",
      },
    ],
    images: ["/bright-student-accommodation-room.jpg", "/placeholder.svg?key=xko6f", "/placeholder.svg?key=xko6g"],
    amenities: ["WiFi", "Electricity Included", "Hot Water", "Laundry Service"],
    beds: 2,
    gender: "Female",
    distance: 0.02,
    description: "Ankita Girl's PG is a premium female PG offering comfortable shared accommodation. Located in the heart of the city with easy access to markets, restaurants, and campus.",
    rules: ["Curfew at 11 PM", "Monthly rent due on 1st", "Common areas kept clean by all", "No visitors without permission"],
    contact: {
      name: "Mrs. Anjali Verma",
      phone: "+91 97654 32109",
      email: "students.haven@pgmail.com"
    }
  },
  '3': {
    id: 3,
    name: "SL boy's PG",
    location: "Near Elaka Saloon, 800m from university",
    price: 5500,
    rating: 4.7,
    reviews: [
      {
        id: 1,
        author: "Vikram Singh",
        rating: 5,
        date: "10 days ago",
        text: "Great place to stay! Peaceful location away from the hustle and bustle.",
        avatar: "/placeholder.svg?key=user7",
      },
      {
        id: 2,
        author: "Aisha Khan",
        rating: 4,
        date: "1 month ago",
        text: "Good amenities and friendly landlord. Slightly away from market area but peaceful.",
        avatar: "/placeholder.svg?key=user8",
      },
    ],
    images: ["/comfortable-shared-living-space.jpg", "/placeholder.svg?key=o0idb", "/placeholder.svg?key=o0idc"],
    amenities: ["WiFi", "Electricity Included", "Parking", "Terrace"],
    beds: 1,
    gender: "All",
    distance: 0.05,
    description: "SL boy's PG offers a peaceful retreat in Near Elaka Saloon with modern amenities. The spacious rooms and friendly atmosphere make it ideal for focused studies and comfortable living.",
    rules: ["Quiet hours 9 PM - 8 AM", "Maintenance check weekly", "Rent payment via online transfer", "Common areas are shared responsibility"],
    contact: {
      name: "Mr. Rajesh Das",
      phone: "+91 96543 21098",
      email: "homeawayhome@pgmail.com"
    }
  },
  '4': {
    id: 4,
    name: "Bajrang PG",
    location: "Near Zaika Restaurant, Easy commute",
    price: 3800,
    rating: 4.6,
    reviews: [
      {
        id: 1,
        author: "Kunal Roy",
        rating: 5,
        date: "5 days ago",
        text: "Affordable and decent. Best value for money PG in this area!",
        avatar: "/placeholder.svg?key=user9",
      },
      {
        id: 2,
        author: "Sonali Nath",
        rating: 4,
        date: "2 weeks ago",
        text: "Good for budget-conscious students. Facilities are basic but sufficient.",
        avatar: "/placeholder.svg?key=user10",
      },
    ],
    images: ["/affordable-student-hostel-room.jpg", "/placeholder.svg?key=hzang", "/placeholder.svg?key=hzanh"],
    amenities: ["WiFi", "Electricity Included", "Common Kitchen"],
    beds: 3,
    gender: "All",
    distance: 0.5,
    description: "Bajrang PG is perfect for students looking for affordable accommodation without compromising on essentials. Basic but clean rooms with essential amenities.",
    rules: ["Midnight curfew", "Shared cooking allowed", "Monthly cleanup schedule", "No pets"],
    contact: {
      name: "Mr. Mohan Nath",
      phone: "+91 95432 10987",
      email: "budgetbuddy@pgmail.com"
    }
  }
}

export function PGDetail({ pgId }: { pgId: string }) {
  const pg = pgDatabase[pgId] || pgDatabase['1']
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [newReviewText, setNewReviewText] = useState('')

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % pg.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + pg.images.length) % pg.images.length)
  }

  return (
    <section className="py-8 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/listings" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ChevronLeft className="w-4 h-4" />
          Back to Listings
        </Link>

        {/* Image Gallery */}
        <div className="relative mb-8 rounded-lg overflow-hidden bg-muted h-96 group">
          <img
            src={pg.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${pg.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {pg.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition ${
                  idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {pg.images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition ${
                idx === currentImageIndex ? 'border-primary' : 'border-transparent'
              }`}
            >
              <img src={image || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{pg.name}</h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>{pg.location}</span>
                </div>
              </div>
              <button onClick={() => setIsFavorite(!isFavorite)} className="p-2">
                <Heart className={`w-8 h-8 ${isFavorite ? 'fill-accent text-accent' : 'text-muted-foreground'}`} />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">{pg.rating}</span>
                  <span className="text-2xl">★</span>
                </div>
                <p className="text-sm text-muted-foreground">{pg.reviews.length} reviews</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This PG</h2>
              <p className="text-muted-foreground leading-relaxed">{pg.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {pg.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg">
                    {amenity === 'WiFi' && <Wifi className="w-5 h-5 text-primary" />}
                    {amenity === 'Electricity Included' && <Zap className="w-5 h-5 text-primary" />}
                    {amenity === 'Parking' && <Home className="w-5 h-5 text-primary" />}
                    {amenity === 'Hot Water' && <Coffee className="w-5 h-5 text-primary" />}
                    {amenity === 'Common Kitchen' && <Utensils className="w-5 h-5 text-primary" />}
                    {amenity === 'Laundry' && <DoorOpen className="w-5 h-5 text-primary" />}
                    {amenity === 'Terrace' && <Home className="w-5 h-5 text-primary" />}
                    <span className="text-foreground font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">House Rules</h2>
              <ul className="space-y-2">
                {pg.rules.map((rule, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Student Reviews</h2>
              <div className="space-y-4">
                {pg.reviews.map((review) => (
                  <Card key={review.id} className="p-4">
                    <div className="flex gap-4">
                      <img src={review.avatar || "/placeholder.svg"} alt={review.author} className="w-10 h-10 rounded-full bg-muted" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-foreground">{review.author}</h4>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex gap-1 mb-2">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{review.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Add Review */}
              <Card className="p-4 mt-6">
                <h3 className="font-semibold text-foreground mb-4">Share Your Experience</h3>
                <div className="space-y-3">
                  <textarea
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    placeholder="Write your review..."
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                    rows={4}
                  />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Submit Review
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Price Card */}
            <Card className="p-6 mb-6 sticky top-24 border-primary border-2 bg-gradient-to-br from-primary/5 to-background">
              <div className="mb-6">
                <p className="text-muted-foreground text-sm mb-2">Monthly Rent</p>
                <p className="text-4xl font-bold text-primary">₹{pg.price}</p>
                <p className="text-sm text-muted-foreground mt-2">+ electricity as per meter</p>
              </div>

              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-3">
                <Link href="/auth/login">Request to Book</Link>
              </Button>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                Interested in this PG?
              </Button>
            </Card>

            {/* Contact Card */}
            <Card className="p-6 mb-6">
              <h3 className="font-bold text-foreground mb-4">Landlord Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Name</p>
                  <p className="font-semibold text-foreground">{pg.contact.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Contact</p>
                  <Button variant="outline" className="w-full justify-start gap-2 border-border text-muted-foreground hover:text-foreground">
                    <Phone className="w-4 h-4" />
                    {pg.contact.phone}
                  </Button>
                </div>
                <Button variant="outline" className="w-full justify-start gap-2 border-border text-muted-foreground hover:text-foreground">
                  <Mail className="w-4 h-4" />
                  Email
                </Button>
              </div>
            </Card>

            {/* Details Card */}
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4">Quick Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Distance from Campus</span>
                  <span className="font-semibold text-foreground">{pg.distance}km</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Rooms Available</span>
                  <span className="font-semibold text-foreground">{pg.beds}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Occupancy</span>
                  <span className="font-semibold text-foreground">{pg.gender}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

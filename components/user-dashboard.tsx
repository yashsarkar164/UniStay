'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Heart, Mail, Phone, LogOut, MapPin, Star, Calendar, ArrowRight, Edit2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface User {
  email: string
  name: string
  userType?: string
}

interface UserDashboardProps {
  user: User
}

const favoritePGs = [
  {
    id: 1,
    name: "Dipu Boys PG",
    location: "Near ADTU gate",
    price: 5000,
    rating: 4.8,
    image: "/modern-pg-room-interior.jpg",
  },
  {
    id: 2,
    name: "Ankita Girl's PG",
    location: "Near Hanuman Mandir",
    price: 4500,
    rating: 4.9,
    image: "/bright-student-accommodation-room.jpg",
  },
]

const bookingRequests = [
  {
    id: 1,
    pgName: "Dipu Boys PG",
    status: "pending",
    requestDate: "Dec 10, 2024",
    landlord: "Ravi Kumar",
  },
  {
    id: 2,
    pgName: "SL boy's PG",
    status: "approved",
    requestDate: "Dec 5, 2024",
    landlord: "Rajesh Das",
  },
]

export function UserDashboard({ user }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'favorites' | 'bookings' | 'profile'>('overview')
  const [editMode, setEditMode] = useState(false)
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    phone: '',
    university: 'Assam Downtown University',
  })
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <section className="py-8 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Welcome, {user.name}!</h1>
            <p className="text-muted-foreground">Manage your PG search and bookings</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="gap-2 border-border text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border overflow-x-auto">
          {['overview', 'favorites', 'bookings', 'profile'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-3 font-medium transition capitalize ${
                activeTab === tab
                  ? 'text-primary border-b-2 border-primary -mb-[2px]'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-border bg-gradient-to-br from-primary/10 to-background">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-muted-foreground">Favorite PGs</p>
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <p className="text-4xl font-bold text-primary">{favoritePGs.length}</p>
              </Card>

              <Card className="p-6 border-border bg-gradient-to-br from-accent/10 to-background">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-muted-foreground">Booking Requests</p>
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <p className="text-4xl font-bold text-accent">{bookingRequests.length}</p>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-muted-foreground">Account Status</p>
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm font-semibold text-foreground">Active & Verified</p>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                  <Link href="/listings">Browse PGs</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 py-6">
                  <Link href="/listings?sort=rating">Top Rated</Link>
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Your Favorite PGs</h2>
            {favoritePGs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favoritePGs.map((pg) => (
                  <Card key={pg.id} className="overflow-hidden hover:shadow-lg transition group">
                    <div className="relative h-40 bg-muted overflow-hidden">
                      <img
                        src={pg.image || "/placeholder.svg"}
                        alt={pg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-foreground mb-1">{pg.name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{pg.location}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <span className="text-lg font-bold text-primary">₹{pg.price}</span>
                          <span className="text-sm text-muted-foreground">/month</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="font-semibold text-foreground">{pg.rating}</span>
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
              <Card className="p-12 text-center border-border">
                <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground mb-4">No favorite PGs yet</p>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/listings">Start Browsing</Link>
                </Button>
              </Card>
            )}
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Booking Requests</h2>
            <div className="space-y-4">
              {bookingRequests.map((booking) => (
                <Card key={booking.id} className="p-6 border-border">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{booking.pgName}</h3>
                      <p className="text-sm text-muted-foreground">Landlord: {booking.landlord}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      booking.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status === 'approved' ? 'Approved' : 'Pending'}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Requested on: {booking.requestDate}</p>
                  {booking.status === 'approved' && (
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Link href={`/pg/${booking.id}`}>Contact Landlord</Link>
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl">
            <Card className="p-6 border-border">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Profile Settings</h2>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Edit2 className="w-4 h-4" />
                  {editMode ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                  <Input
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    disabled={!editMode}
                    className="py-6"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input
                    value={profileData.email}
                    disabled
                    className="py-6"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                  <Input
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    disabled={!editMode}
                    className="py-6"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">University</label>
                  <Input
                    value={profileData.university}
                    disabled
                    className="py-6"
                  />
                </div>

                {editMode && (
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                    Save Changes
                  </Button>
                )}
              </div>
            </Card>

            <Card className="p-6 border-border mt-6 border-red-200 bg-red-50">
              <h3 className="font-bold text-foreground mb-2">Danger Zone</h3>
              <p className="text-muted-foreground text-sm mb-4">Deleting your account is permanent and cannot be undone.</p>
              <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-100">
                Delete Account
              </Button>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

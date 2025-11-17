'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Upload, ArrowRight, Check, MapPin, DollarSign, Users, Home } from 'lucide-react'
import Link from 'next/link'

interface User {
  email: string
  name: string
  userType?: string
}

interface PostPGFormProps {
  user: User
}

export function PostPGForm({ user }: PostPGFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    pgName: '',
    location: '',
    price: '',
    beds: '1',
    gender: 'All',
    amenities: [] as string[],
    description: '',
    contactPhone: '',
    landlordName: user.name,
  })
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()

  const amenitiesOptions = ['WiFi', 'Electricity Included', 'Hot Water', 'Laundry', 'Common Kitchen', 'Parking', 'Gym', 'AC']

  const toggleAmenity = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      alert('PG posted successfully! Your listing will be visible after verification.')
      router.push('/dashboard')
      setSubmitting(false)
    }, 1000)
  }

  const handleNext = () => {
    if (step === 1 && !formData.pgName && !formData.location && !formData.price) {
      alert('Please fill in all required fields')
      return
    }
    setStep(step + 1)
  }

  const handlePrev = () => {
    setStep(step - 1)
  }

  return (
    <section className="py-8 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Post Your PG</h1>
          <p className="text-muted-foreground">List your accommodation for ADU students</p>
        </div>

        {/* Progress Steps */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full transition ${
                s <= step ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>

        <Card className="p-8 border-border">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Basic Information</h2>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">PG Name *</label>
                  <Input
                    value={formData.pgName}
                    onChange={(e) => setFormData({ ...formData, pgName: e.target.value })}
                    placeholder="e.g., Student Haven PG"
                    className="py-6"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Location *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g., ADTU gate, Guwahati"
                      className="pl-10 py-6"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Monthly Rent (₹) *</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="5000"
                      className="pl-10 py-6"
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" className="flex-1 border-border text-muted-foreground hover:text-foreground py-6">
                    <Link href="/dashboard">Cancel</Link>
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Room Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Room Details</h2>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Number of Beds/Rooms *</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <select
                      value={formData.beds}
                      onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                      className="w-full pl-10 py-3 border border-border rounded-lg bg-background text-foreground"
                    >
                      {[1, 2, 3, 4, 5].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'bed' : 'beds'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Occupancy Type *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Male', 'Female', 'All'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, gender: type })}
                        className={`py-3 rounded-lg font-medium transition ${
                          formData.gender === type
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">Amenities</label>
                  <div className="grid grid-cols-2 gap-3">
                    {amenitiesOptions.map(amenity => (
                      <label key={amenity} className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          checked={formData.amenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-foreground">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={handlePrev}
                    variant="outline"
                    className="flex-1 border-border text-muted-foreground hover:text-foreground py-6"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Description */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Tell Us More</h2>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your PG, its features, nearby landmarks, etc."
                    rows={6}
                    className="w-full p-4 border border-border rounded-lg bg-background text-foreground resize-none"
                  />
                </div>

                <div className="p-4 bg-secondary/10 rounded-lg border border-secondary">
                  <p className="text-sm text-foreground">
                    <strong>Tip:</strong> Write a detailed description to attract more students. Mention proximity to campus, transport options, and unique features.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={handlePrev}
                    variant="outline"
                    className="flex-1 border-border text-muted-foreground hover:text-foreground py-6"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Contact & Photos */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact & Photos</h2>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Contact Phone Number *</label>
                  <Input
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="py-6"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Landlord Name *</label>
                  <Input
                    value={formData.landlordName}
                    onChange={(e) => setFormData({ ...formData, landlordName: e.target.value })}
                    className="py-6"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-4 block">Upload Photos</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground mb-2">Drag and drop images here</p>
                    <p className="text-xs text-muted-foreground mb-4">or</p>
                    <Button type="button" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      Choose Files
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">JPG, PNG, GIF up to 5MB each</p>
                  </div>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg border border-accent">
                  <div className="flex gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Ready to publish!</p>
                      <p className="text-xs text-muted-foreground">Your PG will be verified and visible within 24 hours.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={handlePrev}
                    variant="outline"
                    className="flex-1 border-border text-muted-foreground hover:text-foreground py-6"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                  >
                    {submitting ? 'Publishing...' : 'Publish PG'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Card>

        {/* Info Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Check className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Free Listing</h3>
            <p className="text-sm text-muted-foreground">No charges to list your PG on UniStay</p>
          </Card>

          <Card className="p-6 border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Verified Students</h3>
            <p className="text-sm text-muted-foreground">Connect with verified ADU students only</p>
          </Card>

          <Card className="p-6 border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Quick Support</h3>
            <p className="text-sm text-muted-foreground">24/7 support for landlords</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

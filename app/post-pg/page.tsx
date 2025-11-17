'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PostPGForm } from '@/components/post-pg-form'

interface User {
  email: string
  name: string
  userType?: string
}

export default function PostPGPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const userData = JSON.parse(storedUser)
      if (userData.userType === 'landlord') {
        setUser(userData)
        setLoading(false)
      } else {
        router.push('/dashboard')
      }
    } else {
      router.push('/auth/signup')
    }
  }, [router])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user) {
    return null
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <PostPGForm user={user} />
      <Footer />
    </main>
  )
}

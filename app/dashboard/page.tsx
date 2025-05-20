'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DashboardPage() {
  const router = useRouter()
  const user = useSelector((state: RootState) => state.user.user)

  useEffect(() => {
    if (!user || !user.email) {
      router.push('/login')
    }
  }, [user, router])

  if (!user || !user.email) return null

  const initials = (user.firstName?.[0] || '') + (user.lastName?.[0] || '')

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9f7f1] via-[#eae4d3] to-[#d4c7aa] dark:from-[#1a1a1a] dark:via-[#2c2c2c] dark:to-[#3a3a3a] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/90 dark:bg-[#2c2c2c]/80 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-[#4b3f29] dark:text-white text-center">
              Welcome back, {user.firstName} {user.lastName}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border shadow-md"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#f5f2ea] dark:bg-[#444] flex items-center justify-center text-xl font-semibold text-[#4b3f29] dark:text-white shadow-inner uppercase">
                {initials || 'NA'}
              </div>
            )}
            <p>{user.email}</p>

            <Link href="/profile">
              <Button variant="outline" className="mt-2 border-[#bfa76f] text-[#4b3f29] dark:text-[#e0e0e0] hover:bg-[#f5f2ea]/40 dark:hover:bg-[#2e2e2e]/40">
                Edit Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  )
}





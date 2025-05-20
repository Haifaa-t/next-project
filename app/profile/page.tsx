'use client'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { useRouter } from 'next/navigation'
import { updateProfile } from '@/store/userSlice'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import toast from 'react-hot-toast'

export default function ProfilePage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.user)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  useEffect(() => {
    if (!user?.email) {
      router.push('/login')
    } else {
      setFirstName(user.firstName || '')
      setLastName(user.lastName || '')
      setProfilePicture(user.profilePicture || '')
    }
  }, [user, router])

  if (!user?.email) return null

  const handleSave = () => {
    dispatch(updateProfile({ firstName, lastName, profilePicture }))
    toast.success('Profile updated')
    setTimeout(() => {
      router.push('/dashboard')
    }, 300)
  }

  const initials = (firstName?.[0] || '') + (lastName?.[0] || '')

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
              Update Your Profile
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex justify-center mb-2">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover border shadow-md"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-[#f5f2ea] dark:bg-[#444] flex items-center justify-center text-xl font-semibold text-[#4b3f29] dark:text-white shadow-inner uppercase">
                  {initials || 'NA'}
                </div>
              )}
            </div>

            <div>
              <Label className="text-[#5c4b2a] dark:text-gray-300">First Name</Label>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 bg-white dark:bg-gray-800"
              />
            </div>

            <div>
              <Label className="text-[#5c4b2a] dark:text-gray-300">Last Name</Label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 bg-white dark:bg-gray-800"
              />
            </div>

            <div>
              <Label className="text-[#5c4b2a] dark:text-gray-300">Profile Picture URL</Label>
              <Input
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
                className="mt-1 bg-white dark:bg-gray-800"
              />
            </div>

            <div className="flex justify-center mt-6">
              <Button
                onClick={handleSave}
                className="px-6 py-2 bg-[#bfa76f] hover:bg-[#a8915e] text-white"
              >
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  )
}



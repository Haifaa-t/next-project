'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '@/store/userSlice'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'user@tamkeen.com' && password === '123456') {
      dispatch(login({ email }))
      toast.success('Login successful!')
      router.push('/dashboard')
    } else {
      toast.error('Invalid credentials')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9f7f1] via-[#eae4d3] to-[#d4c7aa] dark:from-[#1a1a1a] dark:via-[#2c2c2c] dark:to-[#3a3a3a] px-4">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 dark:bg-[#2c2c2c]/80 p-8 rounded-xl shadow-xl w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-[#4b3f29] dark:text-white text-center">Login</h1>

        <div>
          <label className="block text-sm text-[#5c4b2a] dark:text-gray-300 mb-1">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@tamkeen.com"
            className="bg-white dark:bg-gray-800"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-[#5c4b2a] dark:text-gray-300 mb-1">Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="bg-white dark:bg-gray-800"
            required
          />
        </div>

        <Button type="submit" className="w-full bg-[#bfa76f] hover:bg-[#a8915e] text-white">
          Login
        </Button>
      </motion.form>
    </main>
  )
}



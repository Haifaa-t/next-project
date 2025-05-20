'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-[#f9f7f1] via-[#eae4d3] to-[#d4c7aa] dark:from-[#1a1a1a] dark:via-[#2c2c2c] dark:to-[#3a3a3a] text-center px-6 overflow-hidden">


      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#4b3f29] dark:text-white drop-shadow-md mb-6"
      >
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Welcome to the System 
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-xl text-base md:text-lg text-[#5c4b2a] dark:text-[#d0c5ad] mb-8"
      >
        You can edit , view your profile.
      </motion.p>

    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link href="/dashboard">
          <Button className="px-6 py-2 text-base bg-[#bfa76f] hover:bg-[#a8915e] text-white gap-2">
            Login to Access
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </Link>
      </motion.div>
    </main>
  )
}

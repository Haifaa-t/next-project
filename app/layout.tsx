'use client'

import './globals.css'
import Providers from './providers'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
   
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      setIsDark(true)
    } else if (savedTheme === 'light') {
      setIsDark(false)
    } else {
     
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement

    if (isDark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <Toaster position="top-center" />
        <Providers>
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          {children}
        </Providers>
      </body>
    </html>
  )
}




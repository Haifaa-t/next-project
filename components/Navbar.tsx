'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/store/userSlice'
import { RootState } from '@/store'
import { MoonIcon, SunIcon, LogOutIcon } from 'lucide-react'
import { useState } from 'react'
import LogoutDialog from './LogoutDialog'

interface NavbarProps {
  isDark: boolean
  setIsDark: (val: boolean) => void
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.user)
  const [showLogout, setShowLogout] = useState(false)

  const isActive = (path: string) =>
    pathname === path
      ? 'bg-[#f5f2ea] text-[#4b3f29] font-semibold rounded px-3 py-1 dark:bg-[#333] dark:text-white'
      : 'text-[#4b3f29] hover:text-[#7a6a42] px-3 py-1 dark:text-gray-200 dark:hover:text-white transition'

  const navBg = isDark
    ? 'bg-[#1a1a1a] text-white border-b border-white/10'
    : 'bg-[#f9f7f1] text-[#4b3f29] border-b border-[#eae4d3]'

  return (
    <nav className={`flex items-center justify-between px-6 py-4 shadow-sm ${navBg}`}>
      <div className="flex gap-4 items-center">
        <Link href="/" className={isActive('/')}>Home</Link>
        <Link href="/contact" className={isActive('/contact')}>Contact</Link>
        {user?.email && (
          <>
            <Link href="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
            <Link href="/profile" className={isActive('/profile')}>Profile</Link>
          </>
        )}
      </div>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-2 text-sm font-medium"
        >
          {isDark ? (
            <>
              <MoonIcon className="w-4 h-4" />
              Dark
            </>
          ) : (
            <>
              <SunIcon className="w-4 h-4" />
              Light
            </>
          )}
        </button>

        {user?.email && (
          <>
            <button
              onClick={() => setShowLogout(true)}
              className="flex items-center gap-1 text-sm text-[#bfa76f] hover:underline dark:text-[#d6ba89]"
            >
              <LogOutIcon className="w-4 h-4" />
              Logout
            </button>
            <LogoutDialog
              isOpen={showLogout}
              onClose={() => setShowLogout(false)}
              onConfirm={() => {
                dispatch(logout())
                setShowLogout(false)
                router.push('/login')
              }}
            />
          </>
        )}
      </div>
    </nav>
  )
}

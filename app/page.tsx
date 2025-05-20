import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the System. Manage your profile.',
}

export default function HomePage() {
  return <HomeContent />
}

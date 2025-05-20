
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Access your personalized dashboard by logging in securely.',
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}



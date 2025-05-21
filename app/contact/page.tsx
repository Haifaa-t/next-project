'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface Contact {
  id: number
  name: string
  email: string
  phone: string
}

export default function ContactPage() {
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(() => setContacts([]))
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f9f7f1] via-[#eae4d3] to-[#d4c7aa] dark:from-[#1a1a1a] dark:via-[#2c2c2c] dark:to-[#3a3a3a] text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#4b3f29] dark:text-[#f5f5f5] mb-4"
      >
        Contact
      </motion.h1>

     
      <div className="grid gap-6 w-full max-w-2xl">
        {contacts.map(contact => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: contact.id * 0.2 }}
          >
            <Card className="bg-white/90 dark:bg-[#2c2c2c]/70 border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-[#4b3f29] dark:text-white">
                  {contact.name}
                </CardTitle>
              </CardHeader>
              <Separator className="mb-2" />
              <CardContent className="text-left text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  )
}

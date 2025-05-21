
export async function GET() {
  const fakeContacts = [
    {
      id: 1,
      name: 'IT Support',
      email: 'it@tamkeen.com',
      phone: '+966-555-123456',
    },
    {
      id: 2,
      name: 'HR Department',
      email: 'hr@tamkeen.com',
      phone: '+966-555-654321',
    },
  ]

  return Response.json(fakeContacts)
}

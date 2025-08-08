import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

export function BookingHistory() {
  const bookings = [
    {
      id: 'B001',
      type: 'Mehmonxona',
      name: 'Hyatt Regency Tashkent',
      date: '2023-10-15',
      status: 'Tasdiqlangan',
      amount: '200$',
    },
    {
      id: 'B002',
      type: 'Transport',
      name: 'Afrosiyob (Toshkent-Samarqand)',
      date: '2023-10-10',
      status: 'Yakunlangan',
      amount: '25$',
    },
    {
      id: 'B003',
      type: 'Restoran',
      name: 'Osh Markazi',
      date: '2023-10-05',
      status: 'Bekor qilingan',
      amount: '30$',
    },
    {
      id: 'B004',
      type: 'Mehmonxona',
      name: 'Minzifa Hotel Bukhara',
      date: '2023-09-28',
      status: 'Tasdiqlangan',
      amount: '90$',
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bronlar tarixi</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Turi</TableHead>
              <TableHead>Nomi</TableHead>
              <TableHead>Sana</TableHead>
              <TableHead>Holati</TableHead>
              <TableHead className="text-right">Miqdori</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>{booking.type}</TableCell>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      booking.status === 'Tasdiqlangan'
                        ? 'default'
                        : booking.status === 'Yakunlangan'
                        ? 'secondary'
                        : 'destructive'
                    }
                  >
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{booking.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

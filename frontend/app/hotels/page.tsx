import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function HotelsPage() {
  const hotels = [
    {
      id: 'hyatt-regency-tashkent',
      name: 'Hyatt Regency Tashkent',
      location: 'Toshkent',
      rating: 5,
      price: '200$',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 'silk-road-samarkand',
      name: 'Silk Road Samarkand',
      location: 'Samarqand',
      rating: 5,
      price: '180$',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 'minzifa-hotel-bukhara',
      name: 'Minzifa Hotel Bukhara',
      location: 'Buxoro',
      rating: 4.5,
      price: '90$',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 'asia-khiva',
      name: 'Asia Khiva Hotel',
      location: 'Xiva',
      rating: 4,
      price: '70$',
      image: '/placeholder.svg?height=200&width=300',
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Mehmonxonalar</h1>
      <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        O'zbekistonning eng yaxshi mehmonxonalarida qulay va unutilmas dam oling.
        Har bir sayohatchi uchun mos variantlar mavjud.
      </p>

      <div className="max-w-xl mx-auto mb-10 relative">
        <Input
          type="text"
          placeholder="Manzil yoki mehmonxona nomini qidiring..."
          className="w-full py-3 pl-12 pr-4 rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/hotels/${hotel.id}`}>
              <div className="relative w-full h-48">
                <Image
                  src={hotel.image || "/placeholder.svg"}
                  alt={hotel.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{hotel.name}</CardTitle>
                <CardDescription>
                  {hotel.location} &bull; {hotel.rating} yulduz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{hotel.price} / tun</span>
                  <Button size="sm">Bron qilish</Button>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Sizning ideal mehmonxonangizni toping</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Bizning keng tanlovimiz bilan sayohatingiz uchun eng mos joyni toping.
        </p>
        <Button variant="outline" size="lg">Barcha mehmonxonalar</Button>
      </div>
    </div>
  )
}

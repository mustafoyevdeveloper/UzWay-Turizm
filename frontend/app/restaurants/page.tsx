import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function RestaurantsPage() {
  const restaurants = [
    {
      id: 'plov-center',
      name: 'Osh Markazi',
      cuisine: 'O\'zbek oshxonasi',
      location: 'Toshkent',
      rating: 4.8,
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 'afsona',
      name: 'Afsona',
      cuisine: 'Yevropa va O\'zbek',
      location: 'Samarqand',
      rating: 4.5,
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 'old-bukhara',
      name: 'Old Bukhara',
      cuisine: 'Buxoro oshxonasi',
      location: 'Buxoro',
      rating: 4.7,
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 'caravan',
      name: 'Caravan',
      cuisine: 'O\'zbek va Sharq',
      location: 'Toshkent',
      rating: 4.6,
      image: '/placeholder.svg?height=200&width=300',
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Restoranlar</h1>
      <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        O'zbekistonning eng yaxshi restoranlarida mazali taomlardan bahramand bo'ling.
        Milliy va xalqaro oshxonalar sizni kutmoqda!
      </p>

      <div className="max-w-xl mx-auto mb-10 relative">
        <Input
          type="text"
          placeholder="Restoran yoki oshxonani qidiring..."
          className="w-full py-3 pl-12 pr-4 rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/restaurants/${restaurant.id}`}>
              <div className="relative w-full h-48">
                <Image
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{restaurant.name}</CardTitle>
                <CardDescription>
                  {restaurant.cuisine} &bull; {restaurant.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="text-yellow-500 mr-1">★</span> {restaurant.rating}
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">O'zbek oshxonasini kashf eting</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Bizning platformamiz orqali eng yaxshi milliy taomlarni taklif qiluvchi joylarni toping.
        </p>
        <Button variant="outline" size="lg">Barcha restoranlar</Button>
      </div>
    </div>
  )
}

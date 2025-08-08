import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function HomePage() {
  const featuredDestinations = [
    {
      name: 'Samarqand',
      description: 'Buyuk Ipak Yo\'li durdonasi',
      image: '/samarkand-registan.png',
      link: '/destinations/samarkand',
    },
    {
      name: 'Buxoro',
      description: 'Qadimiy shahar-muzey',
      image: '/bukhara-old-city.png',
      link: '/destinations/bukhara',
    },
    {
      name: 'Xiva',
      description: 'Ochiq osmon ostidagi muzey',
      image: '/khiva-ichon-qala.png',
      link: '/destinations/khiva',
    },
  ]

  const services = [
    {
      name: 'Mehmonxonalar',
      description: 'Eng yaxshi mehmonxonalarni toping',
      icon: '/hotel-icon.png',
      link: '/hotels',
    },
    {
      name: 'Restoranlar',
      description: 'Mazali taomlar uchun joylar',
      icon: '/placeholder-fdsg4.png',
      link: '/restaurants',
    },
    {
      name: 'Transport',
      description: 'Sayohat uchun qulay transport',
      icon: '/transport-icon.png',
      link: '/transport',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/abstract-geometric-shapes.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="relative z-20 p-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            O'zbekiston bo'ylab unutilmas sayohatlar
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Mehmonxonalar, restoranlar, transport va mahalliy xizmatlarni bir joyda toping.
          </p>
          <div className="relative w-full max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Qidiruv..."
              className="w-full py-3 pl-12 pr-4 rounded-full text-black bg-white shadow-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <Button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full px-6 py-2">
              Qidirish
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Mashhur Manzillar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href={destination.link}>
                  <div className="relative w-full h-60">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{destination.name}</CardTitle>
                    <CardDescription>{destination.description}</CardDescription>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Bizning Xizmatlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href={service.link}>
                  <div className="flex justify-center mb-4">
                    <Image src={service.icon || "/placeholder.svg"} alt={service.name} width={48} height={48} />
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{service.name}</CardTitle>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sayohatingizni hoziroq rejalashtiring!</h2>
          <p className="text-lg mb-8">
            UzWay bilan O'zbekistonning go'zal joylarini kashf eting.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/destinations">Manzillarni ko'rish</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

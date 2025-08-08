import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from 'next/link'

export default function DestinationsPage() {
  const destinations = [
    {
      id: 'samarkand',
      name: 'Samarqand',
      description: 'Buyuk Ipak Yo\'li durdonasi, qadimiy me\'moriy yodgorliklar shahri.',
      image: '/samarkand-registan.png',
    },
    {
      id: 'bukhara',
      name: 'Buxoro',
      description: 'Ming yillik tarixga ega, Islom madaniyatining markazi.',
      image: '/bukhara-old-city.png',
    },
    {
      id: 'khiva',
      name: 'Xiva',
      description: 'Ochiq osmon ostidagi muzey, Ichon-Qal\'a bilan mashhur.',
      image: '/khiva-ichon-qala.png',
    },
    {
      id: 'tashkent',
      name: 'Toshkent',
      description: 'O\'zbekiston poytaxti, zamonaviy va qadimiy uyg\'unlik.',
      image: '/placeholder-7kwyb.png',
    },
    {
      id: 'shakhrisabz',
      name: 'Shahrisabz',
      description: 'Amir Temurning vatani, tarixiy obidalar shahri.',
      image: '/shakhrisabz-ak-saray.png',
    },
    {
      id: 'fergana-valley',
      name: 'Farg\'ona vodiysi',
      description: 'Hunarmandchilik va tabiat go\'zalliklari bilan mashhur hudud.',
      image: '/placeholder.svg?height=300&width=400',
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">O'zbekiston Manzillari</h1>
      <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        O'zbekistonning boy tarixi, madaniyati va go'zal tabiatini kashf eting.
        Har bir manzil o'ziga xos jozibaga ega.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/destinations/${destination.id}`}>
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

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Sayohatingizni rejalashtiring</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Bizning platformamiz orqali eng yaxshi mehmonxonalar, restoranlar va transport xizmatlarini toping.
        </p>
        <Button variant="outline" size="lg">Bron qilish</Button>
      </div>
    </div>
  )
}

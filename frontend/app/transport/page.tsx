'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Train, Bus, Car, MapPin, Clock, Calendar, Users, ArrowRight, Search } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import { DatePicker } from "@/components/ui/date-picker" // Import DatePicker
import Link from 'next/link'

export default function TransportPage() {
  const [trainDate, setTrainDate] = useState<Date | undefined>(undefined)
  const [busDate, setBusDate] = useState<Date | undefined>(undefined)
  const [carPickupDate, setCarPickupDate] = useState<Date | undefined>(undefined)
  const [carReturnDate, setCarReturnDate] = useState<Date | undefined>(undefined)

  const trainRoutes = [
    {
      id: 1,
      from: "Toshkent",
      to: "Samarqand",
      departure: "08:00",
      arrival: "10:30",
      duration: "2h 30min",
      price: 85000,
      trainNumber: "O'zbekiston 001",
      class: "Ekonom",
      availableSeats: 45
    },
    {
      id: 2,
      from: "Toshkent",
      to: "Buxoro",
      departure: "14:15",
      arrival: "18:45",
      duration: "4h 30min",
      price: 120000,
      trainNumber: "Sharq 205",
      class: "Biznes",
      availableSeats: 12
    }
  ]

  const busRoutes = [
    {
      id: 1,
      from: "Toshkent",
      to: "Xiva",
      departure: "07:00",
      arrival: "15:30",
      duration: "8h 30min",
      price: 65000,
      company: "Xorazm Express",
      busType: "Komfort",
      availableSeats: 28
    },
    {
      id: 2,
      from: "Samarqand",
      to: "Buxoro",
      departure: "09:30",
      arrival: "12:00",
      duration: "2h 30min",
      price: 45000,
      company: "Silk Road",
      busType: "Standart",
      availableSeats: 15
    }
  ]

  const carRentals = [
    {
      id: 1,
      brand: "Chevrolet Lacetti",
      type: "Sedan",
      year: 2022,
      pricePerDay: 250000,
      fuel: "Benzin",
      transmission: "Avtomat",
      seats: 5,
      image: "White Chevrolet Lacetti sedan car for rental",
      features: ["Konditsioner", "GPS", "Bluetooth"]
    },
    {
      id: 2,
      brand: "Toyota Camry",
      type: "Biznes",
      year: 2023,
      pricePerDay: 450000,
      fuel: "Benzin",
      transmission: "Avtomat",
      seats: 5,
      image: "Black Toyota Camry business class car",
      features: ["Premium salon", "Konditsioner", "GPS", "Wi-Fi"]
    }
  ]

  const transportOptions = [
    {
      id: 'afrosiyob',
      name: 'Afrosiyob Tezyurar Poyezdi',
      type: 'Poyezd',
      route: 'Toshkent - Samarqand - Buxoro',
      description: 'O\'zbekistonning asosiy shaharlari orasida tez va qulay sayohat.',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 'taxi-service',
      name: 'Shaxsiy taksi xizmati',
      type: 'Taksi',
      route: 'Shaharlararo',
      description: 'Qulay va xavfsiz shaxsiy taksi xizmatlari.',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 'bus-routes',
      name: 'Shaharlararo avtobuslar',
      type: 'Avtobus',
      route: 'Butun O\'zbekiston bo\'ylab',
      description: 'O\'zbekistonning barcha hududlariga arzon va keng tarmoqli avtobus qatnovlari.',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 'car-rental',
      name: 'Avtomobil ijarasi',
      type: 'Avtomobil',
      route: 'O\'zbekiston bo\'ylab',
      description: 'Sayohat erkinligi uchun turli xil avtomobillarni ijaraga oling.',
      image: '/placeholder.svg?height=200&width=300',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      {/* Header */}
      <div className="bg-white dark:bg-card border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Transport xizmatlari</h1>
          <p className="text-gray-600 dark:text-muted-foreground">Poyezd, avtobus va mashina ijarasi xizmatlarini bron qiling</p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Transport</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          O'zbekiston bo'ylab sayohat qilish uchun eng qulay va ishonchli transport variantlarini toping.
          Poyezdlar, taksilar, avtobuslar va avtomobil ijarasi.
        </p>

        <div className="max-w-xl mx-auto mb-10 relative">
          <Input
            type="text"
            placeholder="Transport turini yoki marshrutni qidiring..."
            className="w-full py-3 pl-12 pr-4 rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transportOptions.map((option) => (
            <Card key={option.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/transport/${option.id}`}>
                <div className="relative w-full h-48">
                  <Image
                    src={option.image || "/placeholder.svg"}
                    alt={option.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{option.name}</CardTitle>
                  <CardDescription>
                    {option.type} &bull; {option.route}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Sayohat rejangizni tuzing</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Bizning transport xizmatlarimiz bilan O'zbekistonni bemalol kezib chiqing.
          </p>
          <Button variant="outline" size="lg">Transport bron qilish</Button>
        </div>

        <Tabs defaultValue="train" className="w-full mt-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="train" className="flex items-center gap-2">
              <Train className="h-4 w-4" />
              Poyezd
            </TabsTrigger>
            <TabsTrigger value="bus" className="flex items-center gap-2">
              <Bus className="h-4 w-4" />
              Avtobus
            </TabsTrigger>
            <TabsTrigger value="car" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              Mashina ijarasi
            </TabsTrigger>
          </TabsList>

          {/* Train Tab */}
          <TabsContent value="train">
            {/* Search Form */}
            <Card className="p-6 mb-8">
              <div className="grid md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Qayerdan</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-muted-foreground h-4 w-4" />
                    <Input placeholder="Shahar tanlang" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Qayerga</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-muted-foreground h-4 w-4" />
                    <Input placeholder="Shahar tanlang" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sana</label>
                  <DatePicker date={trainDate} setDate={setTrainDate} placeholder="Sana tanlang" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Yo'lovchilar</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-muted-foreground h-4 w-4" />
                    <Input placeholder="1 kishi" className="pl-10" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    Qidirish
                  </Button>
                </div>
              </div>
            </Card>

            {/* Train Results */}
            <div className="space-y-4">
              {trainRoutes.map((route) => (
                <Card key={route.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{route.departure}</div>
                          <div className="text-gray-500 dark:text-muted-foreground">{route.from}</div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-16 h-px bg-gray-300 dark:bg-muted-foreground/30"></div>
                          <Train className="h-5 w-5 text-blue-500" />
                          <div className="w-16 h-px bg-gray-300 dark:bg-muted-foreground/30"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-2xl font-bold">{route.arrival}</div>
                          <div className="text-gray-500 dark:text-muted-foreground">{route.to}</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm text-gray-500 dark:text-muted-foreground">Davomiyligi</div>
                          <div className="font-medium">{route.duration}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-muted-foreground mb-1">{route.trainNumber}</div>
                        <Badge variant="secondary" className="mb-2">{route.class}</Badge>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                          {route.price.toLocaleString()} so'm
                        </div>
                        <div className="text-sm text-gray-500 dark:text-muted-foreground mb-3">
                          {route.availableSeats} ta joy qoldi
                        </div>
                        <Button>
                          Tanlash
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Bus Tab */}
          <TabsContent value="bus">
            {/* Search Form - Similar to train */}
            <Card className="p-6 mb-8">
              <div className="grid md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Qayerdan</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-muted-foreground h-4 w-4" />
                    <Input placeholder="Shahar tanlang" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Qayerga</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-muted-foreground h-4 w-4" />
                    <Input placeholder="Shahar tanlang" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sana</label>
                  <DatePicker date={busDate} setDate={setBusDate} placeholder="Sana tanlang" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Yo'lovchilar</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-muted-foreground h-4 w-4" />
                    <Input placeholder="1 kishi" className="pl-10" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    Qidirish
                  </Button>
                </div>
              </div>
            </Card>

            {/* Bus Results */}
            <div className="space-y-4">
              {busRoutes.map((route) => (
                <Card key={route.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{route.departure}</div>
                          <div className="text-gray-500 dark:text-muted-foreground">{route.from}</div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-16 h-px bg-gray-300 dark:bg-muted-foreground/30"></div>
                          <Bus className="h-5 w-5 text-blue-500" />
                          <div className="w-16 h-px bg-gray-300 dark:bg-muted-foreground/30"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-2xl font-bold">{route.arrival}</div>
                          <div className="text-gray-500 dark:text-muted-foreground">{route.to}</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm text-gray-500 dark:text-muted-foreground">Davomiyligi</div>
                          <div className="font-medium">{route.duration}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-muted-foreground mb-1">{route.company}</div>
                        <Badge variant="secondary" className="mb-2">{route.busType}</Badge>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                          {route.price.toLocaleString()} so'm
                        </div>
                        <div className="text-sm text-gray-500 dark:text-muted-foreground mb-3">
                          {route.availableSeats} ta joy qoldi
                        </div>
                        <Button>
                          Tanlash
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Car Rental Tab */}
          <TabsContent value="car">
            {/* Search Form */}
            <Card className="p-6 mb-8">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Olish joyi</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-muted-foreground h-4 w-4" />
                    <Input placeholder="Shahar tanlang" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Olish sanasi</label>
                  <DatePicker date={carPickupDate} setDate={setCarPickupDate} placeholder="Sana tanlang" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Qaytarish sanasi</label>
                  <DatePicker date={carReturnDate} setDate={setCarReturnDate} placeholder="Sana tanlang" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    Qidirish
                  </Button>
                </div>
              </div>
            </Card>

            {/* Car Results */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carRentals.map((car) => (
                <Card key={car.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=300&width=400&query=${car.image}`}
                      alt={car.brand}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-1">{car.brand}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-muted-foreground">
                        <Badge variant="secondary">{car.type}</Badge>
                        <span>{car.year}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 dark:text-muted-foreground mb-4">
                      <div className="flex justify-between">
                        <span>Yoqilg'i:</span>
                        <span>{car.fuel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Uzatma:</span>
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>O'rindiqlar:</span>
                        <span>{car.seats} kishi</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {car.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {car.pricePerDay.toLocaleString()} so'm
                      </div>
                      <div className="text-sm text-gray-500 dark:text-muted-foreground mb-4">kuniga</div>
                      <Button className="w-full">
                        Ijaraga olish
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Globe, Award } from 'lucide-react'
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function CareersPage() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Heart,
      title: 'Sog\'liqni saqlash',
      description: 'To\'liq tibbiy sug\'urta va sog\'liqni saqlash dasturlari'
    },
    {
      icon: Zap,
      title: 'Professional rivojlanish',
      description: 'Treninglar, kurslar va konferentsiyalarga qatnashish imkoniyati'
    },
    {
      icon: Globe,
      title: 'Moslashuvchan ish rejimi',
      description: 'Uzoq ish va moslashuvchan ish vaqti imkoniyatlari'
    },
    {
      icon: Award,
      title: 'Raqobatbardosh maosh',
      description: 'Bozor darajasidagi maosh va bonuslar tizimi'
    }
  ]

  const jobOpenings = [
    {
      id: 1,
      title: 'Full-stack Dasturchi',
      location: 'Toshkent, O\'zbekiston',
      type: 'To\'liq stavka',
      description: 'Next.js, Node.js va PostgreSQL bilan ishlash tajribasiga ega bo\'lgan tajribali dasturchi qidirilmoqda.',
    },
    {
      id: 2,
      title: 'UX/UI Dizayner',
      location: 'Toshkent, O\'zbekiston',
      type: 'To\'liq stavka',
      description: 'Foydalanuvchi interfeysini loyihalash va foydalanuvchi tajribasini yaxshilash bo\'yicha tajribaga ega dizayner.',
    },
    {
      id: 3,
      title: 'Marketing Mutaxassisi',
      location: 'Masofaviy',
      type: 'To\'liq stavka',
      description: 'Raqamli marketing strategiyalarini ishlab chiqish va amalga oshirish bo\'yicha mutaxassis.',
    },
  ]

  const companyValues = [
    'Innovatsiya va ijodkorlik',
    'Jamoaviy ishlash',
    'Mijozlarga e\'tibor',
    'Doimiy o\'rganish',
    'Ochiqlik va halollik'
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6">
            {t('page.careers.title')}
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            UzWay jamoasiga qo'shiling
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            O'zbekiston sayohat industriyasini o'zgartirishda bizga yordam bering. 
            Innovatsion muhitda ishlang va karyerangizni rivojlantiring.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600">
            Ochiq pozitsiyalarni ko'rish
          </Button>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Bizning madaniyatimiz</h2>
              <p className="text-lg text-muted-foreground mb-6">
                UzWay da biz innovatsiya, hamkorlik va doimiy o'sishni qadrlaydi. 
                Bizning jamoamiz turli xil tajribaga ega mutaxassislardan iborat.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Har bir jamoa a'zosi o'z g'oyalarini baham ko'rishi va kompaniya 
                rivojlanishiga hissa qo'shishi uchun imkoniyat yaratamiz.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold mb-4">Bizning qadriyatlarimiz:</h3>
                {companyValues.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <Image
                src="/abstract-geometric-shapes.png?height=400&width=600&query=Modern office team collaboration and innovation"
                alt="UzWay jamoasi"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nima uchun UzWay?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bizning xodimlarimiz uchun eng yaxshi sharoitlar yaratamiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ochiq pozitsiyalar</h2>
            <p className="text-xl text-muted-foreground">
              Bizga mos keluvchi pozitsiyani toping va ariza yuboring
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{job.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{job.location} &bull; {job.type}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <Button asChild>
                    <Link href={`/careers/${job.id}`}>Batafsil</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ariza berish jarayoni</h2>
            <p className="text-xl text-muted-foreground">
              Qadamlar bo'yicha ariza berish jarayoni
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Ariza yuborish',
                description: 'CV va qo\'shimcha hujjatlaringizni yuboring'
              },
              {
                step: '02',
                title: 'Dastlabki ko\'rik',
                description: 'HR mutaxassisi bilan qisqa suhbat'
              },
              {
                step: '03',
                title: 'Texnik intervyu',
                description: 'Mutaxassislar bilan chuqur suhbat'
              },
              {
                step: '04',
                title: 'Yakuniy qaror',
                description: 'Natija va keyingi qadamlar haqida xabar'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Bizga qo'shilishga tayyormisiz?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agar siz innovatsion loyihalar ustida ishlashni va O'zbekiston sayohat 
            industriyasini rivojlantirishni istasangiz, biz sizni kutamiz!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Ochiq pozitsiyalarni ko'rish
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Savollaringiz bormi?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

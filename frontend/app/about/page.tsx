'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Globe, Heart, Zap } from 'lucide-react'
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const stats = [
    { number: '50,000+', label: 'Foydalanuvchilar', icon: Users },
    { number: '1,200+', label: 'Mehmonxonalar', icon: Target },
    { number: '800+', label: 'Restoranlar', icon: Award },
    { number: '14', label: 'Viloyatlar', icon: Globe }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Mijozlar uchun g\'amxo\'rlik',
      description: 'Har bir mijozimizning sayohat tajribasi bizning ustuvor vazifamizdir'
    },
    {
      icon: Zap,
      title: 'Innovatsiya',
      description: 'Zamonaviy texnologiyalar yordamida sayohatni osonlashtirish'
    },
    {
      icon: Globe,
      title: 'Mahalliy hamkorlik',
      description: 'O\'zbekistonning barcha hududlarida mahalliy biznes bilan hamkorlik'
    }
  ]

  const team = [
    {
      name: 'Aziz Karimov',
      position: 'Asoschisi va CEO',
      image: 'Professional CEO portrait in modern office setting',
      description: 'IT sohasida 15 yillik tajriba. Sayohat industriyasini raqamlashtirish bo\'yicha ekspert.'
    },
    {
      name: 'Malika Toshmatova',
      position: 'CTO',
      image: 'Female technology executive in modern workspace',
      description: 'Texnologiya bo\'yicha rahbar. Platformaning texnik tomonini boshqaradi.'
    },
    {
      name: 'Bobur Rahimov',
      position: 'Marketing direktori',
      image: 'Marketing director in creative office environment',
      description: 'Marketing va brendlash bo\'yicha mutaxassis. Kompaniya brendini rivojlantiradi.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6">
            {t('page.about.title')}
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            UzWay haqida
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Biz O'zbekistonning go'zal joylarini dunyoga tanishtirishni va sayohatni har kim uchun 
            oson hamda qiziqarli qilishni maqsad qilganmiz.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Bizning missiyamiz</h2>
              <p className="text-lg text-muted-foreground mb-6">
                UzWay - bu O'zbekiston bo'ylab sayohat qilishni osonlashtiruvchi zamonaviy platforma. 
                Biz har bir sayohatchi uchun unutilmas tajriba yaratishga intilamiz.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Platformamiz orqali siz mehmonxonalar, restoranlar, transport va mahalliy xizmatlarni 
                osongina topishingiz va bron qilishingiz mumkin.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Sayohat</Badge>
                <Badge variant="secondary">Texnologiya</Badge>
                <Badge variant="secondary">Innovatsiya</Badge>
                <Badge variant="secondary">O'zbekiston</Badge>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <Image
                src="/abstract-geometric-shapes.png?height=400&width=600&query=Modern office team working on travel platform"
                alt="UzWay jamoasi"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Bizning qadriyatlarimiz</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Biz quyidagi tamoyillar asosida ishlaymiz va rivojlanamiz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Bizning jamoa</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tajribali mutaxassislar jamoasi UzWay platformasini rivojlantiradi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=300&width=300&query=${member.image}`}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Bizning tariximiz</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: '2022',
                  title: 'Kompaniya tashkil etildi',
                  description: 'UzWay g\'oyasi tug\'ildi va dastlabki jamoa yig\'ildi'
                },
                {
                  year: '2023',
                  title: 'Beta versiya ishga tushirildi',
                  description: 'Birinchi foydalanuvchilar platformani sinab ko\'rdilar'
                },
                {
                  year: '2024',
                  title: 'Rasmiy ishga tushirish',
                  description: 'To\'liq funksional platforma barcha uchun ochildi'
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{milestone.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                UzWay O'zbekiston bo'ylab sayohat qilishni osonlashtirish maqsadida tashkil etilgan. Bizning platformamiz
                sizga mehmonxonalar, restoranlar, transport va mahalliy xizmatlarni bir joyda topish imkonini beradi.
                Biz har bir sayohatchining ehtiyojlarini qondirishga intilamiz.
              </p>
              <p className="text-lg text-muted-foreground">
                Bizning jamoamiz sayohatga ishtiyoqli mutaxassislardan iborat bo'lib, sizga eng yaxshi tajribani taqdim etish uchun
                doimiy ravishda ishlamoqda. Biz O'zbekistonning boy madaniyati va go'zal tabiatini kashf etishingizga yordam berishdan faxrlanamiz.
              </p>
              <p className="text-lg text-muted-foreground">
                Bizning maqsadimiz - sayohatchilar uchun ishonchli va qulay xizmat ko'rsatish, shuningdek, mahalliy bizneslarni qo'llab-quvvatlash.
                UzWay bilan O'zbekistonning har bir burchagini kashf eting!
              </p>
            </div>
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/uzbekistan-registan-square.png"
                alt="Registan Square, Samarkand"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Backend API call will be here
    console.log('Contact form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Manzil',
      details: ['Toshkent shahar, Yunusobod tumani', 'Amir Temur ko\'chasi, 108-uy']
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+998 71 123 45 67', '+998 90 123 45 67']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@uzway.uz', 'support@uzway.uz']
    },
    {
      icon: Clock,
      title: 'Ish vaqti',
      details: ['Dushanba - Juma: 9:00 - 18:00', 'Shanba: 9:00 - 14:00']
    }
  ]

  const departments = [
    {
      name: 'Umumiy savollar',
      email: 'info@uzway.uz',
      description: 'Platformamiz haqida umumiy ma\'lumotlar'
    },
    {
      name: 'Texnik qo\'llab-quvvatlash',
      email: 'support@uzway.uz',
      description: 'Texnik muammolar va yordam'
    },
    {
      name: 'Hamkorlik',
      email: 'partners@uzway.uz',
      description: 'Biznes hamkorligi va takliflar'
    },
    {
      name: 'Media va matbuot',
      email: 'press@uzway.uz',
      description: 'Matbuot xizmati va media so\'rovlari'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6">
            {t('page.contact.title')}
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Biz bilan bog'laning
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Savollaringiz bormi? Takliflaringiz bormi? Biz sizdan eshitishni xohlaymiz!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Xabar yuborish
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">To'liq ism</Label>
                      <Input
                        id="name"
                        placeholder="Ismingizni kiriting"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email manzil</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon raqam</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+998 90 123 45 67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Mavzu</Label>
                      <Input
                        id="subject"
                        placeholder="Xabar mavzusi"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Xabar</Label>
                    <Textarea
                      id="message"
                      placeholder="Xabaringizni yozing..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Xabar yuborish
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Aloqa ma'lumotlari</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bo'limlar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                    <h3 className="font-semibold mb-1">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                    <a href={`mailto:${dept.email}`} className="text-sm text-primary hover:underline">
                      {dept.email}
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Additional Contact Information */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Boshqa aloqa usullari</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
              <div className="p-6 border rounded-lg shadow-sm flex-1">
                <h3 className="text-xl font-semibold mb-3">Telefon</h3>
                <p className="text-muted-foreground">+998 90 123 45 67</p>
              </div>
              <div className="p-6 border rounded-lg shadow-sm flex-1">
                <h3 className="text-xl font-semibold mb-3">Manzil</h3>
                <p className="text-muted-foreground">Toshkent, O'zbekiston</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tez-tez so'raladigan savollar</h2>
            <p className="text-muted-foreground">
              Eng ko'p so'raladigan savollar va javoblar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: 'UzWay platformasi qanday ishlaydi?',
                answer: 'UzWay orqali siz O\'zbekiston bo\'ylab sayohat rejalashtirish, mehmonxonalar va restoranlarni topish, transport xizmatlarini bron qilish mumkin.'
              },
              {
                question: 'Bron qilish xavfsizmi?',
                answer: 'Ha, bizning platformamiz eng zamonaviy xavfsizlik texnologiyalaridan foydalanadi va barcha to\'lovlar himoyalangan.'
              },
              {
                question: 'Bekor qilish siyosati qanday?',
                answer: 'Har bir xizmat uchun alohida bekor qilish shartlari mavjud. Batafsil ma\'lumotni bron qilish vaqtida ko\'rishingiz mumkin.'
              },
              {
                question: 'Qo\'llab-quvvatlash xizmati qachon ishlaydi?',
                answer: 'Bizning qo\'llab-quvvatlash jamoamiz dushanba-jumadan 9:00-18:00 gacha, shanbada 9:00-14:00 gacha ishlaydi.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

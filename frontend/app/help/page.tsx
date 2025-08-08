'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, MessageCircle, Phone, Mail, Book, CreditCard, MapPin, Users } from 'lucide-react'
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export default function HelpPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')

  const helpCategories = [
    {
      icon: Book,
      title: 'Boshlash',
      description: 'Platformadan foydalanishni boshlash',
      articles: 12
    },
    {
      icon: CreditCard,
      title: 'To\'lovlar',
      description: 'To\'lov va bron qilish masalalari',
      articles: 8
    },
    {
      icon: MapPin,
      title: 'Sayohat',
      description: 'Yo\'nalishlar va sayohat rejalari',
      articles: 15
    },
    {
      icon: Users,
      title: 'Hisob',
      description: 'Profil va hisob sozlamalari',
      articles: 6
    }
  ]

  const faqs = [
    {
      question: 'UzWay nima?',
      answer: 'UzWay O\'zbekiston bo\'ylab sayohat qilishni osonlashtiradigan platforma bo\'lib, mehmonxonalar, restoranlar, transport va mahalliy xizmatlarni bir joyda topish imkonini beradi.',
    },
    {
      question: 'Qanday qilib bron qilishim mumkin?',
      answer: 'Siz qidiruv maydonidan foydalanib, kerakli xizmatni topishingiz va keyin bron qilish tugmasini bosishingiz mumkin. Jarayon juda oddiy va qulay.',
    },
    {
      question: 'To\'lov usullari qanday?',
      answer: 'Biz turli xil to\'lov usullarini qabul qilamiz, jumladan, kredit kartalar, bank o\'tkazmalari va mahalliy to\'lov tizimlari.',
    },
    {
      question: 'Bronimni bekor qila olamanmi?',
      answer: 'Ha, siz broningizni bekor qilishingiz mumkin. Bekor qilish siyosati xizmat turiga va bron shartlariga bog\'liq bo\'ladi. Batafsil ma\'lumotni bron qilish sahifasida topishingiz mumkin.',
    },
    {
      question: 'Qo\'llab-quvvatlash xizmati bilan qanday bog\'lanishim mumkin?',
      answer: 'Siz biz bilan aloqa sahifasidagi shakl orqali yoki ko\'rsatilgan telefon raqamlari orqali bog\'lanishingiz mumkin.',
    },
  ]

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Onlayn chat',
      description: '24/7 jonli yordam',
      action: 'Chatni boshlash',
      available: true
    },
    {
      icon: Phone,
      title: 'Telefon',
      description: '+998 71 123 45 67',
      action: 'Qo\'ng\'iroq qilish',
      available: true
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'support@uzway.uz',
      action: 'Email yuborish',
      available: true
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6">
            {t('page.help.title')}
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Yordam markazi
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sizga kerakli javoblarni toping yoki bizning yordam jamoamiz bilan bog'laning
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Savolingizni yozing..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Help Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Yordam bo'limlari</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                    <Badge variant="secondary">{category.articles} maqola</Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tez-tez so'raladigan savollar</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Biz bilan bog'laning</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <Button 
                      className="w-full" 
                      variant={option.available ? "default" : "secondary"}
                      disabled={!option.available}
                    >
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Mashhur maqolalar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'Qanday qilib birinchi bron qilishni amalga oshirish',
              'To\'lov xavfsizligi haqida bilish kerak bo\'lgan narsalar',
              'Mehmonxona tanlashda e\'tibor berish kerak bo\'lgan narsalar',
              'Bekor qilish va qaytarish qoidalari',
              'Mobil qurilmalarda platformadan foydalanish',
              'Premium obuna imkoniyatlari'
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">{article}</h3>
                  <p className="text-sm text-muted-foreground">Batafsil o'qish uchun bosing</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Still Need Help */}
        <section>
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Hali ham yordam kerakmi?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Agar sizning savolingizga javob topa olmagan bo\'lsangiz, bizning yordam jamoamiz bilan bog'laning. 
                Biz sizga yordam berishdan mamnunmiz!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Biz bilan bog'lanish
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Jonli chat boshlash
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

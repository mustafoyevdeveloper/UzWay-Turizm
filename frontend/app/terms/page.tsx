'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, CreditCard, Shield, AlertTriangle, Users } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export default function TermsOfServicePage() {
  const { t } = useLanguage()

  const sections = [
    {
      icon: FileText,
      title: 'Umumiy qoidalar',
      content: [
        'UzWay platformasidan foydalanish uchun 18 yoshdan katta bo\'lishingiz kerak.',
        'Ro\'yxatdan o\'tishda to\'g\'ri va aniq ma\'lumotlar berishingiz shart.',
        'Bir kishi faqat bitta hisob yaratishi mumkin.',
        'Hisob ma\'lumotlarini boshqalar bilan baham ko\'rish taqiqlanadi.'
      ]
    },
    {
      icon: CreditCard,
      title: 'To\'lov va bron qilish',
      content: [
        'Barcha narxlar O\'zbekiston so\'mida ko\'rsatilgan.',
        'To\'lov bron qilish vaqtida amalga oshiriladi.',
        'Bekor qilish shartlari har bir xizmat uchun alohida belgilangan.',
        'Qaytarish 3-7 ish kuni ichida amalga oshiriladi.'
      ]
    },
    {
      icon: Shield,
      title: 'Foydalanuvchi majburiyatlari',
      content: [
        'Platformadan qonuniy maqsadlarda foydalanish.',
        'Boshqa foydalanuvchilarning huquqlarini hurmat qilish.',
        'Yolg\'on yoki chalg\'ituvchi ma\'lumot bermaslik.',
        'Platformaning xavfsizligini buzuvchi harakatlar qilmaslik.'
      ]
    },
    {
      icon: Scale,
      title: 'Mas\'uliyat cheklovi',
      content: [
        'UzWay vositachi sifatida xizmat ko\'rsatadi.',
        'Uchinchi tomon xizmatlar uchun to\'liq javobgar emas.',
        'Texnik nosozliklar uchun mas\'uliyat cheklangan.',
        'Force majeure holatlari uchun javobgar emas.'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Taqiqlangan harakatlar',
      content: [
        'Platformani buzish yoki zarar yetkazishga urinish.',
        'Boshqa foydalanuvchilarni aldash yoki spam yuborish.',
        'Mualliflik huquqlarini buzish.',
        'Qonunga zid faoliyat bilan shug\'ullanish.'
      ]
    },
    {
      icon: Users,
      title: 'Hisob to\'xtatish',
      content: [
        'Qoidalarni buzgan taqdirda hisob to\'xtatilishi mumkin.',
        'To\'xtatish vaqtinchalik yoki doimiy bo\'lishi mumkin.',
        'Qaror ustidan e\'tiroz bildirish huquqi mavjud.',
        'Ma\'lumotlar qonun talablariga ko\'ra saqlanadi.'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6">
            {t('page.terms.title')}
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Foydalanish shartlari
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            UzWay platformasidan foydalanish qoidalari va shartlari. 
            Xizmatlarimizdan foydalanishdan oldin ushbu shartlarni o'qib chiqing.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <FileText className="h-4 w-4" />
            <span>Oxirgi yangilanish: 2023-10-26</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Kirish</h2>
              <p className="text-muted-foreground mb-4">
                Ushbu Foydalanish shartlari ("Shartlar") UzWay platformasi ("Platforma", "Xizmat", "biz") 
                dan foydalanishni tartibga soladi. Platformadan foydalanish orqali siz ushbu shartlarga 
                to'liq rozilik bildirasiz.
              </p>
              <p className="text-muted-foreground mb-4">
                Agar siz ushbu shartlarning biron bir qismiga rozi bo'lmasangiz, iltimos platformadan 
                foydalanmang. Biz ushbu shartlarni istalgan vaqtda o'zgartirish huquqini saqlab qolamiz.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Muhim eslatma</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Ushbu shartlar qonuniy majburiyat yaratadi. Platformadan foydalanishdan oldin 
                      diqqat bilan o'qib chiqing.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Terms Sections */}
        <section className="mb-16">
          <div className="grid gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Intellektual mulk huquqlari</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                UzWay platformadagi barcha kontent, jumladan matnlar, grafikalar, logotiplar va dasturiy ta'minot
                UzWay yoki uning litsenziariga tegishli bo'lib, mualliflik huquqi va boshqa intellektual mulk
                qonunlari bilan himoyalangan.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Ruxsat etilgan:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Shaxsiy foydalanish uchun ko'rish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Xizmatlardan foydalanish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Ijtimoiy tarmoqlarda baham ko'rish</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-red-600 dark:text-red-400">Taqiqlangan:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Tijorat maqsadlarda foydalanish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Nusxa ko'chirish va tarqatish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">O'zgartirish va qayta ishlash</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Nizolarni hal qilish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Agar bizning xizmatlarimiz bilan bog'liq nizolar yuzaga kelsa, quyidagi tartibda hal qilinadi:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">To'g'ridan-to'g'ri muzokaralar</h4>
                    <p className="text-sm text-muted-foreground">
                      Avval nizoni to'g'ridan-to'g'ri muzokaralar orqali hal qilishga harakat qilamiz.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Vositachilik</h4>
                    <p className="text-sm text-muted-foreground">
                      Agar muzokaralar natija bermasa, mustaqil vositachi jalb qilinadi.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sud jarayoni</h4>
                    <p className="text-sm text-muted-foreground">
                      Oxirgi chora sifatida O'zbekiston Respublikasi sudlarida hal qilinadi.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Savollaringiz bormi?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Agar foydalanish shartlari haqida savollaringiz bo'lsa yoki qo'shimcha 
                ma'lumot kerak bo'lsa, biz bilan bog'laning.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> legal@uzway.uz</p>
                <p><strong>Telefon:</strong> +998 71 123 45 67</p>
                <p><strong>Manzil:</strong> Toshkent shahar, Yunusobod tumani, Amir Temur ko'chasi, 108-uy</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

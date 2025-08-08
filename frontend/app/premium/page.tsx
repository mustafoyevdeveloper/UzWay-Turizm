import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function PremiumPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Premium Xizmatlarimiz</h1>
      <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        UzWay platformasining premium xizmatlari bilan sayohatingizni yanada qulay va unutilmas qiling.
        Eksklyuziv imkoniyatlardan foydalaning!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">Asosiy Paket</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="text-center mb-6">
              <p className="text-5xl font-bold mb-2">$9.99</p>
              <p className="text-muted-foreground">oyiga</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg mb-8">
              <li>Barcha asosiy funksiyalar</li>
              <li>Cheklangan qo'llab-quvvatlash</li>
              <li>Standart bron qilish</li>
            </ul>
            <Button className="w-full">Hoziroq boshlang</Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col border-primary shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">Oltin Paket</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="text-center mb-6">
              <p className="text-5xl font-bold mb-2">$19.99</p>
              <p className="text-muted-foreground">oyiga</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg mb-8">
              <li>Asosiy paketdagi barcha narsalar</li>
              <li>Ustuvor qo'llab-quvvatlash</li>
              <li>Eksklyuziv takliflar</li>
              <li>Chegirmalar</li>
            </ul>
            <Button className="w-full">Eng mashhur</Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">Platinum Paket</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="text-center mb-6">
              <p className="text-5xl font-bold mb-2">$29.99</p>
              <p className="text-muted-foreground">oyiga</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg mb-8">
              <li>Oltin paketdagi barcha narsalar</li>
              <li>24/7 shaxsiy yordamchi</li>
              <li>VIP tadbirlarga kirish</li>
              <li>Maxsus chegirmalar</li>
            </ul>
            <Button className="w-full">Hoziroq obuna bo'ling</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Savollaringiz bormi?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Bizning jamoamiz sizga yordam berishga doimo tayyor.
        </p>
        <Button variant="outline" size="lg">Biz bilan bog'laning</Button>
      </div>
    </div>
  )
}

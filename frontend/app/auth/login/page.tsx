import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px-64px)] py-12"> {/* Adjust min-h to account for header/footer */}
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Kirish</CardTitle>
          <CardDescription>
            Elektron pochta manzilingiz bilan tizimga kiring
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Elektron pochta</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Parol</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Parolni unutdingizmi?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Kirish
            </Button>
            <Button variant="outline" className="w-full">
              Google bilan kirish
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Hisobingiz yo'qmi?{" "}
            <Link href="/auth/register" className="underline">
              Ro'yxatdan o'tish
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

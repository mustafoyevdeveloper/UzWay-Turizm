import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function UserProfile() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl">Jahongir Davronov</CardTitle>
          <CardDescription>Profil ma'lumotlaringizni tahrirlang</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Ism</Label>
            <Input id="firstName" defaultValue="Jahongir" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Familiya</Label>
            <Input id="lastName" defaultValue="Davronov" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Elektron pochta</Label>
          <Input id="email" type="email" defaultValue="jahongir.davronov@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon raqami</Label>
          <Input id="phone" type="tel" defaultValue="+998 90 123 45 67" />
        </div>
        <Button className="w-full md:w-auto">Saqlash</Button>
      </CardContent>
    </Card>
  )
}

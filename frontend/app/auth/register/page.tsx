'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Backend API call will be here
    console.log('Register attempt:', formData)
  }

  const handleSocialLogin = (provider: string) => {
    // Social login API calls will be here
    console.log(`Register with ${provider}`)
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px-64px)] py-12"> {/* Adjust min-h to account for header/footer */}
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Ro'yxatdan o'tish</CardTitle>
          <CardDescription>
            Ma'lumotlaringizni kiriting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ism</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="firstName"
                      placeholder="Ismingiz"
                      className="pl-10"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Familiya</Label>
                  <Input
                    id="lastName"
                    placeholder="Familiyangiz"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email manzil</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon raqam</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    className="pl-10"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Parol</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Kuchli parol yarating"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Parolni qayta kiriting"
                    className="pl-10 pr-10"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded" required />
                <Label htmlFor="terms" className="text-sm">
                  <Link href="/terms" className="text-blue-600 hover:underline">Foydalanish shartlari</Link> va{' '}
                  <Link href="/privacy" className="text-blue-600 hover:underline">Maxfiylik siyosati</Link>ni qabul qilaman
                </Label>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-green-600">
                Ro'yxatdan o'tish
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Yoki</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleSocialLogin('google')}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google bilan ro'yxatdan o'tish
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleSocialLogin('facebook')}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook bilan ro'yxatdan o'tish
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleSocialLogin('apple')}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 8.025.044 6.979.207 5.934.37 5.226.648 4.61 1.014 3.994 1.38 3.479 1.835 3.025 2.289 2.571 2.743 2.116 3.258 1.75 3.874.648 5.226.37 5.934.207 6.979.044 8.025 0 8.396 0 12.017c0 3.621.044 3.992.207 5.038.163 1.045.441 1.753.807 2.369.366.616.821 1.131 1.275 1.585.454.454.969.909 1.585 1.275.616.366 1.324.644 2.369.807 1.045.163 1.417.207 5.038.207 3.621 0 3.992-.044 5.038-.207 1.045-.163 1.753-.441 2.369-.807.616-.366 1.131-.821 1.585-1.275.454-.454.909-.969 1.275-1.585.366-.616.644-1.324.807-2.369.163-1.046.207-1.417.207-5.038 0-3.621-.044-3.992-.207-5.038-.163-1.045-.441-1.753-.807-2.369-.366-.616-.821-1.131-1.275-1.585-.454-.454-.969-.909-1.585-1.275-.616-.366-1.324-.644-2.369-.807C15.992.044 15.621 0 12.017 0zM12.017 2.162c3.556 0 3.98.015 5.384.078.947.043 1.462.201 1.804.334.454.177.778.388 1.119.729.341.341.552.665.729 1.119.133.342.291.857.334 1.804.063 1.404.078 1.828.078 5.384s-.015 3.98-.078 5.384c-.043.947-.201 1.462-.334 1.804-.177.454-.388.778-.729 1.119-.341.341-.665.552-1.119.729-.342.133-.857.291-1.804.334-1.404.063-1.828.078-5.384.078s-3.98-.015-5.384-.078c-.947-.043-1.462-.201-1.804-.334-.454-.177-.778-.388-1.119-.729-.341-.341-.665-.552-.729-1.119-.133-.342-.291-.857-.334-1.804-.063-1.404-.078-1.828-.078-5.384s.015-3.98.078-5.384c.043-.947.201-1.462.334-1.804.177-.454.388-.778.729-1.119.341-.341.665-.552 1.119-.729.342-.133.857-.291 1.804-.334 1.404-.063 1.828-.078 5.384-.078z"/>
                  <path d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                  <path d="M19.846 5.595a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                </svg>
                Apple bilan ro'yxatdan o'tish
              </Button>
            </div>
            
            <div className="mt-4 text-center text-sm">
              Hisobingiz bormi?{" "}
              <Link href="/auth/login" className="underline">
                Kirish
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

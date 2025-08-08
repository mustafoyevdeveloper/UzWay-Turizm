'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Key, Zap, Globe, Shield, Copy, ExternalLink, SeparatorVerticalIcon as Separator } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export default function ApiPage() {
  const { t } = useLanguage()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const endpoints = [
    {
      method: 'GET',
      path: '/api/destinations',
      description: 'Barcha yo\'nalishlarni olish',
      params: ['page', 'limit', 'category', 'city']
    },
    {
      method: 'GET',
      path: '/api/destinations/{id}',
      description: 'Bitta yo\'nalish ma\'lumotini olish',
      params: ['id']
    },
    {
      method: 'GET',
      path: '/api/hotels',
      description: 'Mehmonxonalar ro\'yxati',
      params: ['city', 'checkin', 'checkout', 'guests']
    },
    {
      method: 'POST',
      path: '/api/bookings',
      description: 'Yangi bron qilish yaratish',
      params: ['hotel_id', 'checkin', 'checkout', 'guests']
    },
    {
      method: 'GET',
      path: '/api/restaurants',
      description: 'Restoranlar ro\'yxati',
      params: ['city', 'cuisine', 'rating']
    },
    {
      method: 'GET',
      path: '/api/transport',
      description: 'Transport xizmatlari',
      params: ['from', 'to', 'date', 'type']
    }
  ]

  const codeExamples = {
    javascript: `// JavaScript/Node.js
const response = await fetch('https://api.uzway.uz/api/destinations', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`,

    python: `# Python
import requests

url = "https://api.uzway.uz/api/destinations"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
data = response.json()
print(data)`,

    curl: `# cURL
curl -X GET "https://api.uzway.uz/api/destinations" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6">
            {t('page.api.title')}
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            API Hujjatlari
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            UzWay API sizga platformamizning ma'lumotlariga dasturiy tarzda kirish imkonini beradi.
            Bu yerda siz API resurslari, so'rovlar va javoblar haqida ma'lumot topishingiz mumkin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600">
              API kalitini olish
            </Button>
            <Button size="lg" variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Postman Collection
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tezkor boshlash</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Key,
                title: '1. API kalitini oling',
                description: 'Ro\'yxatdan o\'ting va bepul API kalitini oling'
              },
              {
                icon: Code,
                title: '2. So\'rov yuboring',
                description: 'RESTful API orqali ma\'lumotlarni oling'
              },
              {
                icon: Zap,
                title: '3. Integratsiya qiling',
                description: 'O\'z ilovangizga UzWay xizmatlarini qo\'shing'
              }
            ].map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Authentication */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Autentifikatsiya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Barcha API so'rovlari Bearer token orqali autentifikatsiya qilinadi. 
                API kalitingizni har bir so'rov headeriga qo'shing:
              </p>
              <div className="bg-muted/50 rounded-lg p-4 relative">
                <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute right-2 top-2"
                  onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth')}
                >
                  {copiedCode === 'auth' ? 'Nusxalandi!' : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* API Endpoints */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">API Endpoints</h2>
          
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <Badge 
                        variant={endpoint.method === 'GET' ? 'secondary' : 'default'}
                        className={endpoint.method === 'GET' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                        {endpoint.path}
                      </code>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">{endpoint.description}</p>
                  
                  {endpoint.params.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Parametrlar:</h4>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.params.map((param, paramIndex) => (
                          <Badge key={paramIndex} variant="outline" className="text-xs">
                            {param}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Kod namunalari</h2>
          
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                
                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <div className="relative">
                      <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm">
                        <code>{code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute right-2 top-2"
                        onClick={() => copyToClipboard(code, lang)}
                      >
                        {copiedCode === lang ? 'Nusxalandi!' : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Response Format */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Javob formati</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400">Muvaffaqiyatli javob</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`{
  "success": true,
  "data": {
    "destinations": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50
    }
  },
  "message": "Success"
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400">Xato javob</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "API kaliti noto'g'ri"
  },
  "data": null
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Cheklovlar va limitlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">1000</div>
                  <div className="text-sm text-muted-foreground">So'rov/soat</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">10,000</div>
                  <div className="text-sm text-muted-foreground">So'rov/kun</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">100MB</div>
                  <div className="text-sm text-muted-foreground">Ma'lumot/so'rov</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Eslatma:</strong> Limitdan oshgan so'rovlar 429 (Too Many Requests) xato kodi bilan qaytariladi.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Support */}
        <section>
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Yordam kerakmi?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                API bilan ishlashda muammolar yuzaga kelsa yoki qo'shimcha ma'lumot kerak bo'lsa, 
                bizning dasturchilar jamoasi bilan bog'laning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <Globe className="mr-2 h-4 w-4" />
                  Developer Portal
                </Button>
                <Button variant="outline">
                  Qo'llab-quvvatlash
                </Button>
              </div>
              
              <div className="mt-6 space-y-2 text-sm">
                <p><strong>Developer Email:</strong> developers@uzway.uz</p>
                <p><strong>API Status:</strong> status.uzway.uz</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

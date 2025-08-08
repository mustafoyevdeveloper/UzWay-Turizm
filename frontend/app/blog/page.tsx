import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'O\'zbekistonning yashirin durdonalari',
      description: 'Kamdan-kam sayohatchilar biladigan O\'zbekistonning go\'zal joylari.',
      image: '/uzbekistan-hidden-gems.png',
      date: '2023-10-26',
      slug: 'hidden-gems-of-uzbekistan',
    },
    {
      id: 2,
      title: 'Samarqand oshxonasi: Ta\'mlar sarguzashti',
      description: 'Samarqandning noyob taomlari va ularning tarixi haqida.',
      image: '/samarkand-cuisine.png',
      date: '2023-10-20',
      slug: 'samarkand-cuisine-adventure',
    },
    {
      id: 3,
      title: 'Xiva: Vaqt bo\'ylab sayohat',
      description: 'Qadimiy Xiva shahrining sirli ko\'chalari va me\'morchiligi.',
      image: '/khiva-ancient-city.png',
      date: '2023-10-15',
      slug: 'khiva-journey-through-time',
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Bizning Blog</h1>
      <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        O'zbekiston bo'ylab sayohatlar, madaniyat, oshxona va boshqa qiziqarli mavzular haqida maqolalar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{post.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Eng so'nggi yangiliklar</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Eng yangi maqolalarimizdan xabardor bo'lish uchun obuna bo'ling.
        </p>
        {/* Newsletter signup form can be added here */}
      </div>
    </div>
  )
}

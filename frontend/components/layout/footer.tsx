import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary-foreground text-primary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">UzWay</h3>
            <p className="text-sm text-muted-foreground">
              O'zbekiston bo'ylab sayohatingizni rejalashtirish uchun eng yaxshi platforma.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Bosh sahifa</Link></li>
              <li><Link href="/destinations" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Manzillar</Link></li>
              <li><Link href="/hotels" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Mehmonxonalar</Link></li>
              <li><Link href="/restaurants" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Restoranlar</Link></li>
              <li><Link href="/transport" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Transport</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kompaniya</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Biz haqimizda</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Karyera</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Aloqa</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Yordam</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Yordam markazi</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Maxfiylik siyosati</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary-foreground/80">Foydalanish shartlari</Link></li>
              <li><Link href="/api" className="text-sm text-muted-foreground hover:text-primary-foreground/80">API hujjatlari</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} UzWay. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  )
}

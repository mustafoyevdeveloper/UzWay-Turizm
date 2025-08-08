export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Maxfiylik siyosati</h1>
      <div className="prose dark:prose-invert max-w-3xl mx-auto">
        <p>
          UzWay platformasi foydalanuvchilarning shaxsiy ma'lumotlari maxfiyligini himoya qilishga sodiqdir.
          Ushbu siyosat biz sizdan qanday ma'lumotlarni yig'ishimiz, ulardan qanday foydalanishimiz va ularni qanday himoya qilishimizni tushuntiradi.
        </p>

        <h2>1. Yig'iladigan ma'lumotlar</h2>
        <p>
          Biz sizdan quyidagi turdagi ma'lumotlarni yig'ishimiz mumkin:
        </p>
        <ul>
          <li>Shaxsiy identifikatsiya ma'lumotlari (ism, elektron pochta manzili, telefon raqami)</li>
          <li>Bron qilish ma'lumotlari (sayohat sanalari, manzil, xizmat turlari)</li>
          <li>To'lov ma'lumotlari (kredit karta ma'lumotlari, ammo biz ularni to'g'ridan-to'g'ri saqlamaymiz, faqat to'lov provayderlari orqali ishlaymiz)</li>
          <li>Foydalanish ma'lumotlari (IP-manzil, brauzer turi, kirish vaqtlari, ko'rilgan sahifalar)</li>
        </ul>

        <h2>2. Ma'lumotlardan foydalanish</h2>
        <p>
          Yig'ilgan ma'lumotlardan quyidagi maqsadlarda foydalanamiz:
        </p>
        <ul>
          <li>Xizmatlarni taqdim etish va boshqarish</li>
          <li>Bronlarni qayta ishlash va tasdiqlash</li>
          <li>Mijozlarga xizmat ko'rsatish va so'rovlarga javob berish</li>
          <li>Platformani yaxshilash va yangi xizmatlarni ishlab chiqish</li>
          <li>Marketing va reklama maqsadlarida (sizning roziligingiz bilan)</li>
          <li>Qonuniy talablarga rioya qilish</li>
        </ul>

        <h2>3. Ma'lumotlarni himoya qilish</h2>
        <p>
          Biz sizning ma'lumotlaringizni ruxsatsiz kirish, o'zgartirish, oshkor qilish yoki yo'q qilishdan himoya qilish uchun
          tegishli texnik va tashkiliy choralar ko'ramiz. Bunga ma'lumotlarni shifrlash, xavfsiz serverlar va
          kirishni cheklash kiradi.
        </p>

        <h2>4. Uchinchi tomonlar bilan bo'lishish</h2>
        <p>
          Biz sizning shaxsiy ma'lumotlaringizni sizning roziligingizsiz uchinchi tomonlarga sotmaymiz, ijaraga bermaymiz
          yoki almashmaymiz, quyidagi holatlar bundan mustasno:
        </p>
        <ul>
          <li>Bron qilish uchun zarur bo'lgan xizmat ko'rsatuvchi provayderlar (mehmonxonalar, transport kompaniyalari)</li>
          <li>To'lovlarni qayta ishlovchi provayderlar</li>
          <li>Qonuniy talablar yoki sud qarorlari asosida</li>
        </ul>

        <h2>5. Cookie-fayllar</h2>
        <p>
          Biz platformamizning ishlashini yaxshilash, foydalanuvchi tajribasini shaxsiylashtirish va trafikni tahlil qilish
          uchun cookie-fayllardan foydalanamiz. Siz brauzeringiz sozlamalari orqali cookie-fayllarni boshqarishingiz mumkin.
        </p>

        <h2>6. Sizning huquqlaringiz</h2>
        <p>
          Siz o'zingizning shaxsiy ma'lumotlaringizga kirish, ularni tuzatish, o'chirish yoki ulardan foydalanishni cheklash
          huquqiga egasiz. Ushbu huquqlardan foydalanish uchun biz bilan bog'lanishingiz mumkin.
        </p>

        <h2>7. O'zgarishlar</h2>
        <p>
          Biz ushbu maxfiylik siyosatini vaqti-vaqti bilan yangilashimiz mumkin. Har qanday o'zgarishlar ushbu sahifada
          e'lon qilinadi.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          Oxirgi yangilanish: 2023-10-26
        </p>
      </div>
    </div>
  )
}

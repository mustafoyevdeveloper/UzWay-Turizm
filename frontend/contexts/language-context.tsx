'use client'

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

type Language = 'uz' | 'ru' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Navigation
    'nav.destinations': 'Yo\'nalishlar',
    'nav.hotels': 'Mehmonxonalar',
    'nav.restaurants': 'Restoranlar',
    'nav.transport': 'Transport',
    // 'nav.services': 'Xizmatlar', // Olib tashlandi
    'nav.profile': 'Profil', // 'nav.dashboard' o'rniga 'nav.profile'
    
    // Auth
    'auth.login': 'Kirish',
    'auth.register': 'Ro\'yxatdan o\'tish',
    
    // Footer
    'footer.description': 'O\'zbekiston bo\'ylab sayohat qilish uchun yagona platforma',
    'footer.services': 'Xizmatlar',
    'footer.company': 'Kompaniya',
    'footer.support': 'Qo\'llab-quvvatlash',
    'footer.about': 'Biz haqimizda',
    'footer.contact': 'Aloqa',
    'footer.careers': 'Karyera',
    'footer.blog': 'Blog',
    'footer.help': 'Yordam',
    'footer.privacy': 'Maxfiylik',
    'footer.terms': 'Shartlar',
    'footer.api': 'API',
    'footer.rights': 'Barcha huquqlar himoyalangan.',
    
    // Common
    'common.loading': 'Yuklanmoqda...',
    'common.search': 'Qidirish',
    'common.filter': 'Filtr',
    'common.more': 'Ko\'proq',
    'common.back': 'Orqaga',
    'common.next': 'Keyingi',
    'common.save': 'Saqlash',
    'common.cancel': 'Bekor qilish',
    'common.submit': 'Yuborish',
    'common.edit': 'Tahrirlash',
    'common.delete': 'O\'chirish',
    'common.view': 'Ko\'rish',
    
    // Pages
    'page.about.title': 'Biz haqimizda',
    'page.contact.title': 'Aloqa',
    'page.careers.title': 'Karyera',
    'page.blog.title': 'Blog',
    'page.help.title': 'Yordam',
    'page.privacy.title': 'Maxfiylik siyosati',
    'page.terms.title': 'Foydalanish shartlari',
    'page.api.title': 'API hujjatlari',

    // Profile (old Dashboard)
    'profile.title': 'Profil Paneli', // Yangi nom
    'profile.tabProfile': 'Profil',
    'profile.tabBookings': 'Mening bronlarim',
    'dashboard.profile.title': 'Profil ma\'lumotlari', // Eski dashboard.profile.title
    'dashboard.profile.description': 'Shaxsiy ma\'lumotlaringizni yangilang.',
    'dashboard.profile.firstName': 'Ism',
    'dashboard.profile.lastName': 'Familiya',
    'dashboard.profile.email': 'Email manzil',
    'dashboard.profile.phone': 'Telefon raqam',
    'dashboard.profile.saveSuccess': 'Profil muvaffaqiyatli yangilandi!',
    'dashboard.bookings.title': 'Mening bronlarim', // Eski dashboard.bookings.title
    'dashboard.bookings.description': 'Barcha bron qilishlaringiz ro\'yxati.',
    'dashboard.bookings.id': 'ID',
    'dashboard.bookings.type': 'Turi',
    'dashboard.bookings.item': 'Nomi',
    'dashboard.bookings.date': 'Sana',
    'dashboard.bookings.status': 'Holati',
    'dashboard.bookings.amount': 'Miqdori',
  },
  ru: {
    // Navigation
    'nav.destinations': 'Направления',
    'nav.hotels': 'Отели',
    'nav.restaurants': 'Рестораны',
    'nav.transport': 'Транспорт',
    // 'nav.services': 'Услуги', // Olib tashlandi
    'nav.profile': 'Профиль', // 'nav.dashboard' o'rniga 'nav.profile'
    
    // Auth
    'auth.login': 'Войти',
    'auth.register': 'Регистрация',
    
    // Footer
    'footer.description': 'Единая платформа для путешествий по Узбекистану',
    'footer.services': 'Услуги',
    'footer.company': 'Компания',
    'footer.support': 'Поддержка',
    'footer.about': 'О нас',
    'footer.contact': 'Контакты',
    'footer.careers': 'Карьера',
    'footer.blog': 'Блог',
    'footer.help': 'Помощь',
    'footer.privacy': 'Конфиденциальность',
    'footer.terms': 'Условия',
    'footer.api': 'API',
    'footer.rights': 'Все права защищены.',
    
    // Common
    'common.loading': 'Загрузка...',
    'common.search': 'Поиск',
    'common.filter': 'Фильтр',
    'common.more': 'Больше',
    'common.back': 'Назад',
    'common.next': 'Далее',
    'common.save': 'Сохранить',
    'common.cancel': 'Отмена',
    'common.submit': 'Отправить',
    'common.edit': 'Редактировать',
    'common.delete': 'Удалить',
    'common.view': 'Просмотр',
    
    // Pages
    'page.about.title': 'О нас',
    'page.contact.title': 'Контакты',
    'page.careers.title': 'Карьера',
    'page.blog.title': 'Блог',
    'page.help.title': 'Помощь',
    'page.privacy.title': 'Политика конфиденциальности',
    'page.terms.title': 'Условия использования',
    'page.api.title': 'API документация',

    // Profile (old Dashboard)
    'profile.title': 'Панель Профиля', // Yangi nom
    'profile.tabProfile': 'Профиль',
    'profile.tabBookings': 'Мои бронирования',
    'dashboard.profile.title': 'Данные профиля', // Eski dashboard.profile.title
    'dashboard.profile.description': 'Обновите свои личные данные.',
    'dashboard.profile.firstName': 'Имя',
    'dashboard.profile.lastName': 'Фамилия',
    'dashboard.profile.email': 'Адрес электронной почты',
    'dashboard.profile.phone': 'Номер телефона',
    'dashboard.profile.saveSuccess': 'Профиль успешно обновлен!',
    'dashboard.bookings.title': 'Мои бронирования', // Eski dashboard.bookings.title
    'dashboard.bookings.description': 'Список всех ваших бронирований.',
    'dashboard.bookings.id': 'ID',
    'dashboard.bookings.type': 'Тип',
    'dashboard.bookings.item': 'Название',
    'dashboard.bookings.date': 'Дата',
    'dashboard.bookings.status': 'Статус',
    'dashboard.bookings.amount': 'Сумма',
  },
  en: {
    // Navigation
    'nav.destinations': 'Destinations',
    'nav.hotels': 'Hotels',
    'nav.restaurants': 'Restaurants',
    'nav.transport': 'Transport',
    // 'nav.services': 'Services', // Olib tashlandi
    'nav.profile': 'Profile', // 'nav.dashboard' o'rniga 'nav.profile'
    
    // Auth
    'auth.login': 'Login',
    'auth.register': 'Sign Up',
    
    // Footer
    'footer.description': 'The ultimate platform for traveling across Uzbekistan',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.help': 'Help',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.api': 'API',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.more': 'More',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.submit': 'Submit',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    
    // Pages
    'page.about.title': 'About Us',
    'page.contact.title': 'Contact',
    'page.careers.title': 'Careers',
    'page.blog.title': 'Blog',
    'page.help.title': 'Help',
    'page.privacy.title': 'Privacy Policy',
    'page.terms.title': 'Terms of Service',
    'page.api.title': 'API Documentation',

    // Profile (old Dashboard)
    'profile.title': 'Profile Dashboard', // Yangi nom
    'profile.tabProfile': 'Profile',
    'profile.tabBookings': 'My Bookings',
    'dashboard.profile.title': 'Profile Information', // Eski dashboard.profile.title
    'dashboard.profile.description': 'Update your personal details.',
    'dashboard.profile.firstName': 'First Name',
    'dashboard.profile.lastName': 'Last Name',
    'dashboard.profile.email': 'Email Address',
    'dashboard.profile.phone': 'Phone Number',
    'dashboard.profile.saveSuccess': 'Profile updated successfully!',
    'dashboard.bookings.title': 'My Bookings', // Eski dashboard.bookings.title
    'dashboard.bookings.description': 'A list of all your bookings.',
    'dashboard.bookings.id': 'ID',
    'dashboard.bookings.type': 'Type',
    'dashboard.bookings.item': 'Item',
    'dashboard.bookings.date': 'Date',
    'dashboard.bookings.status': 'Status',
    'dashboard.bookings.amount': 'Amount',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('uz')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['uz', 'ru', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = useCallback((key: string): string => {
    return translations[language][key] || key
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

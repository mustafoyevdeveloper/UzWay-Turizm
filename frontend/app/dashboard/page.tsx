'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserProfile } from "@/components/dashboard/user-profile"
import { BookingHistory } from "@/components/dashboard/booking-history"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Shaxsiy kabinet</h1>
      <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Bu yerda siz o'zingizning profilingizni boshqarishingiz, bronlar tarixingizni ko'rishingiz va boshqa sozlamalarni amalga oshirishingiz mumkin.
      </p>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="bookings">Bronlarim</TabsTrigger>
          <TabsTrigger value="settings">Sozlamalar</TabsTrigger>
          <TabsTrigger value="notifications">Bildirishnomalar</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <UserProfile />
        </TabsContent>
        <TabsContent value="bookings" className="mt-6">
          <BookingHistory />
        </TabsContent>
        <TabsContent value="settings" className="mt-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Sozlamalar</h2>
            <p className="text-muted-foreground">Bu yerda siz umumiy sozlamalarni o'zgartirishingiz mumkin.</p>
            {/* Add actual settings components here */}
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="mt-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Bildirishnomalar</h2>
            <p className="text-muted-foreground">Bu yerda siz bildirishnoma sozlamalarini boshqarishingiz mumkin.</p>
            {/* Add actual notification settings components here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

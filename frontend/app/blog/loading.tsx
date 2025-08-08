import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-b from-muted/50 to-background py-20 px-4">
        <div className="container mx-auto text-center">
          <Skeleton className="h-6 w-20 mx-auto mb-6" />
          <Skeleton className="h-16 w-64 mx-auto mb-6" />
          <Skeleton className="h-6 w-96 mx-auto mb-8" />
          <Skeleton className="h-10 w-80 mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Categories Skeleton */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-6 w-24" />
          ))}
        </div>

        {/* Featured Post Skeleton */}
        <div className="mb-16">
          <Skeleton className="h-8 w-48 mb-8" />
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Skeleton className="aspect-video w-full" />
              </div>
              <div className="md:w-1/2 p-8">
                <Skeleton className="h-6 w-20 mb-4" />
                <Skeleton className="h-8 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                <div className="flex items-center gap-4 mb-6">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid Skeleton */}
        <div className="mb-16">
          <Skeleton className="h-10 w-1/2 mx-auto mb-10" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="h-48 w-full rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Skeleton */}
        <Card>
          <CardContent className="p-8 text-center">
            <Skeleton className="h-8 w-48 mx-auto mb-4" />
            <Skeleton className="h-4 w-96 mx-auto mb-6" />
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-24" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import { Skeleton } from '@/components/ui/skeleton'

export default function HotelsLoading() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Skeleton className="h-10 w-1/2 mx-auto mb-10" />
      <Skeleton className="h-6 w-2/3 mx-auto mb-12" />

      <div className="max-w-xl mx-auto mb-10">
        <Skeleton className="h-12 w-full rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-48 w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-8 w-20 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

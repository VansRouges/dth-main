export default function Loading() {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-[#0a2158] p-6 mb-8 animate-pulse">
          <div className="h-8 w-40 bg-white/20 rounded mb-2"></div>
          <div className="h-4 w-60 bg-white/20 rounded"></div>
        </div>
  
        <div className="container mx-auto px-4 pb-12">
          <div className="h-10 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
  
          <div className="flex gap-2 mb-4">
            <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-6 w-32 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
  
          <div className="flex gap-6 mb-8">
            <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-40 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-60 bg-gray-200 rounded animate-pulse"></div>
          </div>
  
          <div className="h-8 w-48 bg-gray-200 rounded mb-4 animate-pulse"></div>
  
          <div className="space-y-4">
            <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }
  
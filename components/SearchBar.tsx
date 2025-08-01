"use client"
import { Search, SlidersVertical } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="flex items-center justify-between bg-white rounded-full px-4 py-2 shadow-sm md:w-1/2 w-full sm:min-w-64 max-w-lg min-w-0 mr-4">
      <div className="flex w-full items-center space-x-2">
        <Search className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none border-none text-sm w-full placeholder:text-gray-500"
        />
      </div>
      <SlidersVertical className="h-5 w-5 text-gray-500 cursor-pointer" />
    </div>
  )
}


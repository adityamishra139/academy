import React, { useEffect, useState } from "react"
import axios from "axios"

const Gems = () => {
  const [gems, setGems] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const fetchGems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/gems")
        setGems(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching gems:", error)
        setLoading(false)
      }
    }

    fetchGems()
  }, [])

  const filteredGems = gems.filter(
    (gem) =>
      gem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gem.team.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header Section */}
          <div className="relative mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Our Cricket Stars</h2>
            <div className="absolute -bottom-1 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-[#00A651]"></div>
          </div>

          {/* Search Section */}
          <div className="mx-auto mb-12 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or team..."
                className="w-full rounded-full border-2 border-gray-200 pl-10 pr-4 py-3 text-lg transition-all focus:border-[#00A651] focus:outline-none focus:ring-2 focus:ring-[#00A651]/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading
              ? Array(8)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
                      <div className="h-64 bg-gray-200 animate-pulse"></div>
                      <div className="p-6">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                      </div>
                    </div>
                  ))
              : filteredGems.map((gem, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden transition-all hover:shadow-xl group"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <img
                        src={`http://localhost:3000${gem.img}`}
                        alt={`${gem.name}'s profile`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </div>
                    <div className="relative w-full bg-white p-6 text-center">
                      <div className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 transform overflow-hidden rounded-full border-4 border-white shadow-lg">
                        <img
                          src={`http://localhost:3000${gem.img}`}
                          alt={`${gem.name}'s avatar`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="mt-8 text-xl font-bold text-gray-900">{gem.name}</h3>
                      <p className="mt-1 text-sm font-medium text-[#00A651]">{gem.team}</p>
                    </div>
                  </div>
                ))}
          </div>

          {/* No Results Message */}
          {!loading && filteredGems.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600">No players found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  )
}

export default Gems


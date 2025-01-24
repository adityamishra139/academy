import {Link} from "react-router-dom"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    name: "Junior Cricket",
    description: "For ages 7-14, focusing on fundamentals and love for the game.",
    href: "#",
  },
  {
    name: "High School Academy",
    description: "Intensive training for talented players aged 15-18.",
    href: "#",
  },
  {
    name: "Adult Coaching",
    description: "Improve your skills or start learning cricket as an adult.",
    href: "#",
  },
]

export default function Programs() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20" id="programs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Programs</h2>
          <p className="mt-4 text-xl text-gray-500">Choose the program that best fits your age and skill level</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="relative rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">{program.name}</h3>
              <p className="mt-4 text-base text-gray-500">{program.description}</p>
              <Link
                href={program.href}
                className="mt-6 inline-flex items-center text-emerald-600 hover:text-emerald-700"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
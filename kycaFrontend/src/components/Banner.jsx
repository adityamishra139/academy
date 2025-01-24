import { Target, Users, TrendingUp, Award } from "lucide-react"

const features = [
  {
    name: "Expert Coaching",
    description: "Learn from experienced coaches who have played at the highest levels of cricket.",
    icon: Target,
  },
  {
    name: "All Skill Levels",
    description: "Programs tailored for beginners, intermediate players, and advanced cricketers.",
    icon: Users,
  },
  {
    name: "Performance Analysis",
    description: "Utilize cutting-edge technology to analyze and improve your technique.",
    icon: TrendingUp,
  },
  {
    name: "Competitive Matches",
    description: "Regular matches and tournaments to apply your skills in real game situations.",
    icon: Award,
  },
]

export default function Banner() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose CricketPro Academy
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our academy offers a comprehensive approach to cricket training, focusing on skill development, physical
            fitness, and mental preparation.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
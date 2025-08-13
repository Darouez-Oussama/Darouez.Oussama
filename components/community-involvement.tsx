import Image from "next/image"

export function CommunityInvolvement() {
  const involvement = [
    {
      title: "Vice President",
      organization: "Association of Robotics Techniques",
      location: "Tunisia",
      period: "Feb 2023 – Jun 2024", // Updated end date to Jun 2024
      logo: "/images/organizations/aerobotix-logo.png", // Using AEROBOTIX logo
      description: [
        "Organized major robotics events including Eurobot 2024 qualification, Robolumpix 2.0, and Aeroday.", // Updated organizing details
        "Mentored teams in robotics development and competition preparation.",
      ],
      technologies: ["Leadership", "Event Organization", "Robotics", "Team Mentoring"],
    },
  ]

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Community Involvement</h2>
        <div className="space-y-8">
          {involvement.map((item, index) => (
            <div key={index} className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 flex-shrink-0">
                    <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={`${item.organization} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300">
                      {item.organization} • {item.location}
                    </p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">{item.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex} className="text-gray-300 text-sm leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

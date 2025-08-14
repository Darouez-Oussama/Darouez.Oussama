import Image from "next/image"

export function Awards() {
  const achievements = [
    {
      title: "Mentor at Robocup Asia Pacific 2024 in South Korea",
      date: "2024",
      logo: "/images/companies/discovery-club-junior.jpg",
      association: "INSAT - Institut National des Sciences Appliquées et de Technologie",
    },
    {
      title: "Attended Chinese-Arab Youth Development Forum in China",
      date: "Nov 2024",
      logo: "/images/companies/discovery-club-junior.jpg",
      association: "INSAT - Institut National des Sciences Appliquées et de Technologie",
    },
  ]

  const awards = [
    {
      title: "1st Prize at Eurobot National Qualification",
      date: "Apr 2023",
      logo: "/images/organizations/aerobotix-logo.png",
      association: "INSAT - Institut National des Sciences Appliquées et de Technologie",
    },
    {
      title: "1st Prize in the Autonomous Robot Competition at ROBOCUP ENSI 5.0",
      date: "Oct 2022",
      logo: "/images/organizations/aerobotix-logo.png",
      association: "INSAT - Institut National des Sciences Appliquées et de Technologie",
    },
  ]

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/achievements/robocup-korea.jpg"
              alt="RoboCup Asia Pacific 2023 in South Korea"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <p className="text-center text-sm text-gray-400 mt-2">RoboCup Asia Pacific 2023 - South Korea</p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/achievements/china-forum.jpg"
              alt="Chinese-Arab Youth Development Forum in China"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <p className="text-center text-sm text-gray-400 mt-2">Chinese-Arab Youth Development Forum - China</p>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 flex-shrink-0">
                    <Image
                      src={achievement.logo || "/placeholder.svg"}
                      alt="Discovery Club Junior logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Associated with {achievement.association}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm font-medium sm:text-right flex-shrink-0">
                  {achievement.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mb-12"></div>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 flex-shrink-0">
                    <Image
                      src={award.logo || "/placeholder.svg"}
                      alt="AEROBOTIX logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight mb-1">{award.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Associated with {award.association}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm font-medium sm:text-right flex-shrink-0">{award.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

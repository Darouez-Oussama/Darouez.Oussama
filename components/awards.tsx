import Image from "next/image"

export function Awards() {
  const awards = [
    {
      title: "1st Prize at Eurobot National Qualification",
      date: "Apr 2023",
      logo: "/images/organizations/aerobotix-logo.png", // Updated to use AEROBOTIX logo
      association: "INSAT - Institut National des Sciences Appliquées et de Technologie",
    },
    {
      title: "1st Prize in the Autonomous Robot Competition at ROBOCUP ENSI 5.0",
      date: "Oct 2022",
      logo: "/images/organizations/aerobotix-logo.png", // Updated to use AEROBOTIX logo
      association: "INSAT - Institut National des Sciences Appliquées et de Technologie",
    },
  ]

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Honors & Awards</h2>
        <div className="space-y-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 flex-shrink-0">
                    <Image
                      src={award.logo || "/placeholder.svg"}
                      alt="AEROBOTIX logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{award.title}</h3>
                    <p className="text-gray-400 text-sm">Associated with {award.association}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">{award.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

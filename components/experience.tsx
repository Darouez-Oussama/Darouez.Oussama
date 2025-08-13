import Image from "next/image"

export function Experience() {
  const experiences = [
    {
      title: "Firmware Engineer",
      company: "Mare Custos",
      location: "Tunisia",
      period: "Jul 2024 – Present",
      logo: "/images/companies/mare-custos.jpeg",
      description: [
        "Designed and implemented a resilient dual-slot OTA firmware update system over Ethernet, integrating robust bootloader logic with reset cause handling, NVS version tracking, and automated fallback for corrupted updates.",
        "Developed Peripheral and modules wrappers for STM32 and ESP32.",
        "Implemented Custom micro-ROS transports for STM32.",
        "Made unit tests using Unity C for the available firmware.",
        "Fixed GitHub Actions workflows to build firmware on pull request events.",
      ],
      technologies: [
        "Ethernet (TCP/UDP)",
        "USB-CDC",
        "SPI",
        "ADC",
        "DMA",
        "PCNT",
        "CRC",
        "STM32",
        "ESP32",
        "FreeRTOS",
        "micro-ROS",
        "ROS2",
        "PlatformIO",
        "STM32CubeIDE",
        "Docker",
        "Git",
        "GitHub Actions",
        "Unity C",
      ],
    },
    {
      title: "Embedded System Engineer Intern",
      company: "Orange Tunisie",
      location: "Tunisia",
      period: "Jun 2024 – Jul 2024",
      logo: "/images/companies/orange-tunisie.png",
      description: [
        "Developed and optimized FreeRTOS-based task scheduling on ESP32 with UART communication to Raspberry Pi and explored digital sound processing using the I2S protocol.",
      ],
      technologies: ["FreeRTOS", "UART", "I2S protocol"],
    },
    {
      title: "Robotics Instructor",
      company: "Discovery Club Junior",
      location: "Manouba, Tunisia",
      period: "May 2023 – May 2025",
      logo: "/images/companies/discovery-club-junior.jpg",
      description: [
        "Taught electronics, PCB design, logic design, and C/C++ programming; mentored Atmega328P register-level projects.",
        "Served as mentor at the Robocup Asia Pacific 2024 in South Korea.",
      ],
      technologies: ["Electronics", "PCB Design", "C/C++", "Atmega328P"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 flex-shrink-0">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-gray-300">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
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

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Assembly", "Python", "Bash"],
    },
    {
      title: "Communication Protocols",
      skills: ["UART", "SPI", "I2C", "USB-CDC", "CAN", "Ethernet", "TCP/UDP", "Wi-Fi", "Bluetooth"],
    },
    {
      title: "Development Tools",
      skills: ["VS Code", "Eclipse", "STM32CubeIDE", "Arduino IDE", "ESP-IDF", "MPLAB X", "PlatformIO"],
    },
    {
      title: "Build & Version Control",
      skills: ["CMake", "Makefile", "Git", "GitHub", "GitHub Actions", "Docker"],
    },
    {
      title: "Hardware Design",
      skills: ["SolidWorks", "KiCad", "PCB Design", "3D Printing"],
    },
    {
      title: "Embedded Systems",
      skills: ["FreeRTOS", "STM32", "ESP32", "Arduino", "PIC", "micro-ROS", "ROS2"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {skill}
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

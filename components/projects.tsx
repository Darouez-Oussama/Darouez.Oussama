import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "OTA-Enabled Smart Plug IoT Device",
      period: "Aug 2025 – Present",
      type: "Freelance Project",
      description: [
        "Developed OTA-enabled smart plug with Wi-Fi SmartConfig, auto device registration, and firmware versioning.",
        "Added error recovery with failsafe modes, LED indicators, and button commands for user control and reliability.",
        "Used NVS for persistent configuration, enhancing performance.",
      ],
      technologies: ["Wi-Fi", "HTTPS", "OTA Firmware Updates", "NVS", "FreeRTOS", "ESP-IDF", "Git"],
      image: null,
    },
    {
      title: "Bionic Arm",
      period: "Feb 2025 - May 2025",
      type: "INSAT Project",
      description: [
        "Developed a bionic arm that interprets EMG signals into intelligent finger movements using AI.",
        "Led firmware design and layered architecture for modularity and portability across ESP32 and STM32.",
        "Applied SOLID principles to ensure clean, scalable, and maintainable code.",
        "Used Factory pattern to instantiate platform-specific drivers like ADC, GPIO, PWM, and Serial.",
      ],
      technologies: ["ESP32", "STM32", "AI", "EMG Sensors", "SOLID Principles", "Factory Pattern"],
      image: "/images/projects/bionic-hand.jpg",
    },
    {
      title: "Inverted Pendulum",
      period: "Jan 2025 - Apr 2025",
      type: "INSAT Project",
      description: [
        "Built a physical and simulated inverted pendulum system to study advanced control theory.",
        "Simulated control strategies like swing-up and LQR using MATLAB and Simulink.",
        "Developed a LabVIEW interface with LINX toolkit for motor control and sensor monitoring.",
      ],
      technologies: ["MATLAB", "LabVIEW", "Arduino", "Control Theory", "PID"],
      image: "/images/projects/robotic-arm.jpg",
    },
    {
      title: "Automated Production Line Control System",
      period: "Jan 2024 - May 2024",
      type: "Industrial Project",
      description: [
        "Developed an automated industrial control system for wooden house base manufacturing using S7-1500 PLCs.",
        "Built a Factory I/O simulation for system testing and functional validation.",
        "Created an HMI interface for real-time process monitoring and operator interaction.",
      ],
      technologies: ["PLC Programming", "Siemens TIA Portal", "Factory I/O", "HMI Design", "Ladder Logic"],
      image: "/images/projects/industrial-line.jpg",
    },
    {
      title: "Wind Speed Calculation System",
      period: "Mar 2024 - May 2024",
      type: "IoT Project",
      description: [
        "Developed STM32 library for SX1272 LoRa module to enable long-range wind speed communication.",
        "Calculated wind speed in real-time using STM32 timer interrupts.",
        "Designed sensor housing and mechanical parts in SolidWorks.",
      ],
      technologies: ["STM32", "LoRa", "SolidWorks", "3D Printing", "Real-time Systems"],
      image: null,
    },
    {
      title: "Eurobot",
      period: "Sep 2022 - Apr 2023",
      type: "Robotics Competition",
      description: [
        "Led design and development of two robots with full mechanical and electrical integration.",
        "Designed custom GPIO HATs for Arduino and STM32 to enhance modularity.",
        "Implemented PID-based velocity and position control on STM32 for smooth operation.",
      ],
      technologies: ["Arduino", "STM32", "PID Control", "ROS", "PCB Design", "KiCAD", "SolidWorks"],
      image: "/images/projects/eurobot-setup.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              {project.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-400">
                  <span>{project.type}</span>
                  <span>{project.period}</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
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

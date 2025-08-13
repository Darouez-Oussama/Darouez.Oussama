export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a passionate Embedded Systems Engineer currently pursuing Industrial Computing and Automation
            Engineering at the National Institute of Applied Science and Technology (INSAT) in Tunis, Tunisia.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            With extensive experience in firmware development, real-time systems, and IoT solutions, I specialize in
            creating robust embedded systems using technologies like STM32, ESP32, FreeRTOS, and various communication
            protocols including UART, SPI, I2C, and wireless technologies.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Currently working as a Firmware Engineer at Mare Custos, I focus on developing resilient OTA firmware update
            systems, implementing micro-ROS transports, and building comprehensive testing frameworks for embedded
            applications.
          </p>
        </div>
      </div>
    </section>
  )
}

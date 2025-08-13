"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Certificates() {
  const downloadCertificate = () => {
    const link = document.createElement("a")
    link.href = "/documents/Altium_Designer_Certificate.pdf"
    link.download = "Altium_Designer_Certificate.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates & Achievements</h2>
        <div className="bg-black p-8 rounded-lg border border-gray-800">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-semibold text-white">Altium Designer Pro - From Design to Manufacturing</h3>
            <Button
              onClick={downloadCertificate}
              variant="outline"
              size="sm"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Download size={16} className="mr-2" />
              Download Certificate
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-300 mb-2">
                <strong>Instructor:</strong> Thameur CHEBBI
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Duration:</strong> 21 hours
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Date:</strong> 12/10/2024 to 09/11/2024
              </p>
              <p className="text-gray-300">
                <strong>Format:</strong> Online
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Acquired Skills:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Mastered advanced features in Altium Designer</li>
                <li>Advanced PCB design techniques</li>
                <li>Versatile 2-layer and 4-layer PCB design</li>
                <li>Symbol and footprint development per IPC standards</li>
                <li>High-speed and mixed signal PCB design</li>
                <li>SPI, I2C, UART, and USB protocol implementation</li>
                <li>Electronic circuit simulation using LTspice</li>
                <li>Comprehensive PCB documentation</li>
                <li>ATmega328P programming and debugging</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-black p-6 rounded-lg border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Other Achievements</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>Mentor at Robocup Asia Pacific 2024 in South Korea</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>Attended Chinese-Arab Youth Development Forum in China (Nov 2024)</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>Robotics Instructor at Discovery Club Junior (2023-2025)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

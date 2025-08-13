"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function Hero() {
  const [copySuccess, setCopySuccess] = useState<string>("")

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(type)
      setTimeout(() => setCopySuccess(""), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/documents/Oussama_Darouez_CV.pdf"
    link.download = "Oussama_Darouez_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I am
              <br />
              <span className="text-white">Oussama Darouez</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">Embedded Systems Engineer / Firmware Developer</p>

            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/Darouez-Oussama"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/oussama-darouez-55849a270/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <button
                onClick={() => copyToClipboard("darouez.oussama@gmail.com", "email")}
                className="text-gray-400 hover:text-white transition-colors relative"
                title="Click to copy email"
              >
                <Mail size={24} />
                {copySuccess === "email" && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </button>
              <button
                onClick={() => copyToClipboard("+216 20441016", "phone")}
                className="text-gray-400 hover:text-white transition-colors relative"
                title="Click to copy phone number"
              >
                <Phone size={24} />
                {copySuccess === "phone" && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3" onClick={downloadCV}>
              DOWNLOAD CV
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 flex items-center justify-center overflow-hidden rounded-lg">
              <Image
                src="/images/profile-photo-cropped.jpg"
                alt="Oussama Darouez"
                width={320}
                height={320}
                className="object-cover object-top scale-125"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

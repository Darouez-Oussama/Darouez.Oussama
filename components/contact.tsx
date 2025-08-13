"use client"

import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Contact() {
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

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work
          together!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <button
              onClick={() => copyToClipboard("darouez.oussama@gmail.com", "email")}
              className="relative group"
              title="Click to copy email"
            >
              <Mail className="w-8 h-8 text-white mb-4 group-hover:text-gray-300 transition-colors" />
              {copySuccess === "email" && (
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  Copied!
                </span>
              )}
            </button>
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:darouez.oussama@gmail.com" className="text-gray-300 hover:text-white transition-colors">
              darouez.oussama@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center">
            <button
              onClick={() => copyToClipboard("+216 20441016", "phone")}
              className="relative group"
              title="Click to copy phone number"
            >
              <Phone className="w-8 h-8 text-white mb-4 group-hover:text-gray-300 transition-colors" />
              {copySuccess === "phone" && (
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  Copied!
                </span>
              )}
            </button>
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+21620441016" className="text-gray-300 hover:text-white transition-colors">
              +216 20441016
            </a>
          </div>

          <div className="flex flex-col items-center">
            <Github className="w-8 h-8 text-white mb-4" />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/Darouez-Oussama"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Darouez-Oussama
            </a>
          </div>

          <div className="flex flex-col items-center">
            <Linkedin className="w-8 h-8 text-white mb-4" />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/oussama-darouez-55849a270/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Connect with me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3" asChild>
            <a href="mailto:darouez.oussama@gmail.com">Send Message</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: "url('/skyrim.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">About Our Company</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            We're on a mission to transform the digital landscape with innovative solutions.
          </p>
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
            onClick={() => {
              document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2015, our company began with a simple idea: to create digital experiences that make a
                difference. What started as a small team of passionate innovators has grown into a global network of
                creative problem-solvers.
              </p>
              <p className="text-lg text-muted-foreground">
                Through years of dedication and countless projects, we've refined our approach to deliver solutions that
                not only meet our clients' needs but exceed their expectations.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Our team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Parallax */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${(scrollY - 800) * 0.2}px)`,
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Innovation", description: "We constantly push boundaries and explore new possibilities." },
              { title: "Integrity", description: "We believe in transparency and honesty in all our interactions." },
              { title: "Excellence", description: "We strive for the highest quality in everything we do." },
              { title: "Collaboration", description: "We work together to achieve greater outcomes." },
              { title: "Empathy", description: "We understand and value the needs of our clients and team members." },
              { title: "Sustainability", description: "We create solutions with long-term impact in mind." },
            ].map((value, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", role: "CEO & Founder", image: "/placeholder.svg?height=400&width=400" },
              { name: "Sam Rivera", role: "CTO", image: "/placeholder.svg?height=400&width=400" },
              { name: "Taylor Kim", role: "Design Director", image: "/placeholder.svg?height=400&width=400" },
              { name: "Jordan Patel", role: "Marketing Lead", image: "/placeholder.svg?height=400&width=400" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA with Parallax */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${(scrollY - 1600) * 0.1}px)`,
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-3xl text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8">We're always looking for new challenges and exciting projects.</p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/web-development" className="hover:underline">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/app-development" className="hover:underline">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="hover:underline">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/case-studies" className="hover:underline">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/resources/guides" className="hover:underline">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/resources/documentation" className="hover:underline">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" className="hover:underline">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
            <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


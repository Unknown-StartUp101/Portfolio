"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, MapPin, Clock, Briefcase } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our core development team to build scalable web applications using modern technologies.",
      requirements: ["React/Next.js", "Node.js", "TypeScript", "Database Design"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "2+ years",
      description: "Create beautiful and intuitive user experiences for our diverse range of projects.",
      requirements: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "3+ years",
      description: "Help us scale our infrastructure and improve our deployment processes.",
      requirements: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "Mobile Developer",
      department: "Engineering",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      experience: "2+ years",
      description: "Develop cross-platform mobile applications that delight our users.",
      requirements: ["React Native", "Flutter", "iOS/Android", "API Integration"],
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with passionate teammates who share your love for technology",
    },
    {
      icon: Briefcase,
      title: "Growth Opportunities",
      description: "Continuous learning and career development in a fast-growing company",
    },
    {
      icon: MapPin,
      title: "Great Location",
      description: "Modern office space in the heart of Addis Ababa",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Be part of something extraordinary. Help us build the future of technology from Ethiopia to the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Negarit Systems?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer more than just a job - we offer a chance to be part of a mission that matters
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-blue-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your perfect role and start your journey with us
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">{position.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{position.department}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                        {position.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{position.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-slate-800 dark:text-white">Key Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Apply Now
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Application Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined hiring process is designed to find the best fit for both you and our team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                description: "Submit your application through our Google Form or LinkedIn",
              },
              {
                step: "02",
                title: "Initial Review",
                description: "Our team reviews your application and portfolio",
              },
              {
                step: "03",
                title: "Technical Interview",
                description: "Showcase your skills in a technical discussion",
              },
              {
                step: "04",
                title: "Final Decision",
                description: "We'll get back to you with our decision within a week",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals. Send us your resume and
              let's talk about how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg" asChild>
                <Link href="https://forms.google.com/your-form-link" target="_blank">
                  Apply via Google Form
                  <ExternalLink className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent"
                asChild
              >
                <Link href="https://linkedin.com/company/negarit-systems" target="_blank">
                  View on LinkedIn
                  <ExternalLink className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
            <p className="text-blue-100 mt-6 text-sm">
              * These are temporary application links. We're currently setting up our permanent recruitment system.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

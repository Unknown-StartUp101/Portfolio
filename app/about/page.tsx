"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Twitter } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Abdullah Farid",
      role: "Full-Stack Developer & Co-Founder",
      specialization: "React, Node.js, System Architecture",
      image: "/placeholder.svg?height=300&width=300",
      description: "Passionate about creating scalable web applications with modern technologies.",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Bisrat Berhanu",
      role: "UI/UX Designer & Co-Founder",
      specialization: "User Experience, Interface Design, Prototyping",
      image: "/placeholder.svg?height=300&width=300",
      description: "Dedicated to crafting intuitive and beautiful user experiences.",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Hermon Getachew",
      role: "Backend Developer & Co-Founder",
      specialization: "Python, Django, Database Design",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in building robust backend systems and APIs.",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Kidus Melaku",
      role: "Frontend Developer & Co-Founder",
      specialization: "React, Vue.js, Mobile Development",
      image: "/placeholder.svg?height=300&width=300",
      description: "Focused on creating responsive and interactive user interfaces.",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Melakeselam Yitbarek",
      role: "AI/ML Engineer & Co-Founder",
      specialization: "Machine Learning, Data Science, Python",
      image: "/placeholder.svg?height=300&width=300",
      description: "Passionate about leveraging AI to solve complex business problems.",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Nahom Mitiku",
      role: "DevOps Engineer & Co-Founder",
      specialization: "AWS, Docker, CI/CD, Infrastructure",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in cloud infrastructure and deployment automation.",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Simon Assfaw",
      role: "Mobile Developer & Co-Founder",
      specialization: "React Native, Flutter, iOS/Android",
      image: "/placeholder.svg?height=300&width=300",
      description: "Specialized in creating cross-platform mobile applications.",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Yonatan Tizazu",
      role: "Backend Developer & DevOps Engineer",
      specialization: "Node js, Express js Nest js, hono js, Golang, gin, gorilla mux, Database Design, AWS, Docker, CI/CD, Infrastructure",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in building robust backend systems, APIs, cloud infrastructure and deployment automation.",
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
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Born from passion, driven by innovation, and united by a shared vision to transform the tech landscape
              from Ethiopia to the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Negarit Systems</span> was born from the shared vision of eight passionate graduates from Addis Ababa
                  Institute of Technology. United by our love for technology and driven by the desire to
                  create meaningful impact, we came together to form a company that would bridge the gap between
                  innovative ideas and practical solutions.
                </p>
                <p>
                  Our diverse team brings together expertise in UI/UX design, full-stack development, backend
                  engineering, artificial intelligence, mobile development, DevOps, and product management. This
                  multidisciplinary approach allows us to tackle complex challenges from every angle and deliver
                  comprehensive solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div className="relative z-10" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Negarit Systems Team"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-blue-900 border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower businesses and individuals through innovative technology solutions that are accessible,
                    scalable, and impactful. We strive to bridge the digital divide and create opportunities for growth
                    and success in the digital age.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-purple-900 border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become a leading technology company that showcases Ethiopian talent on the global stage, while
                    contributing to the growth of the local tech ecosystem and inspiring the next generation of
                    innovators.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are passionate individuals united by a shared vision to create innovative technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                        />
                      </motion.div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-xs">
                          Co-Founder
                        </Badge>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{member.name}</h3>

                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.role}</p>

                    <p className="text-sm text-muted-foreground mb-4">{member.specialization}</p>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{member.description}</p>

                    {/* <div className="flex justify-center gap-3">
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.2 }}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.github}
                        whileHover={{ scale: 1.2 }}
                        className="text-slate-600 hover:text-slate-700 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        whileHover={{ scale: 1.2 }}
                        className="text-blue-400 hover:text-blue-500 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </motion.a>
                    </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape everything we do and guide us in our mission to create impactful technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.",
              },
              {
                title: "Excellence",
                description:
                  "We are committed to delivering the highest quality in everything we do, exceeding expectations.",
              },
              {
                title: "Cultural Pride",
                description:
                  "We are proud of our Ethiopian heritage and strive to showcase our talent on the global stage.",
              },
              {
                title: "Continuous Learning",
                description: "We embrace lifelong learning and stay updated with the latest trends and technologies.",
              },
              {
                title: "Impact",
                description:
                  "We focus on creating solutions that make a real difference in people's lives and businesses.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

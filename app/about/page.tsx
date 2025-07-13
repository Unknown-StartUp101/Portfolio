"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Twitter } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function AboutPage() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const teamMembers = [
    {
      name: "Abdullah Farid",
      role: "Backend Developer & ML Engineer",
      specialization: "Node.js, Nest.js, FastApi, Database Design, Python, C++",
      image: "/profile-images/Screenshot 2025-07-11 at 16.02.30.png",
      description:
        "As a Backend Developer & ML Engineer, I architect and build high-performance backend systems and intelligent solutions. Using Node.js, Nest.js, FastAPI, and C++, I create scalable APIs and optimized database designs. With Python expertise, I tackle complex challenges, delivering efficient, robust systems that power innovation.",
      shortDescription:
        "Backend Developer & ML Engineer specializing in high-performance systems and intelligent solutions.",
      social: { linkedin: "https://www.linkedin.com/in/abdullah-75f/", github: "#", twitter: "#" },
    },
    {
      name: "Bisrat Berhanu",
      role: "UI/UX Designer & Co-Founder",
      specialization: "User Experience, Interface Design, Prototyping",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Dedicated to crafting intuitive and beautiful user experiences that delight users and drive business success. Expert in user research, wireframing, prototyping, and design systems.",
      shortDescription: "UI/UX Designer dedicated to crafting intuitive and beautiful user experiences.",
      social: { linkedin: "https://www.linkedin.com/in/bisrat-berhanu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "#", twitter: "#" },
    },
    {
      name: "Hermon Getachew",
      role: "Backend Developer & Co-Founder",
      specialization: "Python, Django, Database Design",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Expert in building robust backend systems and APIs with a focus on scalability, security, and performance. Passionate about clean architecture and best practices in software development.",
      shortDescription: "Expert in building robust backend systems and APIs with focus on scalability.",
      social: { linkedin: "https://linkedin.com/in/hermon-getachew", github: "#", twitter: "#" },
    },
    {
      name: "Kidus Melaku",
      role: "Backend Developer & AI Engineer",
      specialization: "Node.js, Hono.js, Golang, Gin, Database Design, Docker, Python, C++",
      image: "/profile-images/eskalate_profile.jpg",
      description:
        "I build reliable, high-performance backend systems and bring AI solutions to life. With deep experience in modern backend stacks. From Node.js to Golang, I specialize in crafting scalable APIs, robust database architectures, and containerized services. Passionate about turning complex problems into elegant code.",
      shortDescription: "Backend Developer & AI Engineer building reliable, high-performance systems and AI solutions.",
      social: { linkedin: "https://linkedin.com/in/kidus-melaku", github: "#", twitter: "#" },
    },
    {
      name: "Melakeselam Yitbarek",
      role: "Frontend Developer",
      specialization:
        "React, Next.js, Tailwind CSS and its ecosystem, Ant Design, Component Architecture, State Management, Performance Optimization, CI/CD",
      image: "/profile-images/image.png",
      description:
        "Skilled frontend developer with experience in building performant, scalable, and accessible user interfaces. Passionate about clean code, responsive design, and delivering great user experiences.",
      shortDescription: "Frontend developer building performant, scalable, and accessible user interfaces.",
      social: { linkedin: "https://www.linkedin.com/in/melakeselam-yitbarek-se", github: "#", twitter: "#" },
    },
    {
      name: "Nahom Mitiku",
      role: "Frontend Developer & UI/UX designer",
      specialization: "Nuxt, Nest.js, React.js, Django, Database, Figma, Tailwind CSS, Bootstrap, Python, C++, C",
      image: "/profile-images/20250711_113504.jpg",
      description:
        "I'm a Frontend Developer and UI/UX Designer focused on creating clean, responsive, and user-friendly digital experiences. With a strong eye for design and solid development skills, I bridge the gap between visuals and functionality. I enjoy turning complex ideas into intuitive interfaces that users love. Collaborative, detail-oriented, and driven to deliver quality in every project.",
      shortDescription:
        "Frontend Developer & UI/UX Designer creating clean, responsive, and user-friendly experiences.",
      social: { linkedin: "https://linkedin.com/in/nahom-mitiku", github: "#", twitter: "#" },
    },
    {
      name: "Simon Assfaw",
      role: "Frontend Developer",
      specialization: "React, Next.js, Tailwind CSS, Beginner Express.js, State Management with Redux Toolkit",
      image: "/profile-images/183A9650(1)(1).png",
      description:
        "Skilled in creating dynamic user interfaces with React and Next.js, with beginner knowledge in Express.js for backend basics, and experience in state management using Redux Toolkit.",
      shortDescription: "Frontend developer skilled in creating dynamic user interfaces with React and Next.js.",
      social: { linkedin: "https://linkedin.com/in/simon-assfaw", github: "#", twitter: "#" },
    },
    {
      name: "Yonatan Tizazu",
      role: "Backend Developer & DevOps Engineer",
      specialization:
        "Node.js, Express.js, Nest.js, Hono.js, Golang, Gin, Gorilla Mux, Database Design, AWS, Docker, CI/CD, Infrastructure",
      image: "/profile-images/pp(1)(1).png",
      description:
        "Expert in building robust backend systems, APIs, cloud infrastructure and deployment automation. Passionate about DevOps practices, containerization, and creating scalable, maintainable systems.",
      shortDescription: "Backend Developer & DevOps Engineer expert in robust systems and cloud infrastructure.",
      social: { linkedin: "https://linkedin.com/in/yonatan-tizazu", github: "#", twitter: "#" },
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
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Negarit Systems
                </span>{" "}
                was born from the shared vision of eight passionate graduates from Addis Ababa Institute of Technology.
                United by our love for technology and driven by the desire to create meaningful impact, we came together
                to form a company that would bridge the gap between innovative ideas and practical solutions.
              </p>
              <p>
                Our diverse team brings together expertise in UI/UX design, full-stack development, backend engineering,
                artificial intelligence, mobile development, DevOps, and product management. This multidisciplinary
                approach allows us to tackle complex challenges from every angle and deliver comprehensive solutions.
              </p>
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
                className="group relative"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
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
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {member.shortDescription}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      {member.social?.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {member.social?.github && member.social.github !== "#" && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {member.social?.twitter && member.social.twitter !== "#" && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                    </div>
                  </CardContent>

                  {/* Hover Overlay */}
                  {hoveredMember === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 flex flex-col justify-center"
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{member.name}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.role}</p>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.description}</p>

                        {/* Enhanced Social Links */}
                        <div className="flex justify-center space-x-3 mt-4">
                          {member.social?.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-3 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-sm"
                            >
                              <Linkedin size={16} />
                              <span>LinkedIn</span>
                            </a>
                          )}
                          {member.social?.github && member.social.github !== "#" && (
                            <a
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
                            >
                              <Github size={16} />
                              <span>GitHub</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
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

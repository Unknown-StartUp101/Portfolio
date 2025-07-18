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
      name: "Bisrat Berhanu",
      role: "Backend Developer & Data Engineer",
      image: "/profile-images/bisrat.JPG",
      description: "Experienced in developing robust APIs for backend applications and managing servers for large-scale image and video generation. Experienced in GPU sharding, SSH-based server operations, and efficient data processing and refinement."
    },
    {
      name: "Yonatan Tizazu",
      role: "Backend Developer & DevOps Engineer",
      image: "/profile-images/pp(1)(1).png",
      description:
        "Expert in building robust backend systems, APIs, cloud infrastructure and deployment automation. Passionate about DevOps practices, containerization, and creating scalable, maintainable systems.",
      // social: { linkedin: "https://linkedin.com/in/yonatan-tizazu", github: "#", twitter: "#" },
    },
    {
      name: "Hermon Getachew",
      role: "Backend Developer & DevOps Engineer",
      image: "/profile-images/hermon.JPG",
      description: "Established in designing high-performance backend systems and optimizing complex databases for efficiency. Experienced in building fault-tolerant microservices and streamlining deployment pipelines. Strong DevOps focus on automation, reliability and scalable infrastructure."
    },
    {
      name: "Melakeselam Yitbarek",
      role: "Frontend Developer",
      image: "/profile-images/image.png",
      description: "Frontend Developer with a strong record of building fast, scalable, and accessible web apps. Skilled in clean, responsive UI design and modern best practices, with a passion for great user experiences.",
      // social: { linkedin: "https://www.linkedin.com/in/melakeselam-yitbarek-se", github: "#", twitter: "#" },
    },
    {
      name: "Abdullah Farid",
      role: "Backend Developer & ML Engineer",
      image: "/profile-images/Screenshot 2025-07-11 at 16.02.30.png",
      description: "Seasoned Backend Developer and ML Engineer skilled in building scalable systems and deploying ML models. Expert in efficient APIs and data pipelines, focused on clean code, modern practices, and performance-driven development."
    },

    {
      name: "Kidus Melaku",
      role: "Backend Developer & AI Engineer",
      image: "/profile-images/eskalate_profile.jpg",
      description: "Skilled in building reliable, high-performance backend systems and bringing AI solutions to life. Experienced in designing scalable APIs, robust database architectures, and containerized microservices. Strong focus on transforming complex challenges into efficient, elegant solutions that drive business success."
    },
    {
      name: "Nahom Mitiku",
      role: "Frontend Developer & UI/UX designer",
      image: "/profile-images/nah.JPG",
      description: "Frontend Developer and UI/UX Designer passionate about crafting clean, responsive, and user-friendly interfaces. I combine design sense with development skills to create intuitive digital experiences."
    },
    {
      name: "Simon Assfaw",
      role: "Frontend Developer",
      image: "/profile-images/183A9650(1)(1).png",
      description:
        "Skilled frontend developer passionate about crafting interactive, user-friendly interfaces. Combines modern development practices and strong state management to build responsive, visually appealing web experiences that simplify complex ideas.",
      // social: { linkedin: "https://linkedin.com/in/simon-assfaw", github: "#", twitter: "#" },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/50 dark:to-purple-950/50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Story
            </h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
            className="mb-20"
          >
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <p className="pl-8">
                  <span className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                    Negarit Systems
                  </span>
                  was born from the shared vision of eight passionate graduates from Addis Ababa Institute of Technology.
                  United by our love for technology and driven by the desire to create meaningful impact, we came together
                  to form a company that would bridge the gap between innovative ideas and practical solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                <p className="pr-8 text-right">
                  Our diverse team brings together expertise in UI/UX design, full-stack development, backend engineering,
                  artificial intelligence, mobile development, DevOps, and product management. This multidisciplinary
                  approach allows us to tackle complex challenges from every angle and deliver comprehensive solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-blue-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
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
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-purple-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-xl">V</span>
                  </div>
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">👥</span>
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
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
                          {member.name == "Bisrat Berhanu" ? "CEO" : member.name == "Yonatan Tizazu" ? "COO": member.name == "Hermon Getachew" || member.name == "Melakeselam Yitbarek" ? "CTO" : "Co-Founder"}
                        </Badge>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {member.description}
                    </p>

                    {/* Social Links */}
                    {/* <div className="flex justify-center space-x-3">
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
                    </div> */}
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

                        {/* <div className="flex justify-center space-x-3 mt-4">
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
                        </div>  */}
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
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/50 dark:to-pink-950/50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">💎</span>
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What Drives Us
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
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

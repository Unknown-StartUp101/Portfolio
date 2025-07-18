"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Palette, Brain, Users, Target, Award, Star, ChevronDown } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"

// Dynamically import Three.js components to avoid SSR
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false })
const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => mod.OrbitControls), { ssr: false })
const Sphere = dynamic(() => import("@react-three/drei").then((mod) => mod.Sphere), { ssr: false })
const MeshDistortMaterial = dynamic(() => import("@react-three/drei").then((mod) => mod.MeshDistortMaterial), { ssr: false })
const Float = dynamic(() => import("@react-three/drei").then((mod) => mod.Float), { ssr: false })

// 3D Hero Component
function Hero3D() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900" />
  }

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color={theme === "dark" ? "#1e40af" : "#3b82f6"}
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.4}
          />
        </Sphere>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

// Counter Animation Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function HomePage() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  const services = [
    {
      icon: Code,
      title: "Web & Mobile Development",
      description:
        "Custom-built, scalable web and mobile apps designed to deliver seamless user experiences and drive business growth.",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Intuitive and engaging designs crafted to captivate users and simplify complex workflows across all platforms.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: Brain,
      title: "AI & Data Solutions",
      description:
        "Smart AI-powered tools and data-driven insights that help you make faster, smarter decisions with confidence.",
      gradient: "from-pink-600 to-red-600",
    },
  ]

  const techStack = [
    // Core Technologies
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    
    // Frontend & UI
    "Vue.js",
    "Angular",
    "Tailwind CSS",
    "Material-UI",
    "Framer Motion",
    "Three.js",
    "Redux",
    "GraphQL",
    
    // Backend & APIs
    "Express.js",
    "Django",
    "FastAPI",
    "Java",
    "Spring Boot",
    "Go",
    "Rust",
    "REST APIs",
    
    // Mobile & Cross-platform
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    
    // Databases & Storage
    "Redis",
    "Elasticsearch",
    "Firebase",
    "Supabase",
    
    // Cloud & DevOps
    "Google Cloud",
    "Azure",
    "Terraform",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
    
    // AI & Machine Learning
    "TensorFlow",
    "PyTorch",
    "OpenAI API",
    "Hugging Face",
    "LangChain",
    
    // Data & Analytics
    "Apache Spark",
    "Apache Kafka",
    "Tableau",
    "Power BI",
    
    // Web3 & Blockchain
    "Blockchain",
    "Web3",
    "Solidity",
    "Ethereum",
    
    // Payment & E-commerce
    "Stripe",
    "Shopify",
    
    // Communication
    "Twilio",
    "Slack API",
    
    // Authentication
    "Auth0",
    "NextAuth.js",
    
    // Development Tools
    "Git",
    "VS Code",
    "Jest",
    "Cypress",
    "Vite",
    "ESLint",
    
    // Monitoring
    "Sentry",
    "Google Analytics",
    
    // Deployment
    "Vercel",
    "Netlify",
    "Heroku"
  ]

  const coreValues = [
    { icon: Target, title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
    { icon: Users, title: "Collaboration", description: "Working together to achieve extraordinary results" },
    { icon: Award, title: "Excellence", description: "Delivering quality that exceeds expectations" },
    { icon: Star, title: "Integrity", description: "Building trust through transparency and honesty" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      text: "Negarit Systems transformed our digital presence with their innovative solutions. Exceptional work!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      text: "The team's expertise in AI solutions helped us automate our processes and increase efficiency by 300%.",
      rating: 5,
    },
    {
      name: "Aisha Mohammed",
      company: "E-Commerce Plus",
      text: "Outstanding UI/UX design that significantly improved our user engagement and conversion rates.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Hero3D />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              Born in Ethiopia. Built for the World.
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Building What's Next. Today.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Innovating with purpose, grounded in culture. We create scalable solutions that drive impact from Addis
            Ababa to the world.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              
              <Link href="/contact">Get Started </Link><ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
            >
             <Link href="/projects">View Our Work</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-blue-600" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver comprehensive technology solutions that transform businesses and drive innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose Negarit Systems?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring a unique blend of local expertise and global standards to every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌍",
                title: "Global Perspective",
                description: "Born in Ethiopia, built for the world. We understand both local needs and international standards."
              },
              {
                icon: "⚡",
                title: "Fast Delivery",
                description: "Agile development approach ensures quick turnaround times without compromising quality."
              },
              {
                icon: "🤝",
                title: "Dedicated Support",
                description: "24/7 support available. We're here for you every step of the way, even after project completion."
              },
              {
                icon: "💡",
                title: "Innovation First",
                description: "Cutting-edge solutions with the latest technologies to keep you ahead of the competition."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: 98, suffix: "%", label: "Success Rate" },
              { number: 150, suffix: "+", label: "Happy Clients" },
              { number: 200, suffix: "+", label: "Projects Completed" },
              { number: 24, suffix: "/7", label: "Support Available" },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={metric.number} suffix={metric.suffix} />
                </div>
                <p className="text-xl text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-purple-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and turn your vision into reality with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export const projects = [
    {
      title: "HealthSync",
      description: "An AI-powered medical platform designed to digitize the healthcare field. It connects patients and doctors in a seamless and efficient manner. The platform leverages artificial intelligence to enhance medical diagnosis, streamline appointment scheduling, and provide educational resources for users.",
      image: "/projects/health_sync.jpg",
      technologies: ["NextJs", "Express", "MongoDB", "Tailwindcss"],
      category: "AI Powered Healthcare",
      features: [
        "Appointment Scheduling for patients",
        "Doctor and patient live chat",
        "Doctor Rating",
        "AI-Assisted Diagnosis",
        "Educational Blogs"
      ],
      github: "https://github.com/melegithubyit/HealthSync-fullstack",
      live: "https://health-sync-ivory.vercel.app/",
    },
    {
      title: "Rhythmix",
      description: "A full-stack music app with playing, uploading, searching and deleting capabilities. Implemented clean architecture principles and seamless state management.",
      image: "/projects/music.webm",
      technologies: ["React", "GO", "MongoDB", "RTK"],
      category: "Web Application",
      features: [
        "Music play & navigation",
        "Favourite songs",
        "Music Upload/Delete",
      ],
      github: "https://github.com/Mercury1565/Music_Player-A_Full_Stack_Web_Project",
      live: "https://music-player-a-full-stack-web-project.vercel.app/",
    },
    {
      title: "Roha Coffee",
      description: "Roha is a responsive, multi-section business website built to showcase the services of Ethio Binamer Trading PLC. The site is structured around four core business pillars—coffee export, machinery import, equipment rental, and real estate—each presented with clean UI components, clear calls to action, and optimized performance for both desktop and mobile users. It likely uses a modern full-stack (django) with attention to SEO, user accessibility, and scalable design patterns, making it a solid example of a business-focused, service-driven web application.",
      image: "/projects/roha.mp4",
      technologies: ["Django", "Postgres", "Bootstrap"],
      category: "Web Application",
      features: [
        "Responsive design",
        "Multi-section layout ",
        "Reusable components",
        "Clean UI/UX"
      ],
      github: "https://github.com/nahom124578/roha_coffee.git",
      live: "https://roha.dev.awura.tech/",
    },
    {
      title: "VoyageGuard",
      description: "IoT-based vehicle tracking system. It utilizes GPS, ELM327 (OBD2), and ESP32 for real-time monitoring of asset location and condition, incorporating machine learning for predictive maintenance.",
      image: "/projects/vehicle_tracking_system.png",
      technologies: ["React Native", "NestJS", "TypeORM", "Random Forest Model"],
      category: "Mobile App Development",
      features: [
        "Vehicle tracking with GPS",
        "Vehicle health Monitoring",
        "Geo-fencing alert"
      ],
      github: "https://github.com/abdullah75f/IoT-Enabled-Real-Time-Asset-Tracking-and-Predictive-Analytics-for-Enhanced-Management",
    },
    {
      title: "Evidence-Based Static Branch Prediction with Deep Learning",
      description: "Developed a Graph Neural Network (GNN)-based model to enhance branch prediction accuracy for hard-to-predict branches in modern processors, leveraging LLVM IR and XFGs. We were able to process a diverse program corpus, achieving a significant reduction in miss rates compared to traditional heuristic-based predictors",
      image: "/projects/gnn.webm",
      technologies: ["Python", "PyTorch","PyTorch Geometric", "LLVM"],
      category: "Machine Learning + Computer Architecture",
      features: [
        "Computer Architecture",
        "Machine Learning",
      ],
      github: "https://github.com/poseidon2022/EBSBP-Using-GNNs",
    },
  ]
import { CVData } from '../types/cv';

export const defaultCV: CVData = {
  name: "Abdulrahman M. Shalaby",
  title: "Communication & Systems Engineering Researcher",
  contact: {
    email: "abdulrahman.shalaby@example.com",
    phone: "+60 123-456-7890",
    location: "Kajang, Selangor, Malaysia",
    linkedin: "linkedin.com/in/abdulrahman-shalaby",
    googleScholar: "scholar.google.com",
    orcid: "0000-0000-0000-0000"
  },
  summary: "Innovative researcher and engineer specializing in communication systems, optical technologies, and smart energy management. Proven track record in antenna design, UAV communications, and environmental monitoring systems. Published 8 peer-reviewed papers in high-impact journals with expertise in optical coherence tomography, wireless communications, and optimization algorithms. Co-inventor on 4 granted U.S. patents. Google Scholar: 150+ citations, h-index: 7.",
  education: [
    {
      degree: "Master of Science in Communication & Systems Engineering",
      institution: "Universiti Tenaga Nasional (UNITEN)",
      location: "Kajang, Selangor, Malaysia",
      period: "May 2018 - 2021",
      gpa: "3.3"
    },
    {
      degree: "Bachelor of Science in Communication and Electronics Engineering",
      institution: "Arab Academy for Science, Technology and Maritime Transport",
      location: "Sheraton, Cairo, Egypt",
      period: "Sept 2012 - Sept 2017",
      gpa: "2.61"
    }
  ],
  experience: [
    {
      position: "Research Assistant",
      company: "UNITEN Research Lab",
      location: "Kajang, Malaysia",
      period: "2018 - 2021",
      achievements: [
        "Designed and optimized microstrip antenna for WiMAX and Wi-Fi applications in laptop systems",
        "Developed IP-PBX communication system using 3CX software on AWS with Raspberry Pi 4",
        "Created MPSK transmission system for voice-band telephone channels, optimizing data communication efficiency"
      ]
    },
    {
      position: "Project Leader & Developer",
      company: "Academic Projects",
      location: "Cairo, Egypt",
      period: "2015 - 2017",
      achievements: [
        "Led student team in designing smart home prototype using electronics and automation",
        "Developed ESP32-based web server for automated smart home control system",
        "Participated in NileSat satellite communications program"
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["C++", "C", "Java", "Python", "MATLAB", "Visual Basic", "SQL"]
    },
    {
      category: "Engineering Tools",
      items: ["CST Microwave Studio", "Arduino", "Linux OS", "Drupal", "Microsoft Office"]
    },
    {
      category: "Technologies",
      items: ["Optical Systems", "Antenna Design", "IoT", "Smart Energy Systems", "Network Analysis"]
    },
    {
      category: "Certifications & Training",
      items: ["CCNA (in progress)", "IELTS (Grade 6)", "Hardware & Software Maintenance"]
    }
  ],
  researchProjects: [
    {
      title: "Multiwavelength Brillouin Erbium Fiber Laser",
      period: "2020 - 2021",
      role: "Lead Researcher",
      description: "Developed a Multiwavelength Brillouin Erbium Fiber Laser featuring triple frequency spacing for enhanced spectral efficiency and flexibility, enabling improved performance in optical communication and sensing applications.",
      technologies: ["Optical Systems", "Fiber Laser Technology", "MATLAB"]
    },
    {
      title: "Optimized Smart Energy Management System for Campus Buildings",
      period: "2021 - 2022",
      role: "Principal Investigator",
      description: "Created a conceptual model and prototype for monitoring energy consumption and optimizing distribution in smart buildings using advanced algorithms.",
      technologies: ["IoT", "Energy Management", "Particle Swarm Optimization"],
      collaborators: ["Manjit Singh Sidhu", "Weng Chun Tan", "Low Zhia Wei", "Chua Jing Yong", "Lee Yun Xi"]
    },
    {
      title: "UAV Placement Optimization for 5G/6G Networks",
      period: "2020 - Present",
      role: "Lead Researcher",
      description: "Investigated the impact of environmental factors including rainfall, dust, and sandstorms on UAV base station performance for 5G/6G networks in Malaysian and Saudi Arabian environments.",
      technologies: ["UAV Communications", "5G/6G", "Environmental Modeling"],
      collaborators: ["Noor S. Othman"]
    },
    {
      title: "Advanced Indoor Air Pollution Detection System",
      period: "2023 - 2024",
      role: "Co-Investigator",
      description: "Developed chirped spectral modulation techniques with particle swarm optimization algorithms for effective indoor air pollution detection and monitoring.",
      technologies: ["Optical Sensing", "PSO Algorithms", "Environmental Monitoring"],
      collaborators: ["Mohamed Shalaby", "Noor S. Othman"]
    },
    {
      title: "IP-PBX System Implementation",
      period: "2020",
      role: "System Designer",
      description: "Designed and implemented a cost-effective IP-PBX system using 3CX software on AWS with Raspberry Pi 4 as hardware platform and Wireshark for traffic analysis.",
      technologies: ["3CX", "AWS", "Raspberry Pi", "Wireshark", "Network Security"]
    }
  ],
  awards: [
    {
      title: "AIESEC Cultural Ambassador",
      issuer: "AIESEC International",
      date: "2016",
      description: "Volunteered in raising awareness of culture understanding and attention to caring for individuals with albinism"
    }
  ],
  publications: [
    {
      title: "Impact of Dust and Sandstorms on 6G UAV Base Station Performance in Arid Saudi Arabian Environments",
      authors: ["A. M. Shalaby", "N. S. Othman", "M. Shalaby"],
      journal: "IEEE Access",
      year: "2024",
      abstract: "Investigation of environmental impact on 6G UAV communications in arid regions.",
      citations: 12
    },
    {
      title: "Advanced Chirped Spectral Modulation Techniques and Particle Swarm Optimization Algorithms for Effective Indoor Air Pollution Detection and Monitoring",
      authors: ["Abdulrahman Shalaby", "Noor S. Othman", "Mohamed Shalaby"],
      journal: "Alexandria Engineering Journal",
      year: "2024",
      doi: "10.1016/j.aej.2024.03.023",
      citations: 18
    },
    {
      title: "Sagnac interferometer based Optical Coherence Tomography",
      authors: ["A. M. Shalaby", "M. Shalaby"],
      journal: "Ain Shams Engineering Journal",
      year: "2023",
      doi: "10.1016/j.asej.2023.102456",
      citations: 25
    },
    {
      title: "A Prototype Model of Monitoring Energy Consumption and Optimizing Distribution of Smart Buildings",
      authors: ["Abdulrahman M. Shalaby", "Manjit Singh Sidhu", "Weng Chun Tan", "Low Zhia Wei", "Chua Jing Yong", "Lee Yun Xi"],
      conference: "IEEE International Conference on Artificial Intelligence in Engineering and Technology (IICAIET)",
      year: "2022",
      doi: "10.1109/IICAIET55139.2022.9936774",
      citations: 15
    },
    {
      title: "The Effect of Rainfall on the UAV Placement for 5G Spectrum in Malaysia",
      authors: ["A. M. Shalaby", "N. S. Othman"],
      journal: "Electronics",
      year: "2022",
      doi: "10.3390/electronics11050681",
      citations: 32
    },
    {
      title: "Environmental pollution monitoring: a novel vectorial algorithm technique for oil detection in wastewater",
      authors: ["Abdul Rahman M. Shalaby", "Khalid A. AlMuhanna", "Mohamed Shalaby"],
      journal: "Spectroscopy Letters",
      year: "2020",
      doi: "10.1080/00387010.2020.1832529",
      citations: 28
    },
    {
      title: "Optimized Smart Energy Management System for Campus Buildings: A Conceptual Model",
      authors: ["Abdulrahman M. Shalaby", "Manjit Singh Sidhu", "Weng Chun Tan", "Low Zhia Wei", "Chua Jing Yong", "Lee Yun Xi"],
      conference: "ICASTE",
      year: "2022",
      abstract: "Conceptual framework for intelligent energy management in educational facilities.",
      citations: 10
    },
    {
      title: "Optimized Control of Dual Input DC-DC Converter for Mitigating Partial Shading Effects using Particle Swarm Optimization in Photovoltaic Systems",
      authors: ["A. M. Shalaby", "M. Shalaby", "Abdullah Alhatlani", "Noor S. Othman", "Manjit Singh Sidhu"],
      journal: "Submitted for publication",
      year: "2024",
      abstract: "Novel approach to optimize photovoltaic system performance under partial shading conditions.",
      citations: 0
    }
  ],
  patents: [
    {
      title: "Hybrid free space oscillators for ultraprecision sensor applications",
      inventors: ["Mohamed Yehia Mohamed Shalaby", "Abdulrahman M. Shalaby"],
      patentNumber: "US 12,480,789",
      filingDate: "February 18, 2025",
      issueDate: "November 25, 2025",
      status: "Granted" as const,
      jurisdiction: "United States",
      abstract: "A free space optical oscillator system for sensing perturbations in optical signals transmitted through a free space propagation region includes a laser diode which generates intensity-modulated optical signals."
    },
    {
      title: "System and method for target detection and energy delivery",
      inventors: ["Mohamed Yehia Mohamed Shalaby", "Abdullah N. Alhatlani", "Abdulrahman M. Shalaby"],
      patentNumber: "US 12,483,038",
      filingDate: "July 10, 2025",
      issueDate: "November 25, 2025",
      status: "Granted" as const,
      jurisdiction: "United States",
      abstract: "A photovoltaic (PV) power system and a method for controlling the PV power system. The system includes two or more PV panels with maximum power point tracking (MPPT) circuit and a microcontroller configured to execute a real-time control algorithm."
    },
    {
      title: "Hybrid free space acoustic oscillators for ultraprecision sensor applications",
      inventors: ["Mohamed Yehia Mohamed Shalaby", "Abdulrahman M. Shalaby"],
      patentNumber: "US 12,372,450",
      filingDate: "March 31, 2025",
      issueDate: "July 29, 2025",
      status: "Granted" as const,
      jurisdiction: "United States",
      abstract: "A hybrid free-space acoustic oscillator system and method for detecting perturbations in a free-space region by analyzing phase-induced frequency shifts."
    },
    {
      title: "Adaptive innovative dual-polarized MIMO equalizer antenna system for crosstalk mitigation in dusty environments",
      inventors: ["Mohamed Yehia Mohamed Shalaby", "Yazeed M. Alkhirajh", "Mohamad A. Alawad", "Abdulrahman M. Shalaby"],
      patentNumber: "US 12,368,474",
      filingDate: "March 10, 2025",
      issueDate: "July 22, 2025",
      status: "Granted" as const,
      jurisdiction: "United States",
      abstract: "A system, method, and apparatus for adaptive signal equalization in an unmanned aerial vehicle (UAV) operating in a dusty environment. The system comprises dual-polarized MIMO antenna channels with dynamic dust compensation."
    }
  ],
  languages: ["English (IELTS Grade 6)", "Arabic (Native)", "Mandarin (Beginner)", "Malay (Beginner)"]
};
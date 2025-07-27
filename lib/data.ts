export const personalInfo = {
  name: "Sriram M. Pant",
  title: "Software Developer",
  email: "sriram.pant5@gmail.com",
  location: "Delhi, India",
  github: "https://github.com/sam1322",
  linkedin: "https://linkedin.com/in/sriram-pant-6b38bb1ab/",
  imageUrl: "https://res.cloudinary.com/dw5xqmxyu/image/upload/v1753630413/IMG_20250628_193825659_HDR_egewxb.jpg",
  resume: "https://drive.google.com/file/d/1_Buio4KnRnKCYGFfTPxjW7Ts-vZkiDca/view?usp=sharing"
  // imageUrl: "https://drive.google.com/file/d/1ip8tBb5k6cW9HCMPqQmXccxi2w1GvwWM/view?usp=sharing"
  // imageUrl: "https://weekday-user-pics.s3.us-east-2.amazonaws.com/profile-images/sriram-pant-6b38bb1ab.jpg"
}

export const experiences = [
  {
    id: 1,
    company: "Unisouk",
    position: "Software Developer",
    duration: "Nov 2024 – May 2025",
    location: "Surat, Gujarat",
    highlights: [
      "Built and maintained responsive, scalable UIs using React, TypeScript, and TanStack Router to unify major e-commerce platforms (Amazon, Flipkart, ONDC) into a seamless shopping experience.",
      "Collaborated with backend teams using NestJS and Node.js to integrate APIs, implement authentication, and enable reliable frontend-backend communication",
      "Developed PostgreSQL logical replication using Node.js, employing the Outbox Pattern to stream data changes via Kafka and ensure eventual consistency across distributed systems.",
      "Built an AI-powered chatbot interface with React, interacting with backend LLM/RAG services via NestJS APIs, providing intelligent customer support.",
      "Designed and developed the UI for Soulera, a handwriting analysis platform leveraging AI to generate personality insights based on user input."
    ]
  },
  {
    id: 2,
    company: "Vasitum",
    position: "Software Developer",
    duration: "June 2022 – Jan 2024",
    location: "Noida, U.P.",
    highlights: [
      "Designed and implemented key user journeys (signup, login, onboarding) using React.js and Next.js, improving usability and reducing drop-off rates.",
      "Built a robust bulk resume upload module in React, enabling parallel uploads with real-time progress tracking and retry support — significantly improving the hiring process.",
      "Integrated Google and Microsoft authentication to allow seamless calendar scheduling, email communication, and team collaboration — driving a 20% boost in user engagement.",
      "Upgraded and refactored legacy Next.js codebase (v9 → v12) for better performance and developer experience."
    ]
  }
]

// export const projects = [
//   {
//     id: 1,
//     title: "E-commerce Price Tracker",
//     description: "Full-stack price comparison tool that tracks product prices across Amazon and Flipkart",
//     techStack: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Prisma ORM", "Playwright", "Docker"],
//     highlights: [
//       "Built full-stack price comparison tool using TypeScript, NestJS, and Next.js that tracks product prices across Amazon and Flipkart with automated web scraping via Playwright",
//       "Implemented scheduled price monitoring system checking 100+ products every 6 hours, storing historical data in PostgreSQL, resulting in average user savings of 15-20%",
//       "Developed real-time price drop notification system and data visualization dashboard with interactive charts showing price trends over time"
//     ],
//     github: "https://github.com/sam1322/price-tracker-backend",
//     live: ""
//   },
//   {
//     id: 2,
//     title: "Twitch Clone",
//     description: "Full-featured streaming platform with live video broadcasting and real-time chat",
//     techStack: ["React.js", "Next.js", "Spring Boot", "Java", "PostgreSQL", "Nginx RTMP"],
//     highlights: [
//       "Developed a full-featured Twitch clone using Next.js for the frontend and Spring Boot for the backend, focusing on performance, scalability, and rapid development.",
//       "Built secure REST APIs in Spring Boot for handling authentication, user management, and video session data.",
//       "Integrated Nginx RTMP server to handle live video streaming, enabling low-latency broadcasting and smooth media delivery.",
//       "Implemented real-time live chat functionality using WebSockets, enabling interactive user engagement during live streams."
//     ],
//     github: "https://github.com/sam1322/twitch-clone-frontend",
//     live: "https://twitch-clone-frontend-private.vercel.app/"
//   },
//   {
//     id: 3,
//     title: "Reddit Clone",
//     description: "Full-stack Reddit clone with server-side rendering and secure authentication",
//     techStack: ["Next.js", "React.js", "MySQL", "Prisma", "Uploadthing"],
//     highlights: [
//       "Developed a full-stack Reddit clone web application using Next.js for both front-end and back-end, leveraging server-side rendering for improved performance.",
//       "Utilized Prisma with MySQL for the database and NextAuth.js for secure user authentication and management."
//     ],
//     github: "https://github.com/sam1322/nextjs-reddit",
//     live: ""
//   }
// ]

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  highlights: string[];
  github: string;
  live?: string;
  color: string;
}
export const projects: ProjectType[] = [
  {
    id: 1,
    title: "E-commerce Price Tracker",
    description: "Full-stack price comparison tool that tracks product prices across Amazon and Flipkart",
    image: "https://res.cloudinary.com/dw5xqmxyu/image/upload/v1753635211/Create-Next-App-07-24-2025_05_24_PM-1_bsei6n.png", // Add your project image
    techStack: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Prisma ORM", "Playwright", "Docker"],
    highlights: [
      "Built full-stack price comparison tool using TypeScript, NestJS, and Next.js that tracks product prices across Amazon and Flipkart with automated web scraping via Playwright",
      "Implemented scheduled price monitoring system checking 100+ products every 6 hours, storing historical data in PostgreSQL, resulting in average user savings of 15-20%",
      "Developed real-time price drop notification system and data visualization dashboard with interactive charts showing price trends over time"
    ],
    github: "https://github.com/sam1322/price-tracker-backend",
    // live: "https://price-tracker-demo.com",
    color: "from-purple-600 to-blue-600"
  },
  {
    id: 2,
    title: "Twitch Clone",
    description: "Full-featured streaming platform with live video broadcasting and real-time chat",
    image: "https://res.cloudinary.com/dw5xqmxyu/image/upload/v1753635192/327942574-9419582f-e037-4532-921d-6c73ebe7d610_resr5g.png", // Add your project image
    techStack: ["React.js", "Next.js", "Spring Boot", "Java", "PostgreSQL", "Nginx RTMP"],
    highlights: [
      "Developed a full-featured Twitch clone using Next.js for the frontend and Spring Boot for the backend, focusing on performance, scalability, and rapid development.",
      "Built secure REST APIs in Spring Boot for handling authentication, user management, and video session data.",
      "Integrated Nginx RTMP server to handle live video streaming, enabling low-latency broadcasting and smooth media delivery.",
      "Implemented real-time live chat functionality using WebSockets, enabling interactive user engagement during live streams."
    ],
    github: "https://github.com/sam1322/twitch-clone-frontend",
    // live: "https://twitch-clone-frontend-private.vercel.app/",
    color: "from-pink-600 to-purple-600"
  },
  {
    id: 3,
    title: "Reddit Clone",
    description: "Full-stack Reddit clone with server-side rendering and secure authentication",
    image: "https://res.cloudinary.com/dw5xqmxyu/image/upload/v1753635311/homepage_xobxmj.png",
    // image: "https://github.com/tinspham209/breadit/blob/main/assets/homepage.png?raw=true", // Add your project image
    techStack: ["Next.js", "React.js", "MySQL", "Prisma", "Uploadthing"],
    highlights: [
      "Developed a full-stack Reddit clone web application using Next.js for both front-end and back-end, leveraging server-side rendering for improved performance.",
      "Utilized Prisma with MySQL for the database and NextAuth.js for secure user authentication and management."
    ],
    github: "https://github.com/sam1322/nextjs-reddit",
    // live: "https://reddit-clone-demo.com",
    color: "from-orange-600 to-red-600"
  }
]

export const projectListUrl = 'https://github.com/sam1322?tab=repositories'

export const skills = {
  languages: ["C++", "Java", "Go", "JavaScript", "TypeScript"],
  frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Express.js", "NestJS", "Spring Boot"],
  database: ["PostgreSQL", "MySQL", "Prisma ORM"],
  tools: ["Git", "Docker", "GitHub Actions", "Azure"],
}
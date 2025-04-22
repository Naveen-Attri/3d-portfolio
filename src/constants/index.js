const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Solutions", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Solutions", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Months Learning Android Dev" },
  { value: 6, suffix: "", label: "Technologies Learned" },
  { value: 7, suffix: "", label: "Completed Projects" },
  { value: 3, suffix: "", label: "Hackathons Attended" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png", // You can keep or replace icons for better relevance
    title: "Quick Learning",
    desc: "Always eager to learn and adapt — picking up new tools, frameworks, and concepts fast.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Collaborative Spirit",
    desc: "Enjoys working in teams, open to feedback, and values clear and respectful communication.",
  },
  {
    imgPath: "/images/time.png",
    title: "Self-Driven",
    desc: "Takes initiative on personal projects and keeps pushing boundaries through consistent practice.",
  },
];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Developer",
    modelPath: "/models/cpp.glb",
    scale: 0.08,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
        "Naveen has shown curiosity and enthusiasm in exploring open-source contributions. He’s actively learning codebases and preparing meaningful PRs.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Started Exploring Open Source",
    date: "Mar 2025 – Present",
    responsibilities: [
      "Studying codebases of projects built with React, Vite, and Node.js.",
      "Learning how to navigate issues, write meaningful PRs, and follow contribution guidelines.",
      "Preparing for active contributions in the coming weeks.",
    ],
  },
  {
    review:
        "The phishing email detection system is a well-executed project that combines machine learning and cybersecurity awareness. Naveen’s commitment to applying theoretical concepts to real-world problems is commendable.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Developed Phishing Email Detection System",
    date: "Mar 2025 – Apr 2025",
    responsibilities: [
      "Used Python and ML techniques to classify phishing emails based on content and metadata.",
      "Preprocessed and vectorized data, trained models, and evaluated accuracy.",
      "Built a basic UI to simulate email classification for demonstration.",
    ],
  },
  {
    review:
        "Naveen’s work on his chess engine 'Sofia' displays deep understanding of algorithms, optimization, and systems design. It's an impressive demonstration of his growth and passion for C++ development.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Built 'Sofia' — A Chess Engine in C++",
    date: "Oct 2024 – Mar 2025",
    responsibilities: [
      "Implemented move generation using bitboards for performance.",
      "Developed alpha-beta pruning, quiescence search, and multithreading for efficient search.",
      "Built a UCI-compliant interface for external GUI integration.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Prof. Kavita Sharma",
    mentions: "@kavitasharma",
    review:
        "Naveen is one of the most enthusiastic and inquisitive students I’ve taught. His dedication to understanding core concepts and applying them in real projects, like his chess engine, is impressive.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Ankit Verma",
    mentions: "@ankitv",
    review:
        "I’ve collaborated with Naveen on multiple projects. He’s the kind of teammate who lifts the whole group. Always willing to debug, brainstorm, and experiment with fresh ideas.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Dr. Arvind Kumar",
    mentions: "@arvindsir",
    review:
        "Naveen is proactive, disciplined, and always exploring new avenues of development. His work ethic and curiosity in areas like graphics programming and open source make him stand out.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Ritika Mehra",
    mentions: "@ritikamehra",
    review:
        "As a peer, I’ve seen how consistently Naveen improves himself. He learns fast and is always experimenting with new tech — it’s motivating to be around someone so driven.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Rahul Iyer",
    mentions: "@rahuli",
    review:
        "Naveen’s ability to pick up new frameworks and technologies quickly makes him a great developer in the making. He’s focused, humble, and fun to work with!",
    imgPath: "/images/client5.png",
  },
  {
    name: "Dr. Neha Joshi",
    mentions: "@drnehaj",
    review:
        "His curiosity, passion for development, and initiative to work on meaningful side projects make Naveen a student with immense potential. Keep an eye on this one!",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

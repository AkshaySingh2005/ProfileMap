export interface Profile {
  id: string;
  name: string;
  location: string;
  bio: string;
  description: string;
  image: string;
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Akshay Kumar",
    location: "47 W 13th St, New York, NY 10011, USA",
    bio: "Tech enthusiast and avid traveler.",
    description:
      "Akshay is a software engineer with over 5 years of experience in web development. He specializes in building scalable applications and enjoys exploring new technologies. In his free time, he loves hiking and photography.",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: "2",
    name: "Sophia Johnson",
    location: "221B Baker Street, London, NW1 6XE, United Kingdom",
    bio: "Creative designer and coffee lover.",
    description:
      "Sophia is a UI/UX designer with a passion for creating user-friendly interfaces. She has worked on multiple high-profile projects and is known for her attention to detail. When not designing, she enjoys painting and visiting art galleries.",
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    id: "3",
    name: "Liam Smith",
    location: "1 Macquarie St, Sydney NSW 2000, Australia",
    bio: "Full-stack developer and fitness enthusiast.",
    description:
      "Liam is a full-stack developer with expertise in both frontend and backend technologies. He has a knack for solving complex problems and delivering high-quality solutions. Outside of work, he enjoys running marathons and cooking.",
    image: "https://picsum.photos/200/300?random=3",
  },
  {
    id: "4",
    name: "Emma Brown",
    location: "789 Yonge St, Toronto, ON M4W 2G8, Canada",
    bio: "Data scientist and bookworm.",
    description:
      "Emma is a data scientist with a strong background in machine learning and AI. She has contributed to several innovative projects and is passionate about using data to drive decisions. In her leisure time, she loves reading novels and gardening.",
    image: "https://picsum.photos/200/300?random=4",
  },
  {
    id: "5",
    name: "Noah Wilson",
    location: "Pariser Platz, 10117 Berlin, Germany",
    bio: "Cybersecurity expert and gamer.",
    description:
      "Noah is a cybersecurity expert with a focus on protecting organizations from digital threats. He has a deep understanding of network security and ethical hacking. When not working, he enjoys playing video games and exploring new tech gadgets.",
    image: "https://picsum.photos/200/300?random=5",
  },
];

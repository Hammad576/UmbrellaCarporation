import { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Umbrella Investments Private Limited",
    category: "Finance",
    image: "/finance.jpg", 
    description:
      "A Private Subsidiary of Umbrella deals with investment in Pakistan Stock Exchange and Mutual Funds.All the other financial matters of umbrealla are handeled there.",
    status: "Active",
    year: 2023,
    location: "Karachi, Pakistan",
  },
  {
    id: 2,
    title: "Umbrella Open Source",
    category: "Technology",
    image: "/opensource.jpg", 
    description:
      "Developing open-source Softwares, Coding Tools and Models. Our aim is to provide alternative to the paid softwares so with the help of community we can make the Tools accsssible to everyone.",
    status: "Active",
    year: 2022,
    location: "Global",
  },
  {
    id: 3,
    title: "Umbrella Tech Researcher",
    category: "Research",
    image: "/AI.jpg",  
    description:
      "This section deals with research on Technology in AI, data Science, and Internet User psycology, Quantum Computers and other technology products.",
    status: "Active",
    year: 2021,
    location: "Larkana, Pakistan",
  },
  {
    id: 4,
    title: "Umbrella Social Sciences & Psychology Researchers",
    category: "Social Sciences",
    image: "/psycology.jpg",  
    description:
      "This section deals with the research on Social Sciences and psycology. Different Societal problems and how they impact the human nature. Effects of Industrializaion and much more.",
    status: "Active",
    year: 2020,
    location: "Islamabad, Pakistan",
  },
];

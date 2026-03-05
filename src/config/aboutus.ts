import type { Milestone, TeamMember } from "../data/types";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";

export const milestones: Milestone[] = [
  {
    year: "2022",
    title: "The Spark",
    description: "Volts founded in a garage with a big dream.",
  },
  {
    year: "2024",
    title: "Series A",
    description: "Raised $4.2M to scale our human-centric AI.",
  },
  {
    year: "2026",
    title: "Global Reach",
    description: "Now serving over 1M users across three continents.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Elena Vance",
    role: "Founder & CEO",
    imageUrl: img1,
  },
  {
    name: "Sarah Jenkins",
    role: "Lead Engineer",
    imageUrl: img3,

  },
  {
    name: "Marcus Thorne",
    role: "Head of Design",
    imageUrl: img2, 
  },
];

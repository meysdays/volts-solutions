import type { FooterSection } from "../data/types";

export const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    children: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "About Us", path: "/about-us" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Contact Us",
    children: [
      { name: "Phone", value: "+234 801 234 5678" },
      { name: "Email", value: "hello@volts.com" },
      { name: "Location", value: "123 Taste Blvd, Lagos, Nigeria" },
    ],
  },
  {
    title: "Socials",
    children: [
      { value: "Facebook", name: "https://www.facebook.com/volts" },
      { value: "Twitter", name: "https://twitter.com/volts" },
      { value: "LinkedIn", name: "https://www.linkedin.com/company/volts " },
      { value: "Instagram", name: "https://www.instagram.com/volts " },
    ],
  },
];
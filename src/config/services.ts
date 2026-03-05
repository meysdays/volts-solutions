import type { Service } from "../data/types";
import { FaCloud } from "react-icons/fa6";
import { GiCyberEye, GiArtificialIntelligence } from "react-icons/gi";

export const services: Service[] = [
  {
    title: "Cloud Solutions",
    description:
      "Cloud computing has transformed the way businesses operate, offering unparalleled scalability, flexibility, and cost-efficiency. Our cloud solutions enable organizations to store, manage, and process data over the internet securely and efficiently, removing the need for on-premise hardware and infrastructure.",
    keyOfferings: [
      "Infrastructure as a Service (IaaS): Flexible virtual servers and storage to scale up or down based on demand.",
      "Platform as a Service (PaaS): Build, test, and deploy applications without worrying about underlying infrastructure.",
      "Software as a Service (SaaS): Access enterprise-grade software on-demand, improving collaboration and productivity.",
    ],
    icon: FaCloud
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "In today's digital world, businesses are increasingly vulnerable to cyber threats. Our cybersecurity solutions are designed to protect your data, networks, and applications from breaches, malware, and other security risks. We combine proactive monitoring, threat intelligence, and advanced defense strategies to keep your organization secure.",
    keyOfferings: [
      "Network Security: Firewalls, intrusion detection systems, and secure VPNs to protect critical infrastructure.",
      "Endpoint Protection: Antivirus, EDR (Endpoint Detection & Response), and patch management for devices.",
      "Cloud Security: Protect cloud-hosted resources with encryption, access controls, and continuous monitoring.",
      "Threat Intelligence & Monitoring: Real-time analysis and alerts to detect and respond to threats swiftly.",
      "Compliance & Risk Management: Ensure adherence to regulatory standards such as GDPR, HIPAA, or ISO 27001.",
    ],
    icon: GiCyberEye
  },
  {
    title: "AI Solutions",
    description:
      "AI is redefining business operations by enabling organizations to make data-driven decisions, automate repetitive tasks, and uncover new insights. Our AI solutions harness the power of machine learning, natural language processing, and predictive analytics to drive innovation and efficiency.",
    keyOfferings: [
      "Machine Learning & Predictive Analytics: Build models to forecast trends, customer behavior, and operational patterns.",
      "Natural Language Processing (NLP): Enhance customer engagement with chatbots, sentiment analysis, and automated content processing.",
      "Computer Vision: Enable automation through image and video recognition for industries like manufacturing, healthcare, and security.",
      "Intelligent Automation: Streamline workflows and reduce human error with AI-powered process automation.",
      "Custom AI Solutions: Tailor AI applications to your unique business needs for competitive advantage.",
    ],
    icon: GiArtificialIntelligence
  },
];

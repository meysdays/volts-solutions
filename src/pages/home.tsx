import Button from "../component/button";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const HomePage = () => {
  const techStack = [
    { name: "React", icon: <FaReact size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express", icon: <SiExpress size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
    { name: "Git", icon: <FaGitAlt size={40} /> },
  ];

  return (
    <div className="flex flex-col justify-center md:flex-row items-center h-screen mx-4">
      <div className="flex flex-col justify-between items-center w-5/6 lg:w-1/2 mx-auto">
        <div className="">
          <h1 className="text-4xl text-center font-bold">
            Find the outstanding IT services from us to be smarter
          </h1>
        </div>
        <div className="mt-4 font-medium">
          <p className="text-center">
            Volt is one of the best online IT solution and services to make an idea
            brilliant and makes the best online services and solution
          </p>
        </div>

        <Button text="Get Started" />

        <h2 className="mt-6 text-2xl font-bold">Our Technology Stack</h2>
        <div className="mt-6 w-11/12 text-black">
          <Marquee speed={100} pauseOnHover gradient={false}>
            {techStack.map((tech) => (
              <div className="mx-6 ">{tech.icon}</div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="my-6 font-medium tracking-wider lg:text-2xl lg:w-2/6">
        <p>
          Project Volt empowers organizations with next-generation cloud,
          cybersecurity, and AI solutions. We design high-performance digital
          infrastructures that enhance security, optimize operations, and unlock
          innovation.
        </p>
        <br />
        <p>
          Whether you're modernizing legacy systems or building from the ground
          up, we provide the technical foundation to power your growth.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

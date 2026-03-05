import { services } from "../config/services";
import ServiceCard from "../component/service-card";

const ServicePage = () => {
  return (
    <div className="mx-4">
      <h1 className="text-center text-4xl font-bold">Our Services</h1>
      <h3 className="mt-6 flex mx-auto lg:w-5/6 text-center">
        At the forefront of digital innovation, our company delivers
        cutting-edge solutions designed to help businesses scale efficiently,
        secure their operations, and unlock the power of artificial
        intelligence. From leveraging the cloud to streamline infrastructure, to
        implementing robust cybersecurity measures that protect critical assets,
        and deploying AI-driven tools that drive smarter decision-making, our
        services empower organizations to stay ahead in a rapidly evolving
        technological landscape.
      </h3>

      {/* <div className="mt-6">
        <div>
          <h2>Cloud Solutions</h2>
          <p>
            Cloud computing has transformed the way businesses operate, offering
            unparalleled scalability, flexibility, and cost-efficiency. Our
            cloud solutions enable organizations to store, manage, and process
            data over the internet securely and efficiently, removing the need
            for on-premise hardware and infrastructure.
          </p>

          <ul className="mx-4 list-disc mt-2">
            <li>
              Infrastructure as a Service (IaaS): Flexible virtual servers and
              storage to scale up or down based on demand.
            </li>
            <li>
              Platform as a Service (PaaS): Build, test, and deploy applications
              without worrying about underlying infrastructure.
            </li>
            <li>
              Software as a Service (SaaS): Access enterprise-grade software
              on-demand, improving collaboration and productivity.
            </li>
          </ul>
        </div>
      </div> */}

      
        <div className="">
          <div>
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      
    </div>
  );
};

export default ServicePage;

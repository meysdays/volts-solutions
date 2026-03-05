import type { Service } from "../data/types";

interface ServiceProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceProps) => {
  const Icon = service.icon;
  return (
    <div className="flex flex-col lg:flex-row-reverse ">
      <div className="flex justify-center items-center mt-6 lg:w-2/6">
        <Icon size={140} className=" text-gray-400" />
      </div>

      <div className="mt-6 border-t-4 border-[#FFFB03] p-6 rounded-xl  text-black shadow-lg hover:shadow-2xl transition transform ">
        <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
        <p className="text-black-300 mb-3">{service.description}</p>
        <ul className="list-disc list-inside space-y-1">
          {service.keyOfferings.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;

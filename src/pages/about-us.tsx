import { milestones, team } from "../config/aboutus";

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto p-8 font-sans text-slate-900">
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-brand-yellow pl-4">
          Our Growth
        </h2>
        <div className="space-y-8">
          {milestones.map((item, idx) => (
            <div key={idx} className="flex gap-6 ">
              <span className="text-brand-yellow font-bold text-xl">
                {item.year}
              </span>
              <div className="pt-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-brand-yellow pl-4">
          Meet the Visionaries
        </h2>
        <div className="flex flex-col lg:flex-row items-center  gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden  rounded-lg bg-yellow-400 ">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="object-cover aspect-square w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-yellow-400/40 mix-blend-multiply transition-opacity group-hover:opacity-20" />
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-brand-yellow font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

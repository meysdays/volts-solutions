import { projects } from "../config/case-studies";
import { FaArrowRight } from "react-icons/fa";

const CaseStudies = () => {
  return (
    <section className="py-20 px-8">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
        <p className="text-slate-500 mb-12 max-w-2xl">
          We don't just build software; we build solutions that move the needle.
          Here is a look at some of our favorite collaborations.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-4 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <a
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:text-yellow-700 transition-colors group"
              >
                Read More
                <FaArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

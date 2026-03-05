import { useState } from "react";
import type { FormData } from "../data/types";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert("Message sent to the Lumina team!");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const inputClasses = `
    w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 
    text-slate-900 transition-all duration-200
    outline-none 
    focus:ring-4 focus:ring-[#FFFB03] focus:ring-offset-2 focus:border-slate-400
  `;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
          <p className="text-slate-500">
            Ready to start your next project? Drop us a line.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className={inputClasses}
              placeholder="Jane Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className={inputClasses}
              placeholder="jane@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
              How can we help?
            </label>
            <textarea
              required
              rows={4}
              className={inputClasses}
              placeholder="Tell us about your vision..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-black transition-colors active:scale-[0.98] cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { Star } from "lucide-react";

 const TestimonialsStats = () => {
  const stats = [
    { label: "Companies Trust Us", value: "100+" },
    { label: "Assets Managed Daily", value: "5,000+" },
    { label: "User Satisfaction", value: "98%" },
    { label: "Efficiency Boost", value: "30%" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Manager, ProTech Solutions",
      text: "AssetVerse streamlined our internal asset tracking and improved team efficiency.",
    },
    {
      name: "Michael Smith",
      role: "IT Director, NovaCorp Industries",
      text: "Centralized system, reduced losses, and better accountability for all assets.",
    },
    {
      name: "Ayesha Rahman",
      role: "Operations Lead, SkyBridge Group",
      text: "The dashboard and insights improved our overall asset monitoring structure.",
    },
    {
      name: "Daniel Cooper",
      role: "Admin Supervisor, GlobalEdge Technologies",
      text: "Clean UI, easy onboarding, and very professional for corporate use.",
    },
  ];

  return (
    <div className="w-full py-20 ">
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-5 md:px-0 grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center ">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[#18212F] shadow-md rounded-2xl p-6 border border-[#9435E7]"
          >
            <p className="text-3xl font-bold text-[#9435E7]">{stat.value}</p>
            <p className="text-gray-500 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-5 md:px-0">
        <h2 className="text-3xl font-semibold text-[#9435E7] text-center mb-10">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="rounded-2xl shadow-md hover:shadow-lg transition p-4 bg-[#18212F] border border-[#9435E7] md:h-60">
                <Star className="w-8 h-8 text-yellow-500 mb-4" />
                <p className="text-gray-500 mb-4">“{item.text}”</p>
                <p className="font-semibold text-gray-200">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TestimonialsStats
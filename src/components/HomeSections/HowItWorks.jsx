import { motion } from "framer-motion";
import { ClipboardList, Users, CheckCircle } from "lucide-react";

 const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-10 h-10 text-blue-600" />,
      title: "Register Your Company",
      description: "Create an account and set up your organization details within minutes.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Add Employees & Assets",
      description: "Easily assign assets, manage teams, and track everything in one dashboard.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
      title: "Manage & Monitor",
      description: "Monitor asset usage, approvals, and requests with real-time updates.",
    },
  ];

  return (
    <div className="py-20 ">
      <h2 className="text-3xl text-[#9435E7] font-semibold text-center mb-12">How It Works</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6  md:px-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[#18212F] p-8 rounded-2xl shadow-md text-center border border-[#9435E7]"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl text-gray-200 font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default HowItWorks
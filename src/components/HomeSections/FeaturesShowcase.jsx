import { motion } from "framer-motion";
import {
  Laptop,
  Bell,
  ClipboardList,
  Users2,
  FileCheck2,
  BarChart,
} from "lucide-react";

const features = [
  {
    title: "Smart Asset Tracking",
    description:
      "Monitor asset usage, assignments, and conditions in real-time.",
    icon: Laptop,
  },
  {
    title: "Automated Notifications",
    description: "Get alerts for approvals, due returns, and asset updates.",
    icon: Bell,
  },
  {
    title: "Request Management",
    description: "Employees can easily request assets with a smooth workflow.",
    icon: ClipboardList,
  },
  {
    title: "Team Collaboration",
    description:
      "HR and teams stay aligned with built-in asset communication tools.",
    icon: Users2,
  },
  {
    title: "Compliance & Reporting",
    description:
      "Stay audit-ready with predefined compliance and export options.",
    icon: FileCheck2,
  },
  {
    title: "Advanced Analytics",
    description: "Get insights and trends for better lifecycle decisions.",
    icon: BarChart,
  },
];

const FeaturesShowcase = () => {
  return (
    <section className="py-20 " id="features">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#9435E7]">
            Powerful Features to Manage Everything
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            AssetVerse brings all the tools you need to manage company assets,
            teams, and workflows — efficiently and securely.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[] shadow-md border border-[#9435E7] rounded-2xl p-7 hover:shadow-lg transition duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#9435E720] text-[#9435E7] mb-5">
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;

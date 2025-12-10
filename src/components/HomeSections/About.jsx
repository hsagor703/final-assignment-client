import { ShieldCheck, Layers, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 ">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#9435E7]">
            Why Choose AssetVerse?
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            A centralized, secure, and efficient solution designed for modern
            organizations to manage their corporate assets effortlessly.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#18212F] border-[#9435E7] shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 border "
          >
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-xl mx-auto">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-200 mt-5 text-center">
              Secure Asset Tracking
            </h3>
            <p className="mt-3 text-gray-500 text-center">
              Monitor and protect company assets with robust security and
              accurate real-time visibility.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#18212F] border-[#9435E7] shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 border"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-xl mx-auto">
              <Layers size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-200 mt-5 text-center">
              Streamlined Allocation
            </h3>
            <p className="mt-3 text-gray-500 text-center">
              Easily assign and manage hardware or resources between employees
              and departments.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-[#18212F] border-[#9435E7] shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 border "
          >
            <div className="flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-xl mx-auto">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-200 mt-5 text-center">
              Team Collaboration
            </h3>
            <p className="mt-3 text-gray-500 text-center">
              HR managers and employees can seamlessly communicate and manage
              requests within one platform.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-[#18212F] border-[#9435E7] shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 border "
          >
            <div className="flex items-center justify-center w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl mx-auto">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-200 mt-5 text-center">
              Insightful Reporting
            </h3>
            <p className="mt-3 text-gray-500 text-center">
              Get clear analytics and reports to make strategic decisions about
              asset lifecycle and usage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

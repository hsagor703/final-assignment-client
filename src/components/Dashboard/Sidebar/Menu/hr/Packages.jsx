import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
const Packages = () => {
  const axiosInstance = useAxiosSecure();
  const { data: packagesInfo = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosInstance.get("/packages")
      return res.data
    },
  });

  const handlePackages = pack => {
    console.log(pack._id, pack.name);
  }
  return (
    <section className="py-20 " id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#9435E7]">
            Choose Your Package
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Flexible and affordable plans designed to scale with your company’s
            growth.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packagesInfo.map((pack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-[#9435E7] shadow-md rounded-2xl p-7 hover:shadow-xl transition duration-300 bg-[#18212F]"
            >
              <h3 className="text-2xl font-bold text-gray-300  text-center">
                {pack.name}
              </h3>

              <p className="text-center text-gray-400 mt-2">
                Up to{" "}
                <span className="font-semibold text-gray-500">
                  {pack.employeeLimit}
                </span>{" "}
                employees
              </p>

              <div className="text-center mt-6">
                <span className="text-4xl font-extrabold text-[#9435E7]">
                  ${pack.price}
                </span>
                <span className="text-gray-400"> /month</span>
              </div>

              <ul className="mt-6 space-y-3">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-500">
                    <span className="text-[#9435E7] font-bold">✓</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-center">
                <button onClick={() => handlePackages(pack)} className="w-full py-3 bg-[#9435E7] text-white rounded-xl hover:bg-[#9435E760] transition font-semibold">
                  Select Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

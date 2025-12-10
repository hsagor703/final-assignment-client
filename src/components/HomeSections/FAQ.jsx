import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      q: "What is AssetVerse?",
      a: "AssetVerse is a corporate asset management system that helps manage employees, assets, and requests.",
    },
    {
      q: "Can multiple employees be added?",
      a: "Yes, depending on your plan you can add 5, 10, or 20 employees.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes, we offer a 7-day free trial for new companies.",
    },
    {
      q: "Can HR Managers manage all assets?",
      a: "Yes, HR Managers have full control of assets, requests, and employees.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <div className="py-20">
      <h2 className="text-3xl text-[#9435E7] font-semibold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.4 }}
            className="bg-[#18212F] border border-[#9435E7] rounded-xl p-5 shadow-sm cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-200">{item.q}</h3>
              <ChevronDown
                className={`w-5 h-5 transition-transform text-[#9435E7] ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === i && <p className="mt-3 text-gray-500">{item.a}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;

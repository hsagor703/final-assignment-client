import { motion } from "framer-motion";
import Container from "../Shared/Container";
const ContactCTA = () => {
  return (
    <Container>
      <div className="py-20 bg-[#18212F] border border-[#9435E7] rounded-xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-semibold mb-4 text-gray-200"
        >
          Ready to Simplify Your Asset Management?
        </motion.h2>

        <p className="text-lg mb-8 text-gray-500">
          Contact our team and get started with a smooth onboarding experience.
        </p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="px-8 py-3 bg-[#9435E7] text-gray-200 font-semibold rounded-xl shadow-md hover:bg-[#9435E730] transition inline-block"
        >
          Contact Us
        </motion.a>
      </div>
    </Container>
  );
};
export default ContactCTA;

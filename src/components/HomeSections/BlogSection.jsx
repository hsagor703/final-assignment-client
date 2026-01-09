import Container from "../Shared/Container";
import { motion } from "framer-motion";

export function BlogsSection() {
  const blogs = [
    {
      title: "Why Asset Management Is Critical for Modern Companies",
      desc: "Learn how effective asset tracking improves productivity, reduces costs, and increases accountability.",
      date: "Jan 10, 2026",
    },
    {
      title: "Best Practices for Tracking Corporate Assets",
      desc: "A practical guide for HR teams to manage laptops, accessories, and office equipment efficiently.",
      date: "Dec 22, 2025",
    },
    {
      title: "How AssetVerse Simplifies HR Operations",
      desc: "Discover how automation and centralized data can transform asset management workflows.",
      date: "Dec 05, 2025",
    },
    {
      title: "How benifite for use AssetVerse",
      desc: "All item are visible dont lose any porduct and centralized data can transform asset management workflows.",
      date: "Dec 05, 2025",
    },
  ];

  return (
    <Container>
      <div className="">
        <section className="py-20">
          <div className="">
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#9435E7] mb-3">
                Latest Blogs
              </h2>
              <p className="text-gray-500 ">
                Insights, best practices, and updates on corporate asset
                management and HR operations.
              </p>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogs.map((blog, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="border bg-[#18212F] border-[#9435E7] rounded-2xl p-6 shadow hover:shadow-md transition"
                >
                  <span className="text-sm text-gray-400">{blog.date}</span>
                  <h3 className="text-lg font-semibold text-gray-400 mt-2 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-5">{blog.desc}</p>
                  <button className="text-primary font-medium hover:underline">
                    Read More →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

import Container from "../../components/Shared/Container";

export default function About() {
  return (
    <Container>
      <div className="lg:px-2">
        <div className="py-20 px-3 bg-[#101828] border border-[#9435E7] rounded-xl text-center">
          {/* Header */}
          <div className="">
            <h1 className="text-4xl font-bold text-gray-300 mb-4 ">
              About <span className="text-[#9435E7]">AssetVerse</span>
            </h1>
            <p className="text-lg text-gray-400 my-4">
              A modern corporate asset management system designed to streamline 
              asset tracking,<br /> improve accountability, and simplify HR
              operations.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6 text-gray-500 leading-relaxed text-justify">
              <p>
                <strong className="text-[#9435E7]">AssetVerse</strong> is a comprehensive Corporate Asset
                Management System built to help organizations efficiently manage
                physical assets such as laptops, accessories, furniture, and
                other office equipment.
              </p>

              <p>
                The platform provides a centralized system for tracking asset
                ownership, assignments, and lifecycle status across employees
                and departments, ensuring transparency and operational
                efficiency.
              </p>

              <p>
                Designed with HR teams and administrators in mind, AssetVerse
                automates asset allocation, employee assignments, and return
                workflows—reducing manual errors and minimizing asset loss.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Centralized Asset Tracking",
                  desc: "Manage all company assets from a single, secure dashboard.",
                },
                {
                  title: "HR-Friendly Workflows",
                  desc: "Simplify asset allocation, returns, and approvals.",
                },
                {
                  title: "Role-Based Access",
                  desc: "Secure access control for HR and employees.",
                },
                {
                  title: "Scalable & Reliable",
                  desc: "Designed to grow with organizations of any size.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br  from-[#0f0c29] via-[#1a1440] to-[#0f0c29] border border-[#9435E7] rounded-2xl p-6 shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-gray-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

         

         
        </div>
      </div>
    </Container>
  );
}

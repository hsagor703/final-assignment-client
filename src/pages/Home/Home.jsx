// import Plants from '../../components/Home/Plants'
import { useQuery } from "@tanstack/react-query";
import AboutSection from "../../components/HomeSections/About";
import HeroBanner from "../../components/HomeSections/Banner";
import ContactCTA from "../../components/HomeSections/ContactCTA";
import FAQ from "../../components/HomeSections/FAQ";
import FeaturesShowcase from "../../components/HomeSections/FeaturesShowcase";
import HowItWorks from "../../components/HomeSections/HowItWorks";
import Packages from "../../components/HomeSections/Packages";
import TestimonialsStats from "../../components/HomeSections/Testimonials";
import useAuth from "../../hooks/useAuth";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import { BlogsSection } from "../../components/HomeSections/BlogSection";
import { NewsletterSection } from "../../components/HomeSections/NewsletterSection";

const Home = () => {
  const { user } = useAuth();
  const axiosNormal = useAxiosNormal();

  const { data: HrManager = {} } = useQuery({
    queryKey: ["HrManager", user?.email],
    queryFn: async () => {
      const res = await axiosNormal.get(`/hrManager?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="">
      <HeroBanner />
      <AboutSection />
      {HrManager.role === "hr" && <Packages />}
      <FeaturesShowcase />
      <TestimonialsStats />
      <BlogsSection/>
      {/* <NewsletterSection/> */}
      <HowItWorks />
      <FAQ />
      <ContactCTA />
    </div>
  );
};

export default Home;

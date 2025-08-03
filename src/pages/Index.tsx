import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import FeaturedCategories from "@/components/FeaturedCategories";
import TopDeals from "@/components/TopDeals";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-roboto">
      <Navbar />
      <HeroBanner />
      <FeaturedCategories />
      <TopDeals />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;

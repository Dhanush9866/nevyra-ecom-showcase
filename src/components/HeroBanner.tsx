import { Button } from "@/components/ui/button";
import heroBannerImage from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-hover overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-roboto">
              Shop Smart,
              <br />
              <span className="text-warning">Live Better</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Discover millions of products at unbeatable prices. From fashion to electronics, groceries to home essentials - everything you need is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-warning hover:bg-warning/90 text-warning-foreground font-medium">
                Start Shopping
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Explore Deals
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroBannerImage} 
              alt="Shop with Nevyra" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-y-48 translate-x-48 hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warning/10 rounded-full translate-y-32 -translate-x-32 hidden lg:block"></div>
    </div>
  );
};

export default HeroBanner;
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-roboto">Nevyra</h3>
            <p className="text-primary-foreground/90 mb-4">
              Your trusted online shopping destination for quality products at the best prices.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-hover p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-hover p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-hover p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-hover p-2">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-roboto">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Press</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-roboto">Customer Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-roboto">Stay Updated</h4>
            <p className="text-primary-foreground/90 mb-4">Subscribe to get special offers and updates</p>
            <div className="flex space-x-2 mb-4">
              <Input 
                placeholder="Enter your email" 
                className="bg-background text-foreground border-none"
              />
              <Button className="bg-warning hover:bg-warning/90 text-warning-foreground">
                Subscribe
              </Button>
            </div>
            <div className="space-y-2 text-sm text-primary-foreground/90">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@nevyra.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/90 text-sm">
              © 2024 Nevyra. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Search, User, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const categories = [
  {
    name: "Medical & Pharmacy",
    subcategories: ["Personal Care", "Skin Care", "Hair Care", "Makeup", "Foot, Hand & Nail Care", "Salon Equipment", "Shave & Hair Removal", "Fragrance"]
  },
  {
    name: "Groceries",
    subcategories: ["General food items", "Daily essentials"]
  },
  {
    name: "Fashion & Beauty",
    subcategories: ["Menswear", "Women's Wear", "Kids Wear", "Men's Shoes", "Women's Shoes", "Kids Shoes", "Watches", "Luggage"]
  },
  {
    name: "Devices",
    subcategories: ["Cell Phones & Accessories", "Laptops", "Televisions", "Refrigerators", "Smart Watches"]
  },
  {
    name: "Electrical",
    subcategories: ["Solar Panels", "Solar Fencing Kit", "Batteries", "Transformers", "Wiring Cables", "LED Bulbs", "Tube Lights", "Ceiling Fan"]
  },
  {
    name: "Automotive",
    subcategories: ["Bike Accessories", "Car Accessories", "Engine Oil", "Brake Fluid", "Air Filter"]
  },
  {
    name: "Sports",
    subcategories: ["Cricket Bats", "Cricket Balls", "Stumps", "Cricket Kit", "Volleyball", "Volleyball Net"]
  },
  {
    name: "Home Interior",
    subcategories: ["Gypsum False Ceiling", "Cove Lights", "Main Door", "Wall Paint", "Wallpaper", "Curtains", "Wall Tiles"]
  }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-primary font-roboto">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-primary-foreground hover:bg-primary-hover"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-primary-foreground">Nevyra</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full pl-4 pr-12 py-2 bg-background text-foreground border-none rounded-sm"
              />
              <Button
                size="sm"
                className="absolute right-0 top-0 h-full px-4 bg-warning hover:bg-warning/90 text-warning-foreground rounded-l-none rounded-r-sm"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-hover hidden md:flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span className="text-sm">Login</span>
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-hover flex items-center space-x-1 relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm hidden md:inline">Cart</span>
              <span className="absolute -top-1 -right-1 bg-warning text-warning-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full pl-4 pr-12 py-2 bg-background text-foreground border-none rounded-sm"
            />
            <Button
              size="sm"
              className="absolute right-0 top-0 h-full px-4 bg-warning hover:bg-warning/90 text-warning-foreground rounded-l-none rounded-r-sm"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center space-x-8 py-2">
            {categories.map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground hover:bg-muted flex items-center space-x-1">
                    <span className="text-sm">{category.name}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-popover border border-border">
                  {category.subcategories.map((subcategory, index) => (
                    <DropdownMenuItem key={index} className="text-popover-foreground hover:bg-accent">
                      {subcategory}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Mobile Category Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {categories.map((category) => (
                <DropdownMenu key={category.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between text-foreground hover:bg-muted">
                      <span>{category.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full bg-popover border border-border">
                    {category.subcategories.map((subcategory, index) => (
                      <DropdownMenuItem key={index} className="text-popover-foreground hover:bg-accent">
                        {subcategory}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import phoneProduct from "@/assets/phone-product.jpg";
import shoesProduct from "@/assets/shoes-product.jpg";
import laptopProduct from "@/assets/laptop-product.jpg";
import dressProduct from "@/assets/dress-product.jpg";

const products = [
  {
    id: 1,
    name: "Latest Smartphone",
    image: phoneProduct,
    originalPrice: 25999,
    salePrice: 19999,
    discount: 23,
    rating: 4.5,
    reviews: 1250,
  },
  {
    id: 2,
    name: "Premium Running Shoes",
    image: shoesProduct,
    originalPrice: 4999,
    salePrice: 2999,
    discount: 40,
    rating: 4.3,
    reviews: 890,
  },
  {
    id: 3,
    name: "Gaming Laptop",
    image: laptopProduct,
    originalPrice: 89999,
    salePrice: 69999,
    discount: 22,
    rating: 4.7,
    reviews: 456,
  },
  {
    id: 4,
    name: "Designer Dress",
    image: dressProduct,
    originalPrice: 2999,
    salePrice: 1499,
    discount: 50,
    rating: 4.2,
    reviews: 324,
  },
  {
    id: 5,
    name: "Latest Smartphone Pro",
    image: phoneProduct,
    originalPrice: 35999,
    salePrice: 29999,
    discount: 17,
    rating: 4.6,
    reviews: 2100,
  },
  {
    id: 6,
    name: "Casual Sneakers",
    image: shoesProduct,
    originalPrice: 3499,
    salePrice: 2199,
    discount: 37,
    rating: 4.4,
    reviews: 567,
  },
];

const TopDeals = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-roboto">
              Top Deals of the Day
            </h2>
            <p className="text-muted-foreground">
              Limited time offers on bestselling products
            </p>
          </div>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Deals
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300 bg-card border border-border"
            >
              <CardContent className="p-4">
                <Link to={`/product/${product.id}`}>
                  <div className="relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-discount text-white">
                      {product.discount}% OFF
                    </Badge>
                  </div>

                  <h3 className="font-semibold text-card-foreground mb-2 font-roboto group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-price">
                      ₹{product.salePrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </Link>

                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeals;

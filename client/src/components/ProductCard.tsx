import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: number;
  artisan: string;
  image: string;
  category: string;
  onClick?: () => void;
}

export default function ProductCard({ name, price, artisan, image, category, onClick }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      data-testid={`card-product-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <Card className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 border-2">
        <div className="relative h-72 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onClick={onClick}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
              console.log(`Product ${liked ? 'unliked' : 'liked'}`);
            }}
            className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover-elevate active-elevate-2"
            data-testid={`button-like-${name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Heart className={`h-5 w-5 ${liked ? 'fill-[#E0318E] text-[#E0318E]' : 'text-gray-600'}`} />
          </button>
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-[#67C7BD] to-[#6C2A84] text-white border-0">
              {category}
            </Badge>
          </div>
        </div>
        
        <div className="p-5" onClick={onClick}>
          <h3 className="font-semibold text-lg text-foreground mb-1 line-clamp-2">
            {name}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3">
            by {artisan}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl font-bold text-primary">
              ₹{price.toLocaleString()}
            </span>
            <Badge variant="outline" className="text-xs">
              Made with Love
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

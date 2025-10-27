import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface ArtisanCardProps {
  name: string;
  region: string;
  craft: string;
  image: string;
  specialty: string;
  onClick?: () => void;
}

export default function ArtisanCard({ name, region, craft, image, specialty, onClick }: ArtisanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8, scale: 1.03 }}
      data-testid={`card-artisan-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <Card 
        className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 border-2" 
        onClick={onClick}
      >
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 right-4 z-20">
            <Badge className="bg-white/90 text-primary border-0">
              {craft}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{region}</span>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {specialty}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

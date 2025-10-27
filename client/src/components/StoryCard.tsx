import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

interface StoryCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  region: string;
  onClick?: () => void;
}

export default function StoryCard({ title, subtitle, description, image, region, onClick }: StoryCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="mb-20"
      data-testid={`card-story-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <Card className="overflow-hidden border-2">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-96 md:h-auto overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                {region}
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              {title}
            </h2>
            
            <p className="font-serif text-xl italic text-muted-foreground mb-6">
              {subtitle}
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>
            
            <div>
              <Button 
                onClick={onClick}
                className="bg-gradient-to-r from-[#6C2A84] to-[#E0318E] text-white border-0"
                data-testid={`button-read-story-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

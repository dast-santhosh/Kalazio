import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  duration: string;
  students: number;
  image: string;
  category: string;
  onClick?: () => void;
}

export default function CourseCard({ title, instructor, duration, students, image, category, onClick }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      data-testid={`card-course-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <Card 
        className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 border-2"
        onClick={onClick}
      >
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 left-4 z-20">
            <Badge className="bg-gradient-to-r from-[#E2791F] to-[#EEC056] text-white border-0">
              {category}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-foreground mb-2 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4">
            with {instructor}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{students} learners</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const categories = [
  "All Crafts",
  "Handloom Textiles", 
  "Pottery",
  "Painting",
  "Jewelry",
  "Woodcraft",
  "Metalwork",
  "Folk Art"
];

export default function FilterBar() {
  const [selectedCategory, setSelectedCategory] = useState("All Crafts");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b py-6"
      data-testid="section-filter-bar"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search crafts, artisans, regions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                console.log('Search query:', e.target.value);
              }}
              data-testid="input-search"
            />
          </div>
          
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => console.log('Filters clicked')}
            data-testid="button-filters"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Advanced Filters
          </Button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer whitespace-nowrap px-4 py-2 ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-[#67C7BD] to-[#6C2A84] text-white border-0" 
                  : "hover-elevate"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                console.log('Category selected:', category);
              }}
              data-testid={`badge-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

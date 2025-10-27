import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";
import { useState } from "react";

const regions = [
  { id: 1, name: "Tamil Nadu", craft: "Handloom Weaving", x: 45, y: 75, color: "#67C7BD" },
  { id: 2, name: "Odisha", craft: "Pattachitra", x: 65, y: 55, color: "#E0318E" },
  { id: 3, name: "Kerala", craft: "Kalaripayattu", x: 40, y: 85, color: "#E2791F" },
  { id: 4, name: "Rajasthan", craft: "Blue Pottery", x: 25, y: 35, color: "#EEC056" },
  { id: 5, name: "Gujarat", craft: "Bandhani Textiles", x: 20, y: 45, color: "#6C2A84" },
];

export default function InteractiveMap() {
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);
  const [showMap, setShowMap] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShowMap(true)}
      onMouseLeave={() => {
        setShowMap(false);
        setHoveredRegion(null);
      }}
      data-testid="section-interactive-map"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#67C7BD] via-[#6C2A84] to-[#E0318E] text-white border-0 shadow-lg"
          data-testid="button-artforms-map"
        >
          <Map className="mr-2 h-5 w-5" />
          Artforms Across Nation
        </Button>
      </motion.div>

      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <Card className="p-8 border-2 shadow-2xl w-[500px] max-w-[90vw]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-4"
              >
                <h3 className="font-serif text-2xl font-bold text-center bg-gradient-to-r from-[#6C2A84] to-[#E0318E] bg-clip-text text-transparent">
                  India's Cultural Heritage Map
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Hover over regions to discover traditional artforms
                </p>
              </motion.div>

              <div className="relative w-full aspect-[4/3] bg-muted/30 rounded-lg overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <path
                    d="M 15,20 L 25,15 L 40,18 L 55,20 L 70,25 L 80,35 L 85,50 L 80,65 L 70,75 L 55,85 L 40,88 L 25,85 L 15,75 L 12,60 L 15,40 Z"
                    fill="url(#map-gradient)"
                    stroke="hsl(var(--border))"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                  
                  <defs>
                    <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#67C7BD" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#6C2A84" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#E0318E" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {regions.map((region) => (
                    <g key={region.id}>
                      <motion.circle
                        cx={region.x}
                        cy={region.y}
                        r={hoveredRegion === region.id ? "4" : "3"}
                        fill={region.color}
                        filter="url(#glow)"
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredRegion(region.id)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => console.log(`Region clicked: ${region.name}`)}
                        whileHover={{ scale: 1.5 }}
                        data-testid={`map-region-${region.name.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                      
                      {hoveredRegion === region.id && (
                        <motion.g
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <rect
                            x={region.x - 15}
                            y={region.y - 12}
                            width="30"
                            height="8"
                            rx="1"
                            fill="white"
                            stroke={region.color}
                            strokeWidth="0.3"
                          />
                          <text
                            x={region.x}
                            y={region.y - 7}
                            textAnchor="middle"
                            className="text-[3px] font-semibold"
                            fill="hsl(var(--foreground))"
                          >
                            {region.name}
                          </text>
                        </motion.g>
                      )}
                    </g>
                  ))}
                </svg>

                {hoveredRegion && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                  >
                    <Badge className="bg-gradient-to-r from-[#6C2A84] to-[#E0318E] text-white border-0 px-4 py-2">
                      {regions.find(r => r.id === hoveredRegion)?.craft}
                    </Badge>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

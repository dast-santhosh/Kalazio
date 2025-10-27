import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Vibrant_Indian_marketplace_bazaar_376f935c.png";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 5]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" data-testid="section-hero">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <motion.img 
          src={heroImage} 
          alt="Vibrant Indian marketplace" 
          className="w-full h-full object-cover"
          style={{ rotate }}
        />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="mb-6"
        >
          <motion.div 
            className="inline-block"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg className="w-24 h-24 mb-4 mx-auto" viewBox="0 0 100 100">
              <motion.circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke="url(#gradient1)" 
                strokeWidth="2" 
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.circle 
                cx="50" cy="50" r="35" 
                fill="none" 
                stroke="url(#gradient2)" 
                strokeWidth="1.5" 
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.7 }}
              />
              <motion.circle 
                cx="50" cy="50" r="25" 
                fill="none" 
                stroke="url(#gradient3)" 
                strokeWidth="1" 
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.9 }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#67C7BD" />
                  <stop offset="100%" stopColor="#6C2A84" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E0318E" />
                  <stop offset="100%" stopColor="#E2791F" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EEC056" />
                  <stop offset="100%" stopColor="#67C7BD" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          className="font-serif text-5xl md:text-7xl font-bold text-white mb-6"
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 20px rgba(103, 199, 189, 0.5)",
                "0 0 40px rgba(224, 49, 142, 0.5)",
                "0 0 20px rgba(238, 192, 86, 0.5)",
                "0 0 20px rgba(103, 199, 189, 0.5)",
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Kalazio
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-3xl font-serif italic text-white/95 mb-4"
        >
          <motion.span
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Desh Ka Market. Dil Se Crafted.
          </motion.span>
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl leading-relaxed"
        >
          A living celebration of India's artistic soul—where artisans, cultural creators, 
          and learners unite to preserve heritage, share stories, and craft the future.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#E0318E] to-[#6C2A84] text-white border-0 hover:opacity-90 px-8"
            data-testid="button-explore-marketplace"
          >
            Explore Marketplace <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            data-testid="button-discover-stories"
          >
            Discover Stories
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

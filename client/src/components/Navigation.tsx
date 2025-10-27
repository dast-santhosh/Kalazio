import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ShoppingBag, BookOpen, Sparkles, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/Gemini_Generated_Image_aug81gaug81gaug8-removebg-preview_1761493352758.png";

export default function Navigation() {
  const [location] = useLocation();
  const [soundEnabled, setSoundEnabled] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Sparkles },
    { path: "/marketplace", label: "Marketplace", icon: ShoppingBag },
    { path: "/learn", label: "Learn", icon: BookOpen },
    { path: "/stories", label: "Stories", icon: Sparkles },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b"
      data-testid="nav-main"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer" data-testid="link-logo">
              <img 
                src={logoImage} 
                alt="Kalazio Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-[#6C2A84] to-[#E0318E] bg-clip-text text-transparent">
                Kalazio
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link key={path} href={path}>
                <Button
                  variant={location === path ? "default" : "ghost"}
                  className={location === path ? "bg-gradient-to-r from-[#6C2A84] to-[#E0318E] text-white" : ""}
                  data-testid={`button-nav-${label.toLowerCase()}`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                console.log(`Sound ${soundEnabled ? 'disabled' : 'enabled'}`);
              }}
              data-testid="button-sound-toggle"
            >
              {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

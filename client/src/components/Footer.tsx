import { Link } from "wouter";
import { Heart } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Marketplace: [
      { label: "All Crafts", href: "/marketplace" },
      { label: "Artisans", href: "/marketplace/artisans" },
      { label: "New Arrivals", href: "/marketplace/new" },
      { label: "Fair Trade", href: "/marketplace/fair-trade" },
    ],
    Learn: [
      { label: "All Courses", href: "/learn" },
      { label: "Classical Arts", href: "/learn/classical" },
      { label: "Crafts", href: "/learn/crafts" },
      { label: "Instructors", href: "/learn/instructors" },
    ],
    Stories: [
      { label: "All Stories", href: "/stories" },
      { label: "Artisan Journeys", href: "/stories/artisans" },
      { label: "Cultural Heritage", href: "/stories/heritage" },
      { label: "Gallery", href: "/stories/gallery" },
    ],
    Contact: [
      { label: "Santhosh P - CEO, CTO, COO, Founder and Owner", href: "/contact" },
      { label: "Aysu A - CFO, Finance & Economics", href: "/contact" },
      { label: "Subramanian V - Mentor", href: "/contact" },
      { label: "Raghavan Selvaraj - COO", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t" data-testid="footer-main">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors block" 
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-border mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-[#E0318E] text-[#E0318E]" />
            <span>for India's artisans</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center">
            <p className="mb-1">© 2024 Kalazio. Desh Ka Market. Dil Se Crafted.</p>
            <p className="text-xs">by Santhosh P & Team, Subramanian V</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground italic">
            The Man Behind the Whole Idea: Subramanian V
          </p>
        </div>
      </div>
    </footer>
  );
}

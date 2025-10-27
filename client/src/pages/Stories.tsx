import Navigation from "@/components/Navigation";
import StoryCard from "@/components/StoryCard";
import InteractiveMap from "@/components/InteractiveMap";
import SectionHeader from "@/components/SectionHeader";
import ChettinadStory from "@/components/ChettinadStory";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import paintingImage from "@assets/generated_images/Pattachitra_traditional_folk_painting_1b17fc74.png";
import martialImage from "@assets/generated_images/Kalaripayattu_martial_arts_practice_a47b8b76.png";
import weavingImage from "@assets/generated_images/Artisan_weaving_traditional_handloom_4a3c8953.png";

export default function Stories() {
  // Mock data - todo: remove mock functionality
  const stories = [
    {
      title: "Pattachitra of Odisha",
      subtitle: "Painting the Divine on Cloth",
      description: "Journey through the ancient art of Pattachitra, where master painters create mythological tales through vibrant colors and intricate patterns. Each stroke carries centuries of tradition, telling stories of gods, kings, and the eternal dance of life.",
      image: paintingImage,
      region: "Odisha, India"
    },
    {
      title: "Kalaripayattu of Kerala",
      subtitle: "The Dance of the Warrior",
      description: "Experience the meditative discipline of India's oldest martial art. Kalaripayattu blends combat techniques with spiritual practice, creating warriors who move with the grace of dancers and the precision of masters.",
      image: martialImage,
      region: "Kerala, India"
    },
    {
      title: "Chettinad Weavers",
      subtitle: "The Hands Behind the Fading Handloom Legacy",
      description: "Meet the master weavers of Tamil Nadu who preserve 200-year-old Chettinad cotton techniques. Their struggle, skill, and pride weave together threads of heritage into patterns that tell stories spanning generations.",
      image: weavingImage,
      region: "Tamil Nadu, India"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <div className="bg-gradient-to-b from-[#E0318E]/10 to-background py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
                Stories Behind the Strokes
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Where art and humanity meet through narrative. Each story breathes with the soul of India—
                human, emotional, and reverent.
              </p>
            </motion.div>
          </div>
        </div>

        <ChettinadStory />

        <section className="py-20 bg-background" data-testid="section-featured-stories">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <SectionHeader
                eyebrow="Cultural Narratives"
                title="Journeys of Heritage"
                description="Immerse yourself in scroll-based cinematic storytelling that combines visuals, history, and the voices of artisans."
              />
            </div>

            <div className="max-w-5xl mx-auto">
              {stories.map((story) => (
                <StoryCard
                  key={story.title}
                  {...story}
                  onClick={() => console.log(`Story clicked: ${story.title}`)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30" data-testid="section-explore-map">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <SectionHeader
                eyebrow="Explore India"
                title="Cultural Map of India"
                description="Hover over the button to explore artforms across different regions of India."
                centered
              />
            </div>

            <div className="flex justify-center">
              <InteractiveMap />
            </div>
          </div>
        </section>

        <section className="py-20 bg-background" data-testid="section-story-themes">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-3xl font-bold text-foreground">
                    Artisan Journeys
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Meet the hands behind the crafts. Discover their struggles, triumphs, and the 
                    passion that drives them to preserve traditions against all odds.
                  </p>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#67C7BD] to-[#6C2A84] rounded-full" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-3xl font-bold text-foreground">
                    Heritage Chronicles
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore the history and evolution of India's art forms. From ancient techniques 
                    to contemporary interpretations, witness the living legacy of our culture.
                  </p>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#E0318E] to-[#EEC056] rounded-full" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

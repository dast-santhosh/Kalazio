import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import SectionHeader from "@/components/SectionHeader";
import ArtisanCard from "@/components/ArtisanCard";
import ProductCard from "@/components/ProductCard";
import CourseCard from "@/components/CourseCard";
import StoryCard from "@/components/StoryCard";
import InteractiveMap from "@/components/InteractiveMap";
import ChettinadStory from "@/components/ChettinadStory";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import artisanImage from "@assets/generated_images/Artisan_weaving_traditional_handloom_4a3c8953.png";
import productImage from "@assets/generated_images/Traditional_handcrafted_pottery_vase_ba2d7061.png";
import courseImage from "@assets/generated_images/Bharatanatyam_classical_dance_performance_99c7d39c.png";
import martialImage from "@assets/generated_images/Kalaripayattu_martial_arts_practice_a47b8b76.png";
import paintingImage from "@assets/generated_images/Pattachitra_traditional_folk_painting_1b17fc74.png";

export default function Home() {
  // Mock data - todo: remove mock functionality
  const featuredArtisans = [
    {
      name: "Meera Devi",
      region: "Tamil Nadu",
      craft: "Handloom Weaving",
      image: artisanImage,
      specialty: "Master weaver preserving 200-year-old Chettinad cotton techniques, creating intricate patterns that tell stories of heritage."
    },
    {
      name: "Rajesh Kumar",
      region: "Rajasthan",
      craft: "Pottery",
      image: productImage,
      specialty: "Third-generation potter crafting traditional terracotta pieces with hand-painted motifs inspired by desert landscapes."
    },
    {
      name: "Lakshmi Iyer",
      region: "Kerala",
      craft: "Classical Dance",
      image: courseImage,
      specialty: "Bharatanatyam guru with 30 years of experience, sharing the divine language of expressions and storytelling through dance."
    }
  ];

  const featuredProducts = [
    {
      name: "Handcrafted Terracotta Vase",
      price: 2800,
      artisan: "Rajesh Kumar",
      image: productImage,
      category: "Pottery"
    },
    {
      name: "Chettinad Cotton Saree",
      price: 8500,
      artisan: "Meera Devi",
      image: artisanImage,
      category: "Handloom"
    },
    {
      name: "Traditional Pattachitra Painting",
      price: 15000,
      artisan: "Priya Mohanty",
      image: paintingImage,
      category: "Painting"
    }
  ];

  const featuredCourses = [
    {
      title: "Bharatanatyam: The Dance of Expressions",
      instructor: "Guru Lakshmi Iyer",
      duration: "8 weeks",
      students: 342,
      image: courseImage,
      category: "Classical Dance"
    },
    {
      title: "Kalaripayattu: Ancient Martial Arts",
      instructor: "Master Vinod Nair",
      duration: "12 weeks",
      students: 189,
      image: martialImage,
      category: "Martial Arts"
    },
    {
      title: "Handloom Weaving Techniques",
      instructor: "Meera Devi",
      duration: "6 weeks",
      students: 256,
      image: artisanImage,
      category: "Textile Arts"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <Hero />

        {/* Marketplace Section */}
        <section className="py-20 bg-background" data-testid="section-marketplace">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <SectionHeader
                eyebrow="Crafts of India"
                title="From Hand to Heart"
                description="Connect with master artisans preserving centuries of tradition. Every piece tells a story of heritage, skill, and love."
                centered
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {featuredArtisans.map((artisan) => (
                <ArtisanCard
                  key={artisan.name}
                  {...artisan}
                  onClick={() => console.log(`Artisan clicked: ${artisan.name}`)}
                />
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#67C7BD] to-[#6C2A84] text-white border-0"
                data-testid="button-view-all-artisans"
              >
                View All Artisans <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-muted/30" data-testid="section-products">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <SectionHeader
                eyebrow="Featured Crafts"
                title="Handpicked Treasures"
                description="Discover authentic pieces created with generations of expertise and passion."
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.name}
                  {...product}
                  onClick={() => console.log(`Product clicked: ${product.name}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Learning Section */}
        <section className="py-20 bg-background" data-testid="section-learning">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <SectionHeader
                eyebrow="Learn, Evolve, Empower"
                title="Traditional Arts Reimagined"
                description="Journey through living disciplines with masters who carry the torch of India's cultural heritage."
                centered
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {featuredCourses.map((course) => (
                <CourseCard
                  key={course.title}
                  {...course}
                  onClick={() => console.log(`Course clicked: ${course.title}`)}
                />
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                variant="outline"
                className="border-2"
                data-testid="button-explore-courses"
              >
                Explore All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Interactive Map */}
        <section className="py-20 bg-muted/30" data-testid="section-map">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <SectionHeader
                eyebrow="Explore India"
                title="Discover Cultural Heritage"
                description="Click the button below to explore traditional artforms across different regions of India."
                centered
              />
            </div>

            <div className="flex justify-center">
              <InteractiveMap />
            </div>
          </div>
        </section>

        {/* Chettinad Story - Featured */}
        <ChettinadStory />

        {/* Cultural Stories */}
        <section className="py-20 bg-background" data-testid="section-stories">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <SectionHeader
                eyebrow="Stories Behind the Strokes"
                title="Where Art Meets Humanity"
                description="Immerse yourself in the narratives of tradition, craft, and cultural pride."
              />
            </div>

            <div className="max-w-5xl mx-auto">
              <StoryCard
                title="Pattachitra of Odisha"
                subtitle="Painting the Divine on Cloth"
                description="Journey through the ancient art of Pattachitra, where master painters create mythological tales through vibrant colors and intricate patterns. Each stroke carries centuries of tradition, telling stories of gods, kings, and the eternal dance of life."
                image={paintingImage}
                region="Odisha, India"
                onClick={() => console.log('Story clicked')}
              />

              <StoryCard
                title="Kalaripayattu of Kerala"
                subtitle="The Dance of the Warrior"
                description="Experience the meditative discipline of India's oldest martial art. Kalaripayattu blends combat techniques with spiritual practice, creating warriors who move with the grace of dancers and the precision of masters."
                image={martialImage}
                region="Kerala, India"
                onClick={() => console.log('Story clicked')}
              />
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#E2791F] to-[#EEC056] text-white border-0"
                data-testid="button-all-stories"
              >
                Explore All Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-[#6C2A84] via-[#E0318E] to-[#E2791F] text-white" data-testid="section-cta">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Join the Cultural Revolution
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
                Be part of a movement preserving India's artistic heritage. 
                Support artisans, learn traditions, share stories.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 border-0"
                  data-testid="button-become-member"
                >
                  Become a Member
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                  data-testid="button-partner"
                >
                  Partner with Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

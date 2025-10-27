import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import danceImage from "@assets/generated_images/Bharatanatyam_classical_dance_performance_99c7d39c.png";
import martialImage from "@assets/generated_images/Kalaripayattu_martial_arts_practice_a47b8b76.png";
import weavingImage from "@assets/generated_images/Artisan_weaving_traditional_handloom_4a3c8953.png";

export default function Learn() {
  // Mock data - todo: remove mock functionality
  const courses = [
    {
      title: "Bharatanatyam: The Dance of Expressions",
      instructor: "Guru Lakshmi Iyer",
      duration: "8 weeks",
      students: 342,
      image: danceImage,
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
      image: weavingImage,
      category: "Textile Arts"
    },
    {
      title: "Classical Carnatic Music",
      instructor: "Vidwan Ramesh Kumar",
      duration: "10 weeks",
      students: 198,
      image: danceImage,
      category: "Music"
    },
    {
      title: "Traditional Pottery & Ceramics",
      instructor: "Rajesh Kumar",
      duration: "6 weeks",
      students: 167,
      image: weavingImage,
      category: "Crafts"
    },
    {
      title: "Culinary Heritage of South India",
      instructor: "Chef Padma Lakshmi",
      duration: "4 weeks",
      students: 523,
      image: martialImage,
      category: "Culinary"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <div className="bg-gradient-to-b from-[#E2791F]/10 to-background py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
                Learn, Evolve, Empower
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Journey through living disciplines with masters who carry the torch of India's cultural heritage. 
                Each course is a doorway into ancient wisdom reimagined for today.
              </p>
            </motion.div>
          </div>
        </div>

        <section className="py-20 bg-background" data-testid="section-courses">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <SectionHeader
                eyebrow="Featured Learning Paths"
                title="Traditions Come Alive"
                description="From martial arts to music, textiles to cuisine—experience India's diverse artistic disciplines."
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard
                  key={course.title}
                  {...course}
                  onClick={() => console.log(`Course clicked: ${course.title}`)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30" data-testid="section-learning-benefits">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#67C7BD] to-[#6C2A84] flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Learn from Masters</h3>
                  <p className="text-muted-foreground">
                    Study with gurus and experts who have dedicated their lives to preserving cultural traditions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E0318E] to-[#E2791F] flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Interactive Experience</h3>
                  <p className="text-muted-foreground">
                    Engage with multimedia lessons, live sessions, and hands-on practice assignments.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E2791F] to-[#EEC056] flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Earn Certificates</h3>
                  <p className="text-muted-foreground">
                    Receive recognition for your dedication and progress with cultural symbols that light up.
                  </p>
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

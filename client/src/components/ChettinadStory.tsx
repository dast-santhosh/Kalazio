import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import weavingImage from "@assets/generated_images/Artisan_weaving_traditional_handloom_4a3c8953.png";
import marketImage from "@assets/generated_images/Vibrant_Indian_marketplace_bazaar_376f935c.png";

export default function ChettinadStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden"
      data-testid="section-chettinad-story"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          style={{ scale, opacity: opacity1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#67C7BD] via-[#E0318E] to-[#EEC056] rounded-full mb-8 max-w-md mx-auto"
            />
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Chettinad: The Place of Kings
            </h2>
            <p className="text-xl text-muted-foreground italic font-serif">
              Where palatial grandeur meets timeless craftsmanship
            </p>
          </motion.div>

          {/* Story Content with Parallax Images */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div style={{ y: y1 }} className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img 
                  src={weavingImage}
                  alt="Chettinad Weaving"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6C2A84]/60 to-transparent" />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#E0318E] to-[#EEC056] rounded-full opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            <motion.div 
              style={{ opacity: opacity2 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="font-serif text-3xl font-bold text-foreground">
                The Weavers of Heritage
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In the heart of Tamil Nadu lies Chettinad, a region renowned for its magnificent 
                mansions and master weavers. For over 200 years, these artisans have transformed 
                simple cotton threads into intricate patterns that tell stories of royalty, 
                devotion, and cultural pride.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 w-full bg-gradient-to-r from-[#67C7BD] to-[#6C2A84] rounded-full origin-left"
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each saree takes weeks to complete, with every thread placed with precision 
                and purpose. The weavers don't just create fabric—they weave memories, 
                traditions, and the very essence of Chettinad's regal past.
              </p>
            </motion.div>
          </div>

          {/* Palatial Architecture Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              style={{ opacity: opacity1 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-2 md:order-1"
            >
              <h3 className="font-serif text-3xl font-bold text-foreground">
                Palatial Grandeur
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chettinad's mansions stand as monuments to a golden era. Built by wealthy 
                merchant princes, these architectural marvels feature ornate pillars, 
                hand-painted tiles from Europe, and courtyards that echo with history.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 w-full bg-gradient-to-r from-[#E0318E] to-[#EEC056] rounded-full origin-left"
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Walk through these grand halls and you'll discover intricate woodwork, 
                Athangudi tiles with geometric patterns, and jewelry traditions passed 
                down through generations—each element a testament to Chettinad's 
                unparalleled craftsmanship.
              </p>
            </motion.div>

            <motion.div style={{ y: y2 }} className="relative order-1 md:order-2">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img 
                  src={marketImage}
                  alt="Chettinad Architecture"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E2791F]/60 to-transparent" />
              </motion.div>
              <motion.div
                className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#67C7BD] to-[#6C2A84] rounded-full opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>

          {/* Culinary Heritage */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="bg-gradient-to-r from-[#6C2A84]/10 via-[#E0318E]/10 to-[#EEC056]/10 rounded-3xl p-12 border-2 border-accent/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-3xl font-bold text-foreground mb-6">
                A Feast for the Senses
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Chettinad cuisine is legendary—a symphony of spices that awakens the palate. 
                From fiery Chettinad chicken to aromatic biryanis, every dish tells the story 
                of spice merchants who traveled the world and brought back culinary secrets.
              </p>
              <motion.div
                className="flex justify-center gap-4 flex-wrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, staggerChildren: 0.1 }}
              >
                {["Spice Mastery", "Royal Recipes", "Traditional Techniques"].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#67C7BD] to-[#6C2A84] text-white rounded-full font-semibold"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-20"
          >
            <p className="font-serif text-2xl italic text-muted-foreground leading-relaxed">
              "Chettinad is not just a place—it's a living museum where every stone, 
              thread, and spice whispers tales of kings, merchants, and master craftsmen 
              who built an empire of beauty and taste."
            </p>
            <motion.div
              className="mt-8 h-1 w-48 bg-gradient-to-r from-[#67C7BD] via-[#E0318E] to-[#EEC056] rounded-full mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 192 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

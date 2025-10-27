import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, centered = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? "text-center" : ""}
    >
      {eyebrow && (
        <motion.div 
          className="mb-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            {eyebrow}
          </span>
        </motion.div>
      )}
      
      <motion.h2 
        className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          className="text-lg text-muted-foreground leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}
      
      <motion.div 
        className="mt-6 h-1 w-24 bg-gradient-to-r from-[#67C7BD] via-[#E0318E] to-[#EEC056] rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
}

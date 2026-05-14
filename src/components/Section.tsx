import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  heading: string;
  children: ReactNode;
  imageSrc: string;
}

export function Section({ id, eyebrow, heading, children, imageSrc }: SectionProps) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={containerRef}
      id={id}
      className="relative min-h-screen flex items-center py-24 px-6 sm:px-10 overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
          <img
            src={imageSrc}
            alt=""
            // Increased opacity from 0.3 to 0.5 to make image more "present"
            className="w-full h-full object-cover opacity-50 grayscale-[10%]" 
          />
          
          {/* Vertical Gradient - Reduced opacity from /60 to /20 in the center */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-background" 
          />
          
          {/* Horizontal Gradient - Softened to allow more image clarity */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-40" 
          />
        </motion.div>
      </div>

      {/* Content Layer */}
      <div className="max-w-3xl mx-auto w-full relative z-10">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-accent mb-6"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          // Added a subtle shadow to text to maintain readability over the lighter background
          className="text-5xl sm:text-7xl font-semibold mb-8 gradient-text leading-tight drop-shadow-sm"
        >
          {heading}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-2xl leading-relaxed text-white font-light drop-shadow-md"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
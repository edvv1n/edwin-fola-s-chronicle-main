import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { X } from "lucide-react";

export function WishOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    
    const colors = ["#a855f7", "#facc15", "#ec4899", "#22d3ee", "#f97316", "#8b5cf6"];
    const end = Date.now() + 2500;

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 75,
        origin: { x: 0, y: 0.7 },
        colors,
        zIndex: 100, // Ensure confetti stays above the background
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 75,
        origin: { x: 1, y: 0.7 },
        colors,
        zIndex: 100,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    // Initial burst
    confetti({ 
      particleCount: 180, 
      spread: 120, 
      origin: { y: 0.5 }, 
      colors,
      zIndex: 100 
    });
    
    frame();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // "inset-0" handles the fullscreen, increased background opacity to 95%
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "color-mix(in oklab, var(--background) 95%, black)" }}
        >
          {/* Close Button - Larger touch target & distinct contrast */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all flex items-center justify-center shadow-2xl z-[60]"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="w-full max-w-4xl px-8 text-center"
          >
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-purple-400 mb-8">
              11:11 — You are my biggest wish come true
            </p>
            
            <h3 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight drop-shadow-sm">
              I love you today, <br className="hidden sm:block" />
              more than I did yesterday, <br className="hidden sm:block" />
              but less than I will tomorrow.
            </h3>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-col items-center gap-2"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <p className="text-xl text-gray-400 font-light italic">
                — Edwin, for Fola
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowDown } from "lucide-react";

// Components
import { Navbar } from "@/components/Navbar";
import { NowPlaying } from "@/components/NowPlaying";
import { Section } from "@/components/Section";
import { WishOverlay } from "@/components/WishOverlay";

// Image Imports from src/assets
import heroImg from "@/assets/hero.jpg";
import rideImg from "@/assets/April 30.jpg";
import cinemaImg from "@/assets/ABK trip.jpg";
import proposalImg from "@/assets/11:11.jpg";
import courtImg from "@/assets/May 15_Court.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Our Story: Edwin & Fola" },
      {
        name: "description",
        content:
          "A love letter in five chapters — from a backseat song to the best verdict of my life. Happy Anniversary, Fola.",
      },
      { property: "og:title", content: "Our Story: Edwin & Fola" },
      {
        property: "og:description",
        content: "Five chapters. One love story. Happy Anniversary, Fola.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=DM+Sans:wght@300;400;500&family=Dancing+Script:wght@500;600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  const [wishOpen, setWishOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <NowPlaying />

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24 text-center overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <img 
            src={heroImg} 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, var(--background) 90%), radial-gradient(ellipse at 20% 20%, color-mix(in oklab, var(--purple) 15%, transparent), transparent 60%)",
            }}
          />
        </div>

        <div className="max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border glass mb-8"
          >
            <Heart className="w-3.5 h-3.5 text-accent" fill="currentColor" />
            <span className="font-mono text-xs uppercase tracking-widest">
              A love story · in five chapters
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl leading-[1]"
          >
            Our Story
            <br />
            <span className="font-script gradient-text text-6xl sm:text-8xl md:text-9xl">
              Edwin &amp; Fola
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto"
          >
            From a backseat song to the best day of my life — here are the moments
            that brought us here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-14 flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 01 */}
      <Section
        id="soundtrack"
        eyebrow="Chapter 01 · April 2023"
        heading="The Best Kind of Detour"
        imageSrc={rideImg}
      >
        <p>
          It was my birthday, but the real gift wasn't at Fortunate's party. It was the ride
          home. Sitting in the back of that Uber, I queued up Daniel Caesar's{" "}
          <span className="text-primary font-medium">"Best Part."</span> As the music played
          and the city lights blurred past the window, everything just clicked.
        </p>
      </Section>

      {/* Chapter 02 */}
      <Section 
        id="blur" 
        eyebrow="Chapter 02 · May 2023" 
        heading="0% Plot, 100% You"
        imageSrc={cinemaImg}
      >
        <p>
          I didn't think; I just moved. One impulsive trip to Abeokuta later, and we were
          sitting in a dark theater with a bucket of popcorn. People ask me if the movie was
          any good, and honestly? I spent the whole time distracted by the person sitting next to me.
        </p>
      </Section>

      {/* Chapter 03 */}
      <Section 
        id="alignment" 
        eyebrow="Chapter 03 · November 11, 2023" 
        heading="11 / 11"
        imageSrc={proposalImg}
      >
        <p>
          They say 11:11 is for making wishes, but on that day, I decided to make a move
          instead. Asking you to be my girlfriend was the easiest "Yes" I've ever looked for.
          It was the day my life finally started making sense.
        </p>
        <div className="mt-10">
          <button
            onClick={() => setWishOpen(true)}
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            style={{ background: "var(--gradient-royal)", boxShadow: "var(--shadow-elegant)" }}
          >
            <Sparkles className="w-4 h-4" />
            Gotta Tell You Something
          </button>
        </div>
      </Section>

      {/* Chapter 04 */}
      <Section
        id="lawsuit"
        eyebrow="Chapter 04 · May 15, 2025"
        heading="I Fought the Law"
        imageSrc={courtImg}
      >
        <div className="relative">
          <div
            className="relative bg-card/40 backdrop-blur-sm border-2 border-foreground/20 rounded-sm p-8 sm:p-10 font-mono text-sm sm:text-base text-foreground/85 shadow-elegant"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 27px, color-mix(in oklab, var(--foreground) 8%, transparent) 28px)",
              lineHeight: "28px",
            }}
          >
            <div className="flex items-center justify-between border-b-2 border-foreground/30 pb-3 mb-6 text-xs uppercase tracking-widest">
              <span>Case No. 05-15-2025</span>
              <span>In the Court of Forever</span>
            </div>
            <p className="font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
              I always joke that you "sued me" into marriage, but the truth is, I'd happily
              stand in front of any judge in the world if it meant walking out with you. 
              It was the day we made it official—the best verdict of my life.
            </p>
            <div className="mt-8 flex items-end justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <div>
                <p>Signed,</p>
                <p className="font-display normal-case text-2xl mt-2 text-foreground">
                  Edwin &amp; Fola
                </p>
              </div>
              <p>15 / 05 / 2025</p>
            </div>
            <div className="absolute -top-4 right-4 sm:right-10">
              <span className="stamp text-xl sm:text-2xl block">Case Closed</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="relative py-24 px-6 text-center border-t border-border bg-background">
        <Heart
          className="w-6 h-6 mx-auto mb-4 text-accent"
          fill="currentColor"
        />
        <p className="font-script text-4xl sm:text-5xl gradient-text">
          Happy Anniversary, Fola.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Made with love, by Edwin. <span aria-hidden>♥</span>
        </p>
      </footer>

      <WishOverlay open={wishOpen} onClose={() => setWishOpen(false)} />
    </div>
  );
}
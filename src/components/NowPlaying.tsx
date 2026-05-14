import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";
import track from "../assets/dc_bp.mp3";

export function NowPlaying() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // We define the function inside useEffect to ensure audioRef is attached
    const handleAutoplay = async () => {
      if (!audioRef.current) return;

      try {
        // Modern browsers return a promise on .play()
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        // This is expected if the user hasn't clicked anything yet
        console.log("Autoplay blocked: User interaction required.");
        setPlaying(false);
      }
    };

    handleAutoplay();
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      // Re-run the play promise check to catch any interruptions
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch((err) => console.error("Playback failed:", err));
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-30 max-w-[18rem] sm:max-w-xs">
      <audio
        ref={audioRef}
        src={track}
        preload="auto"
        onEnded={() => setPlaying(false)}
      />

      <div className="glass border border-border rounded-2xl shadow-elegant p-3 flex items-center gap-3">
        {/* Album Art / Icon */}
        <div
          className="relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "var(--gradient-royal)" }}
        >
          <Music className="w-5 h-5 text-background" />
        </div>

        {/* Track Info */}
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Now Playing
          </p>
          <p className="text-sm font-medium truncate text-foreground">
            Best Part
          </p>
          <p className="text-xs text-muted-foreground truncate">
            Daniel Caesar · H.E.R.
          </p>
        </div>

        {/* Animated Visualizer */}
        <div className="flex items-end gap-[2px] h-6 px-1">
          {[0.2, 0.5, 0.8, 0.4, 0.6].map((d, i) => (
            <span
              key={i}
              className="wave-bar w-[3px] rounded-full bg-primary"
              style={{
                height: "100%",
                animationDelay: `${d}s`,
                animationPlayState: playing ? "running" : "paused",
              }}
            />
          ))}
        </div>

        {/* Control Button */}
        <button
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="w-8 h-8 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition flex items-center justify-center shrink-0"
        >
          {playing ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current" />
          )}
        </button>
      </div>
    </div>
  );
}
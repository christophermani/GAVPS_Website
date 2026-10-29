import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/foundation";
const slides = [
  {
    image: photos.community,
    label: "TOGETHER FOR CHANGE",
    first: "Together, we can build",
    second: "a better tomorrow.",
    text: "Meaningful change begins when communities come together — through education, empowerment, healthcare awareness, environmental initiatives, and social welfare.",
    cta: ["Join Our Mission", "/volunteer"],
  },
  {
    image: photos.education,
    label: "EDUCATION",
    first: "Education for",
    second: "every dream.",
    text: "Every child deserves the opportunity to learn, discover their potential, and build a brighter future.",
    cta: ["Support Education", "/services/education-support"],
  },
  {
    image: photos.healthcare,
    label: "WOMEN EMPOWERMENT",
    first: "Empowering women,",
    second: "strengthening communities.",
    text: "Supporting awareness, skills, confidence, and opportunities that help women grow and lead in their communities.",
    cta: ["Explore Our Initiatives", "/services/women-empowerment"],
  },
  {
    image: photos.blood,
    label: "SERVICE IN ACTION",
    first: "Small actions.",
    second: "Meaningful change.",
    text: "From blood donation awareness to environmental campaigns, every act of service contributes to a healthier, more compassionate society.",
    cta: ["Become a Volunteer", "/volunteer"],
  },
];
export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touch = useRef(0);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motion = () => setReduced(media.matches);
    const visibility = () => setHidden(document.hidden);
    motion();
    media.addEventListener("change", motion);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      media.removeEventListener("change", motion);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  useEffect(() => {
    if (paused || hidden || reduced) return;
    const timer = setInterval(() => setIndex((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [paused, hidden, reduced, index]);
  const move = (direction: number) =>
    setIndex((v) => (v + direction + slides.length) % slides.length);
  const current = slides[index];
  if (!current) return null;
  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Foundation campaigns"
      onTouchStart={(e) => (touch.current = e.touches[0]?.clientX ?? 0)}
      onTouchEnd={(e) => {
        const dx = (e.changedTouches[0]?.clientX ?? touch.current) - touch.current;
        if (Math.abs(dx) > 50) move(dx > 0 ? -1 : 1);
      }}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.image}
          className={`hero-image ${i === index ? "active" : ""}`}
          src={slide.image}
          width={1920}
          height={1088}
          loading={i === 0 ? "eager" : "lazy"}
          alt={
            i === 0
              ? "Community volunteers planting a sapling"
              : i === 1
                ? "Volunteer sharing a schoolbook with children"
                : i === 2
                  ? "Community healthcare consultation"
                  : "Blood donor attended by a nurse"
          }
          aria-hidden={i !== index}
        />
      ))}
      <div className="wrap hero-body">
        <div className="eyebrow">
          GAVPS FOUNDATION <span className="opacity-60">/</span> COMPASSION IN ACTION
        </div>
        <div key={index} className="reveal">
          <h1>
            {current.first}
            <br />
            <span>{current.second}</span>
          </h1>
          <p>{current.text}</p>
        </div>
        <div className="hero-actions">
          <Button asChild>
            <a href={current.cta[1]}>
              {current.cta[0]}
              <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="hero">
            <a href="/services">
              Explore Our Work
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="wrap">
          <div className="hero-caption">
            <HeartHandshake size={22} />
            <span>People first. Always.</span>
            <span className="caption-label opacity-50">
              Giving Aid to Various People of the Society
            </span>
          </div>
          <div className="slide-controls">
            {slides.map((s, i) => (
              <Button
                variant="ghost"
                key={s.label}
                className={`slide-dot ${index === i ? "active" : ""}`}
                aria-label={`Go to slide ${i + 1}: ${s.label}`}
                aria-pressed={index === i}
                onClick={() => setIndex(i)}
              />
            ))}
            <Button
              size="icon"
              variant="ghost"
              className="hero-icon"
              aria-label="Previous slide"
              onClick={() => move(-1)}
            >
              <ChevronLeft />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hero-icon"
              aria-label="Next slide"
              onClick={() => move(1)}
            >
              <ChevronRight />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-inverse"
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              onClick={() => setPaused(!paused)}
            >
              {paused ? <Play /> : <Pause />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/foundation";
const pictures = [
  { image: photos.education, category: "Education", alt: "A volunteer helping children learn" },
  { image: photos.community, category: "Community", alt: "Volunteers planting a tree together" },
  { image: photos.healthcare, category: "Healthcare", alt: "A community health consultation" },
  { image: photos.blood, category: "Blood Donation", alt: "A blood donor and attending nurse" },
];
export function GalleryView() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const filtered = pictures.filter((p) => category === "All" || p.category === category);
  useEffect(() => {
    if (selected === null) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight")
        setSelected((v) => (v === null ? null : (v + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setSelected((v) => (v === null ? null : (v - 1 + filtered.length) % filtered.length));
      if (e.key === "Tab") {
        const items = Array.from(document.querySelectorAll<HTMLButtonElement>(".lightbox button"));
        const first = items[0],
          last = items.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [selected, filtered.length]);
  const current = selected === null ? null : filtered[selected];
  return (
    <>
      <div className="filter-row">
        {["All", "Education", "Community", "Healthcare", "Blood Donation"].map((c) => (
          <Button
            key={c}
            variant={category === c ? "default" : "outline"}
            size="sm"
            aria-pressed={category === c}
            onClick={() => {
              setCategory(c);
              setSelected(null);
            }}
          >
            {c}
          </Button>
        ))}
      </div>
      <div className="gallery-grid">
        {filtered.map((p, i) => (
          <Button
            variant="ghost"
            className="gallery-tile"
            key={p.image}
            aria-label={`View ${p.alt}`}
            onClick={(e) => {
              triggerRef.current = e.currentTarget;
              setSelected(i);
            }}
          >
            <img src={p.image} alt={p.alt} loading="lazy" width={1536} height={1024} />
          </Button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-6">
        These pictures are illustrative and are not records of the foundation’s activities. Approved
        photographs and videos will be added with dates, captions and consent.
      </p>
      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt}>
          <Button
            ref={closeRef}
            variant="hero"
            size="icon"
            className="lightbox-close"
            aria-label="Close image"
            onClick={() => setSelected(null)}
          >
            <X />
          </Button>
          <Button
            variant="hero"
            size="icon"
            className="lightbox-prev"
            aria-label="Previous image"
            onClick={() =>
              setSelected((v) => (v === null ? null : (v - 1 + filtered.length) % filtered.length))
            }
          >
            <ChevronLeft />
          </Button>
          <img src={current.image} alt={current.alt} />
          <Button
            variant="hero"
            size="icon"
            className="lightbox-next"
            aria-label="Next image"
            onClick={() => setSelected((v) => (v === null ? null : (v + 1) % filtered.length))}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </>
  );
}

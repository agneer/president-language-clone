import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: "7teJGrrjltM", title: "Depoimento 1" },
  { id: "XEmUOzZx9yU", title: "Depoimento 2" },
  { id: "h6fhknAS7R0", title: "Depoimento 3" },
  { id: "mDr-r6ufZfc", title: "Depoimento 4" },
  { id: "daFhEF_0zoI", title: "Depoimento 5" },
  { id: "nHB4xFkUIgs", title: "Depoimento 6" },
];

const TestimonialsV4 = () => {
  const [current, setCurrent] = useState(0);

  const visibleCount = 3;
  const maxIndex = Math.max(0, videos.length - visibleCount);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          DEPOIMENTOS
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12">
          Veja o que profissionais e executivos estão falando
        </h2>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-full p-2 text-foreground hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-full p-2 text-foreground hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel viewport */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / visibleCount + 2)}%)` }}
            >
              {videos.map((v, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 rounded-2xl overflow-hidden border-gradient-cyan card-glow"
                  style={{ width: `calc((100% - 3rem) / 3)` }}
                >
                  <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-foreground font-heading font-bold text-lg mt-8">
          Você pode ser o próximo!
        </p>
      </div>
    </section>
  );
};

export default TestimonialsV4;

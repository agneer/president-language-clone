import heroImage from "@/assets/hero-executive.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-12 pb-16 px-4 bg-grid-pattern bg-gradient-radial-cyan overflow-hidden">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center">
          <span className="text-primary font-heading font-bold text-lg">PL</span>
        </div>
        <div>
          <p className="font-heading text-foreground tracking-[0.3em] text-sm font-semibold">PRESIDENT</p>
          <p className="font-heading text-muted-foreground tracking-[0.3em] text-xs">LANGUAGE</p>
        </div>
      </div>

      {/* Badge */}
      <div className="border border-primary/30 rounded-full px-6 py-2 mb-10">
        <span className="font-heading text-foreground text-xs tracking-widest font-semibold">
          PRESIDENT LANGUAGE APRESENTA
        </span>
      </div>

      {/* Headline */}
      <div className="max-w-4xl text-center mb-6">
        <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.2rem] font-bold leading-tight text-foreground mb-2">
          Apresentações Corporativas em Inglês Que Fazem Você Ser{" "}
          <span className="text-gradient-cyan">
            Ouvido, Respeitado e Lembrado
          </span>
        </h1>
      </div>

      {/* Subheadline */}
      <p className="max-w-3xl text-center text-muted-foreground text-base md:text-lg mb-4 leading-relaxed">
        O curso definitivo para profissionais que já falam inglês — mas travam, perdem impacto e soam genéricos quando precisam apresentar para stakeholders internacionais.
      </p>

      <p className="max-w-3xl text-center text-muted-foreground text-sm md:text-base mb-10 leading-relaxed">
        Curso 100% gravado — acesse no seu ritmo e aplique já na sua próxima apresentação internacional.
      </p>

      {/* CTA */}
      <a
        href="#valor"
        className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-lg hover:opacity-90 transition-opacity mb-12"
      >
        QUERO APRESENTAR COM IMPACTO EM INGLÊS
      </a>

      {/* Hero Image */}
      <div className="relative max-w-3xl w-full">
        <div className="rounded-2xl overflow-hidden border-gradient-cyan card-glow">
          <img
            src={heroImage}
            alt="Executiva profissional em ambiente corporativo global"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/40 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full" />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/20 rounded-full" />
    </section>
  );
};

export default HeroSection;

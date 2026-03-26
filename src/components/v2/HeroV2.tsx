const HeroV2 = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-background bg-gradient-radial-cyan overflow-hidden">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center">
          <span className="text-primary font-heading font-bold text-lg">PL</span>
        </div>
        <div>
          <p className="font-heading text-foreground tracking-[0.3em] text-sm font-semibold">PRESIDENT</p>
          <p className="font-heading text-muted-foreground tracking-[0.3em] text-xs">LANGUAGE</p>
        </div>
      </div>

      {/* Headline */}
      <div className="max-w-4xl text-center mb-6">
        <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight text-foreground">
          Você fala inglês. Mas na hora de apresentar para o board...{" "}
          <span className="text-gradient-cyan">trava.</span>
        </h1>
      </div>

      {/* Sub-headline */}
      <p className="max-w-3xl text-center text-muted-foreground text-base md:text-lg mb-12 leading-relaxed">
        Descubra o método que executivos usam para conduzir apresentações corporativas em inglês com segurança, clareza e autoridade — mesmo sob pressão.
      </p>

      {/* CTA */}
      <a
        href="#oferta"
        className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
      >
        QUERO APRESENTAR COM CONFIANÇA →
      </a>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/40 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/20 rounded-full" />
    </section>
  );
};

export default HeroV2;

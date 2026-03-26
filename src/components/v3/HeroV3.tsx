import heroImage from "@/assets/luciane-hero-v2.jpg";

const HeroV3 = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-16 bg-background bg-gradient-radial-cyan overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col items-start">
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

          {/* Badge */}
          <div className="border border-primary/30 rounded-full px-6 py-2 mb-8">
            <span className="text-primary font-heading font-bold text-xs tracking-[0.25em]">
              EXCLUSIVO PARA GERENTES, DIRETORES, C-LEVEL
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight text-foreground mb-6">
            Você fala inglês. Mas na hora de apresentar para o board...{" "}
            <span className="text-gradient-cyan">trava.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed max-w-xl">
            Descubra o método que executivos usam para conduzir apresentações corporativas em inglês com segurança, clareza e autoridade — mesmo sob pressão.
          </p>

          <p className="text-foreground/80 text-sm md:text-base mb-10 leading-relaxed max-w-xl">
            Um curso online direto ao ponto, criado para profissionais que já falam inglês e precisam de uma coisa: apresentar com autoridade.
          </p>

          {/* CTA */}
          <a
            href="#oferta"
            className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            QUERO APRESENTAR COM CONFIANÇA →
          </a>
        </div>

        {/* Right: Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 max-w-lg w-full">
            <img
              src={heroImage}
              alt="Luciane Santos apresentando em ambiente corporativo"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/40 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/20 rounded-full" />
    </section>
  );
};

export default HeroV3;

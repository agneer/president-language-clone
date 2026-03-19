const ImmersionSection = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-card border-gradient-cyan rounded-2xl p-10 card-glow">
          <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
            BÔNUS EXCLUSIVO
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
            Ingresso Exclusivo para os{" "}
            <span className="text-primary">50 primeiros inscritos: R$ 1.000,00</span>
          </h2>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
            Imersão Presencial - 2026
          </h3>
          <p className="text-muted-foreground mb-8">
            Na Hotmart, na FDC - Fundação Dom Cabral ou no Coco Bambu, em Belo Horizonte-MG.
          </p>
          <a
            href="#valor"
            className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            QUERO MEU INGRESSO AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImmersionSection;

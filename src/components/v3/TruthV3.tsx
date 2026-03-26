const localItems = [
  "Ensaia mentalmente em português e traduz ao vivo",
  "Depende de scripts decorados para cada apresentação",
  "Perde credibilidade por insegurança na comunicação",
  "Evita se voluntariar para apresentações internacionais",
];

const globalItems = [
  "Estrutura narrativas que prendem a atenção de C-levels",
  "Domina vocabulário estratégico de negócios",
  "Mantém fluência mesmo sob pressão e nervosismo",
  "Conduz Q&A e improvisa em inglês com confiança",
];

const TruthV3 = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          A VERDADE QUE NINGUÉM TE CONTA
        </p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
          Cursos de inglês convencionais te preparam para conversar.
        </h2>
        <h2 className="font-heading text-2xl md:text-4xl font-bold mb-12">
          <span className="text-gradient-cyan">Não para performar.</span>
        </h2>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Local */}
          <div className="bg-card rounded-2xl p-8 border border-destructive/20">
            <h3 className="font-heading text-lg font-bold text-destructive mb-6">
              ❌ PROFISSIONAL QUE TRAVA
            </h3>
            <ul className="space-y-4 text-left">
              {localItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-destructive mt-0.5">—</span>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Global */}
          <div className="bg-card border-gradient-cyan rounded-2xl p-8 card-glow">
            <h3 className="font-heading text-lg font-bold text-primary mb-6">
              ✅ LÍDER QUE PERFORMA
            </h3>
            <ul className="space-y-4 text-left">
              {globalItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">—</span>
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-foreground text-lg font-heading font-bold max-w-3xl mx-auto mb-8">
          Apresentar em inglês no ambiente corporativo exige um conjunto{" "}
          <span className="text-primary">diferente</span> de habilidades.
        </p>

        <a
          href="#oferta"
          className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          QUERO ME TORNAR UM LÍDER QUE PERFORMA →
        </a>
      </div>
    </section>
  );
};

export default TruthV3;

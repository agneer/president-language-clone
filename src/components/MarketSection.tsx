import { Check } from "lucide-react";

const points = [
  "Se posiciona como referência e autoridade no mercado global",
  "Sabe comunicar o seu próprio valor com clareza e estratégia",
  "Domina a língua do mercado e desenvolve inteligência cultural",
  "Lidera times, projetos e negocia contratos de alto impacto",
  "Entrega valor e resultado em qualquer parte do mundo",
];

const MarketSection = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4 font-heading">
          Mercado e Oportunidades
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          O Mercado Internacional é um verdadeiro
        </h2>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gradient-cyan mb-6">
          SHARK TANK
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Falar inglês é requisito básico. Performance e resultado são o que garante as melhores oportunidades.
        </p>

        <div className="bg-card border-gradient-cyan rounded-2xl p-8 md:p-12 text-left card-glow">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-8">
            Empresas globais não estão à procura de quem "apenas fala inglês…"{" "}
            <span className="text-primary">Elas buscam quem:</span>
          </h3>
          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 space-y-2">
          <p className="font-heading text-xl font-bold text-foreground">Sem isso, você se torna apenas mais um currículo ignorado.</p>
          <p className="font-heading text-xl font-bold text-muted-foreground">Mais um talento desperdiçado.</p>
          <p className="font-heading text-xl font-bold text-muted-foreground">Mais um profissional invisível no mercado internacional.</p>
        </div>

        <a
          href="#valor"
          className="inline-block mt-10 bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          QUERO ME POSICIONAR COMO PROFISSIONAL GLOBAL
        </a>
      </div>
    </section>
  );
};

export default MarketSection;

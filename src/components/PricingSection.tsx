import { Shield, Check } from "lucide-react";

const includes = [
  "Acesso imediato e vitalício ao curso completo (6 módulos em vídeo).",
  "Templates de script para apresentações corporativas em inglês.",
  "Banco de expressões de alto impacto por contexto (resultados, propostas, projetos, pitches).",
  "Checklist pré-apresentação internacional.",
  "Exemplos gravados com análise de comunicação executiva.",
];

const PricingSection = () => {
  return (
    <section id="valor" className="py-20 px-4 bg-background bg-gradient-radial-cyan">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          O QUE VOCÊ LEVA HOJE
        </p>

        {/* What's included */}
        <div className="bg-card border-gradient-cyan rounded-2xl p-8 text-left mb-8 card-glow">
          <ul className="space-y-4">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div className="bg-card border-gradient-cyan rounded-2xl p-10 card-glow">
          <p className="text-muted-foreground text-sm mb-1">Tudo isso por:</p>
          <p className="text-muted-foreground text-lg line-through mb-2">De R$ 497</p>
          <p className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-1">
            R$ 197
          </p>
          <p className="text-muted-foreground mb-8">ou 12x de R$ 19,09 no cartão</p>

          <a
            href="https://pay.hotmart.com/T96070806I"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-md bg-primary text-primary-foreground font-heading font-bold text-base tracking-wider px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            QUERO APRESENTAR COM IMPACTO EM INGLÊS →
          </a>

          <div className="flex items-center justify-center gap-3 mt-8 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="font-heading font-bold text-foreground text-sm">Garantia Incondicional de 7 Dias</p>
              <p className="text-xs">Acesse, assista e decida. Se não gostar, 100% de reembolso. Sem perguntas.</p>
            </div>
          </div>
        </div>

        <p className="text-primary font-heading font-semibold text-sm mt-6">
          O risco é zero. A oportunidade é real.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

import { X, Check } from "lucide-react";

const localPoints = [
  "Promoções lentas e salários limitados",
  "Instabilidade política e econômica, somadas à desvalorização do real",
  "Concorrência interna, falta de oportunidades e cargos mais escassos",
  "Anos e anos esperando por crescimento e reconhecimento profissional",
];

const globalPoints = [
  "Posições estratégicas com melhores ganhos no Brasil e em moeda forte",
  "Acesso a mercados sólidos, contratos mais estáveis e patrimônio protegido",
  "Você é altamente valorizado e alcança novas oportunidades na organização",
  "Resultados que geram alto impacto e acelera sua carreira no mercado global",
];

const ComparisonSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
            PROFISSIONAIS LOCAIS VS LÍDERES INTERNACIONAIS...
          </h2>
          <p className="font-heading text-xl text-muted-foreground">O que realmente te diferencia?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Local */}
          <div className="bg-background rounded-2xl p-8 border border-destructive/20">
            <h3 className="font-heading text-xl font-bold text-destructive mb-6">ATUAÇÃO LOCAL</h3>
            <ul className="space-y-4">
              {localPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Global */}
          <div className="bg-background rounded-2xl p-8 border-gradient-cyan card-glow">
            <h3 className="font-heading text-xl font-bold text-primary mb-6">LIDERANÇA GLOBAL</h3>
            <ul className="space-y-4">
              {globalPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="font-heading text-lg md:text-xl font-bold text-foreground max-w-3xl mx-auto">
            Enquanto muitos ainda buscam por aumentos de 10% a 20%,{" "}
            <span className="text-primary">
              líderes, executivos e empresários globais estão multiplicando os seus resultados
            </span>
            , conduzindo novas operações, projetos e negócios estratégicos no mercado internacional.
          </p>
          <a
            href="#valor"
            className="inline-block mt-8 bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            QUERO ATUAR NO MERCADO GLOBAL
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

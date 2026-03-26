import { AlertCircle } from "lucide-react";

const painPoints = [
  "Domina o inglês no dia a dia, mas quando liga a câmera para apresentar, as palavras somem.",
  "Ensaia mentalmente em português e tenta traduzir ao vivo — e o resultado nunca sai como planejou.",
  "Sente que perde credibilidade diante de stakeholders internacionais, mesmo sendo expert no assunto.",
  "Evita levantar a mão para apresentar porque sabe que o inglês \"trava\" na hora H.",
];

const PainV3 = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          VOCÊ SE RECONHECE?
        </p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
          Você se reconhece em alguma dessas situações?
        </h2>
        <p className="text-muted-foreground text-base mb-12 max-w-3xl mx-auto">
          Se disse sim para pelo menos uma, o problema não é o seu inglês.{" "}
          <span className="text-primary font-semibold">
            É a falta de um método específico para apresentações de negócios.
          </span>
        </p>

        <div className="grid gap-4 max-w-3xl mx-auto mb-12">
          {painPoints.map((point, i) => (
            <div key={i} className="bg-card rounded-xl p-5 border-gradient-cyan flex items-start gap-3 text-left">
              <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground text-sm">{point}</span>
            </div>
          ))}
        </div>

        <a
          href="#oferta"
          className="inline-block border border-primary text-primary font-heading font-bold text-sm tracking-wider px-10 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          QUERO RESOLVER ISSO AGORA →
        </a>
      </div>
    </section>
  );
};

export default PainV3;

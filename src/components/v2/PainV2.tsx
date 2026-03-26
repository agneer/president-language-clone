import { AlertCircle } from "lucide-react";

const painPoints = [
  "Domina o inglês no dia a dia, mas quando liga a câmera para apresentar, as palavras somem.",
  "Ensaia mentalmente em português e tenta traduzir ao vivo — e o resultado nunca sai como planejou.",
  "Sente que perde credibilidade diante de stakeholders internacionais, mesmo sendo expert no assunto.",
  "Evita levantar a mão para apresentar porque sabe que o inglês \"trava\" na hora H.",
];

const PainV2 = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12">
          Você se reconhece em alguma dessas situações?
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-left mb-12">
          {painPoints.map((point, i) => (
            <div key={i} className="bg-background rounded-xl p-5 border-gradient-cyan flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground text-sm">{point}</span>
            </div>
          ))}
        </div>

        <p className="text-foreground text-base max-w-3xl mx-auto leading-relaxed">
          Se você disse sim para pelo menos uma dessas, o problema não é o seu inglês.{" "}
          <span className="text-primary font-semibold">
            É a falta de um método específico para apresentações de negócios.
          </span>
        </p>
      </div>
    </section>
  );
};

export default PainV2;

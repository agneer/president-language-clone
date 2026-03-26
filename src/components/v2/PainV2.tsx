import { AlertCircle } from "lucide-react";
import executiveImg from "@/assets/executive-thinking.jpg";

const painPoints = [
  "Domina o inglês no dia a dia, mas quando liga a câmera para apresentar, as palavras somem.",
  "Ensaia mentalmente em português e tenta traduzir ao vivo — e o resultado nunca sai como planejou.",
  "Sente que perde credibilidade diante de stakeholders internacionais, mesmo sendo expert no assunto.",
  "Evita levantar a mão para apresentar porque sabe que o inglês \"trava\" na hora H.",
];

const PainV2 = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 max-w-lg w-full">
            <img
              src={executiveImg}
              alt="Executivo pensativo com a mão na cabeça em sala de reunião"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
            Você se reconhece em alguma dessas situações?
          </h2>

          <div className="grid gap-4 mb-10">
            {painPoints.map((point, i) => (
              <div key={i} className="bg-background rounded-xl p-5 border-gradient-cyan flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-foreground text-base leading-relaxed">
            Se você disse sim para pelo menos uma dessas, o problema não é o seu inglês.{" "}
            <span className="text-primary font-semibold">
              É a falta de um método específico para apresentações de negócios.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainV2;

import { Check, X } from "lucide-react";

const isForYou = [
  "Ocupa cargo de liderança e precisa apresentar em inglês regularmente.",
  "Já tem inglês intermediário/avançado mas não se sente seguro apresentando.",
  "Quer parar de ser o profissional competente que \"não aparece\" nas reuniões internacionais.",
  "Sabe que a próxima promoção passa por se posicionar em inglês com confiança.",
];

const isNotForYou = [
  "Ainda está aprendendo inglês básico.",
  "Procura um curso de inglês geral.",
];

const AudienceV2 = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Is for you */}
          <div className="bg-card border-gradient-cyan rounded-2xl p-8 card-glow">
            <h3 className="font-heading text-xl font-bold text-primary mb-6">
              ✅ Este curso é para você que:
            </h3>
            <ul className="space-y-4">
              {isForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="bg-card rounded-2xl p-8 border border-destructive/20">
            <h3 className="font-heading text-xl font-bold text-destructive mb-6">
              ❌ Não é para você se:
            </h3>
            <ul className="space-y-4">
              {isNotForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceV2;

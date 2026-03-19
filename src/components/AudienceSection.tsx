import { Check, X } from "lucide-react";

const isForYou = [
  "Você já fala inglês intermediário ou avançado, mas trava quando precisa apresentar.",
  "Você trabalha ou quer trabalhar em multinacionais com interação internacional.",
  "Você já foi promovido ou transferido e agora precisa apresentar para stakeholders globais.",
  "Você sente que entrega resultados, mas não consegue comunicar com o mesmo impacto em inglês.",
  "Você quer parar de \"sobreviver\" em apresentações e passar a liderar com presença.",
];

const isNotForYou = [
  "Você está procurando um curso de inglês básico ou de gramática.",
  "Você não tem nenhuma base em inglês e precisa começar do zero.",
  "Você quer apenas um certificado — e não resultado prático.",
];

const AudienceSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Is for you */}
          <div className="bg-background border-gradient-cyan rounded-2xl p-8 card-glow">
            <h3 className="font-heading text-xl font-bold text-primary mb-6">
              ✅ Este curso é para você se...
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
          <div className="bg-background rounded-2xl p-8 border border-destructive/20">
            <h3 className="font-heading text-xl font-bold text-destructive mb-6">
              ❌ Este curso NÃO é para você se...
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

export default AudienceSection;

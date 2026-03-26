import { Check } from "lucide-react";

const skills = [
  "Estrutura narrativa que prende a atenção de C-levels",
  "Vocabulário estratégico de negócios (não o do livro didático)",
  "Técnicas para manter a fluência mesmo quando o nervosismo aparece",
  "Domínio de transições, Q&A e improviso em inglês",
];

const TruthV2 = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          A VERDADE QUE NINGUÉM TE CONTA
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
          Cursos de inglês convencionais te preparam para conversar.{" "}
          <span className="text-gradient-cyan">Não para performar.</span>
        </h2>
        <p className="text-muted-foreground text-base mb-12 max-w-3xl mx-auto leading-relaxed">
          Apresentar em inglês no ambiente corporativo exige um conjunto diferente de habilidades:
        </p>

        <div className="bg-card border-gradient-cyan rounded-2xl p-8 md:p-10 text-left card-glow max-w-2xl mx-auto mb-10">
          <ul className="space-y-4">
            {skills.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-primary font-heading font-bold text-lg">
          É exatamente isso que você vai aprender.
        </p>
      </div>
    </section>
  );
};

export default TruthV2;

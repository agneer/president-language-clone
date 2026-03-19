import { Check } from "lucide-react";

const learnings = [
  "Como estruturar uma apresentação que prende atenção de stakeholders globais.",
  "As frases, transições e expressões que executivos internacionais realmente usam.",
  "Como abrir com impacto, desenvolver com clareza e fechar com chamada à ação.",
  "Como responder perguntas difíceis em inglês sem perder a compostura.",
  "Como adaptar a sua apresentação para diferentes culturas corporativas.",
  "Como usar a voz, o ritmo e as pausas para transmitir autoridade — mesmo que o inglês não seja perfeito.",
];

const SolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          A SOLUÇÃO
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          English Business:{" "}
          <span className="text-gradient-cyan">Apresentações Corporativas</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
          Um curso gravado, direto ao ponto, desenvolvido pela equipe da President Language com base em 30 anos de treinamento executivo em multinacionais.
        </p>

        <div className="bg-background border-gradient-cyan rounded-2xl p-8 md:p-10 text-left card-glow">
          <p className="font-heading font-bold text-foreground text-lg mb-6">
            Aqui você não vai aprender "como falar inglês". Você vai aprender:
          </p>
          <ul className="space-y-4">
            {learnings.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

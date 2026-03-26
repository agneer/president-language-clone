import { Check } from "lucide-react";

const learnings = [
  "Frameworks prontos para estruturar apresentações em inglês (board meeting, pitch, status update).",
  "As frases e expressões que transmitem confiança e liderança.",
  "Como abrir, conduzir e fechar uma apresentação sem depender de script.",
  "Técnicas para responder perguntas difíceis em inglês sem travar.",
  "Como adaptar tom e linguagem para diferentes audiências (diretoria, investidores, equipe global).",
];

const ProductV2 = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          APRESENTANDO O CURSO
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
          Business English para{" "}
          <span className="text-gradient-cyan">Apresentações Corporativas</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
          Um curso online direto ao ponto, criado para profissionais que já falam inglês e precisam de uma coisa: apresentar com autoridade.
        </p>

        <div className="bg-background border-gradient-cyan rounded-2xl p-8 md:p-10 text-left card-glow">
          <p className="font-heading font-bold text-foreground text-lg mb-6">
            O que você vai dominar:
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

export default ProductV2;

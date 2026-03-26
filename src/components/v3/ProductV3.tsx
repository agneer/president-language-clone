import { Check } from "lucide-react";

const learnings = [
  "Frameworks prontos para estruturar apresentações em inglês (board meeting, pitch, status update).",
  "As frases e expressões que transmitem confiança e liderança.",
  "Como abrir, conduzir e fechar uma apresentação sem depender de script.",
  "Técnicas para responder perguntas difíceis em inglês sem travar.",
  "Como adaptar tom e linguagem para diferentes audiências (diretoria, investidores, equipe global).",
];

const modules = [
  {
    number: "01",
    title: "Estrutura de Apresentações de Alto Impacto",
    description: "Frameworks prontos para board meetings, pitches e status updates. Você aprende a estruturar sua mensagem com clareza e impacto.",
  },
  {
    number: "02",
    title: "Vocabulário Estratégico de Negócios",
    description: "As frases e expressões que transmitem confiança e liderança — o vocabulário que não está no livro didático.",
  },
  {
    number: "03",
    title: "Fluência Sob Pressão",
    description: "Técnicas para manter a fluência mesmo quando o nervosismo aparece, responder perguntas difíceis e improvisar em inglês.",
  },
  {
    number: "04",
    title: "Adaptação de Tom e Audiência",
    description: "Como adaptar linguagem e postura para diferentes audiências: diretoria, investidores, equipe global.",
  },
];

const ProductV3 = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
            BUSINESS ENGLISH PARA APRESENTAÇÕES CORPORATIVAS
          </p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
            O método prático para apresentar com{" "}
            <span className="text-gradient-cyan">autoridade em inglês.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-3xl mx-auto">
            Um curso online direto ao ponto, criado para profissionais que já falam inglês e precisam dominar apresentações corporativas.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {modules.map((mod, i) => (
            <div key={i} className="bg-card border-gradient-cyan rounded-2xl p-8 card-glow">
              <div className="flex items-start gap-4">
                <span className="font-heading text-4xl font-bold text-primary/30">{mod.number}</span>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{mod.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mod.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What you'll master */}
        <div className="bg-card border-gradient-cyan rounded-2xl p-8 md:p-10 card-glow max-w-3xl mx-auto">
          <p className="font-heading font-bold text-foreground text-lg mb-6 text-center">
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

export default ProductV3;

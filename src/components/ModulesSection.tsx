const modules = [
  {
    number: "01",
    title: "Fundamentos da Apresentação Global",
    description: "Como pensar em inglês na hora de apresentar (sem traduzir do português). Estrutura narrativa usada por executivos em boardrooms internacionais. O framework de abertura que captura atenção nos primeiros 30 segundos.",
  },
  {
    number: "02",
    title: "Vocabulário e Expressões de Alto Impacto",
    description: "Banco de frases prontas para cada etapa da apresentação: abertura, transição, dados, conclusão e CTA. Expressões que transmitem autoridade vs. expressões que transmitem insegurança.",
  },
  {
    number: "03",
    title: "Storytelling Executivo em Inglês",
    description: "Como usar dados + narrativa para convencer (não apenas informar). Frameworks de storytelling aplicados a contextos corporativos. Técnicas de transição entre slides que mantêm o engajamento.",
  },
  {
    number: "04",
    title: "Presença e Voz: Comunicação Não-Verbal Internacional",
    description: "Ritmo, pausas e entonação: como soar confiante em inglês. Linguagem corporal que comunica autoridade em reuniões virtuais e presenciais. Inteligência cultural para públicos americanos, europeus e asiáticos.",
  },
  {
    number: "05",
    title: "Q&A: Dominando Perguntas e Respostas em Inglês",
    description: "Técnicas para ganhar tempo e estruturar respostas sob pressão. Como lidar com perguntas que você não sabe responder — sem perder credibilidade. Frases-chave para redirecionar e encerrar o Q&A com autoridade.",
  },
  {
    number: "06",
    title: "Simulações e Templates Prontos",
    description: "Templates de script para apresentações de resultados, propostas, pitches e updates de projeto. Exemplos gravados com análise de acertos e erros. Checklist pré-apresentação para cada reunião internacional.",
  },
];

const ModulesSection = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-heading font-bold text-sm tracking-widest text-center mb-4">
          O QUE VOCÊ VAI ENCONTRAR DENTRO DO CURSO
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-16">
          6 Módulos Direto ao Ponto
        </h2>

        <div className="space-y-6">
          {modules.map((mod) => (
            <div key={mod.number} className="flex gap-6 items-start bg-card border-gradient-cyan rounded-2xl p-6 md:p-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-primary">{mod.number}</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{mod.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{mod.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;

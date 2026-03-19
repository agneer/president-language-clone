const cycles = [
  {
    number: "01",
    title: "Ciclo 1: Mapeamento de Carreira + Planejamento Estratégico",
    subtitle: "Executive Career Mapping + PDI Internacional",
    description: "Você vai mapear onde está, onde pode chegar e o que está travando sua evolução, e a partir disso, desenhamos um plano de ação estratégico, com metas reais e posicionamento claro para o mercado global.",
  },
  {
    number: "02",
    title: "Ciclo 2: Comunicação de Negócios & Inteligência Cultural",
    subtitle: "Global Business English + Cultural Intelligence",
    description: "Você vai aprender como desenvolver inglês para negócios e entender como se mover com confiança entre culturas, comportamentos e contextos globais, sem travar, hesitar ou parecer amador.",
  },
  {
    number: "03",
    title: "Ciclo 3: Habilidades do Futuro & Networking Profissional",
    subtitle: "Future Skills + Global Business Networking",
    description: "Você vai ativar as habilidades do futuro que o mercado internacional mais valoriza e aprender a criar conexões estratégicas com headhunters, recrutadores e decisores.",
  },
  {
    number: "04",
    title: "Ciclo 4: Posicionamento Estratégico & Internacionalização",
    subtitle: "Global Professional Positioning & Global Market Access",
    description: "Você vai receber um plano de internacionalização claro, com metas e estratégias para conquistar oportunidades no mercado global, mesmo sem sair do Brasil.",
  },
];

const CurriculumSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-primary mb-4">
          PROGRAMA DE ACELERAÇÃO GLOBAL EXCHANGE™
        </h2>
        <p className="font-heading text-xl md:text-2xl font-bold text-center text-foreground mb-4">
          O método prático para sair do mercado local e se tornar uma autoridade global.
        </p>
        <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto">
          Mais do que aprender, você vai executar um plano de internacionalização, validado por quem já preparou mais de 10 mil profissionais e executivos.
        </p>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-sm">
          04 semanas de imersão e mentoria ao vivo no ZOOM + 01 ano de acesso exclusivo às aulas gravadas de Business English.
        </p>

        <div className="space-y-8">
          {cycles.map((cycle) => (
            <div key={cycle.number} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-primary">{cycle.number}</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{cycle.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{cycle.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{cycle.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#valor"
            className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            QUERO PARTICIPAR DO GLOBAL EXCHANGE
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;

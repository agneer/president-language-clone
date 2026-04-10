const modules = [
  {
    num: "01",
    tag: "Diagnóstico",
    title: "Executive Career Mapping",
    desc: "Análise SWOT completa da sua carreira + Perfil Comportamental. Mapeamento dos gaps que travam seu crescimento e criação do seu PDI — Plano de Desenvolvimento Internacional.",
    result: "Você para de contar com a sorte e passa a ter estratégia sobre sua carreira global.",
  },
  {
    num: "02",
    tag: "Posicionamento",
    title: "International Positioning",
    desc: "Reformulação do seu LinkedIn, construção da sua proposta de valor executiva e posicionamento como especialista de alto valor — não como mão de obra barata.",
    result: "Você deixa de competir por preço e passa a ser disputado por valor.",
  },
  {
    num: "03",
    tag: "Comunicação",
    title: "Global Business English",
    desc: "Business English aplicado: apresentações, reuniões, negociações de contratos, projetos e promoções. Não inglês perfeito — inglês funcional para negócios.",
    result: "Você se comunica com confiança em qualquer cenário corporativo.",
  },
  {
    num: "04",
    tag: "Inteligência Cultural",
    title: "Cultural Intelligence",
    desc: "Entenda como diferentes culturas se comunicam, tomam decisões e negociam. Americanos diretos, alemães precisos, asiáticos hierárquicos — domine essas diferenças.",
    result: "Você se torna um profissional verdadeiramente global.",
  },
  {
    num: "05",
    tag: "Habilidades do Futuro",
    title: "Future Skills",
    desc: "Pensamento crítico, adaptabilidade, liderança distribuída e comunicação multicultural — as competências que o mercado internacional está buscando agora.",
    result: "Você se torna indispensável, não substituível.",
  },
  {
    num: "06",
    tag: "Conexões",
    title: "Global Networking",
    desc: "Estratégia para se conectar com decisores em empresas globais + acesso a uma comunidade exclusiva de líderes e executivos no LinkedIn.",
    result: "Você para de competir com milhares e passa a ser indicado diretamente.",
  },
  {
    num: "07",
    tag: "Acesso ao Mercado",
    title: "Global Market Access",
    desc: "Mapeamento de mercados, rotas de acesso e network com heads que atuam globalmente. Posicionamento para multiplicar seus ganhos de 5 a 10x.",
    result: "Você aprende a se posicionar no mercado global e multiplicar seus ganhos.",
  },
];

const ModulesV4 = () => {
  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-3">
          Os 7 Módulos do{" "}
          <span className="text-gradient-cyan">Global Exchange 2.0</span>
        </h2>
        <p className="text-muted-foreground text-center text-base mb-14">
          Um sistema integrado — não apenas mais um curso de inglês.
        </p>

        <div className="space-y-0">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="grid grid-cols-[56px_1fr] gap-5 py-7 border-b border-primary/10 last:border-b-0"
            >
              <span className="font-heading text-2xl font-extrabold text-primary/50 text-right pt-1">
                {mod.num}
              </span>
              <div>
                <span className="inline-block text-xs tracking-widest uppercase text-primary border border-primary/25 rounded-full px-3 py-0.5 mb-2">
                  {mod.tag}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{mod.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{mod.desc}</p>
                <div className="bg-primary/5 border-l-2 border-primary/40 rounded-r-md px-4 py-2.5 text-sm text-primary">
                  → {mod.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesV4;

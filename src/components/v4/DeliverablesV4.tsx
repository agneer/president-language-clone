const items = [
  { text: "12 meses de acesso", desc: "às aulas na plataforma digital, no seu ritmo" },
  { text: "7 módulos completos", desc: "— do Mapeamento Executivo ao Acesso ao Mercado Global" },
  { text: "Aulas em inglês com legenda", desc: "— treine vocabulário executivo enquanto aprende estratégia" },
  { text: "Material de suporte em português", desc: "+ quiz ao final de cada módulo" },
  { text: "Grupo estratégico no LinkedIn", desc: "— comunidade de líderes, executivos e decisores globais" },
];

const DeliverablesV4 = () => {
  return (
    <section className="py-20 px-4 bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
          Tudo que você recebe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-5 border border-primary/10 flex items-start gap-4"
            >
              <span className="text-primary text-lg flex-shrink-0">✦</span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">{item.text}</strong> {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesV4;

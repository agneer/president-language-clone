const painCards = [
  {
    icon: "🔇",
    title: "Trava nas reuniões em inglês",
    desc: "Você tem o resultado, tem a competência técnica, mas quando a conversa muda para inglês, fica um passo atrás. A reunião segue, a negociação avança, e você assiste.",
  },
  {
    icon: "📚",
    title: "Já estudou inglês e não funcionou",
    desc: "Escola de idiomas, app, curso online. Você melhorou, mas na hora que mais importa, numa reunião real, numa negociação real, ainda não performa do jeito que precisa.",
  },
  {
    icon: "🎯",
    title: "Não sabe como acessar o mercado global",
    desc: "Você dispara currículos em sites de vagas, compete com milhares. Mas não tem estratégia de posicionamento, networking com decisores ou proposta de valor executiva.",
  },
];

const PainV4 = () => {
  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Você se reconhece em alguma dessas situações?
        </h2>
        <p className="text-muted-foreground text-base mb-12 max-w-xl mx-auto">
          Não é falta de competência. É falta de um sistema estratégico.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painCards.map((card, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 border border-primary/10 hover:border-primary/25 transition-colors text-left"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainV4;

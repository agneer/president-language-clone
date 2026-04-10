const objections = [
  {
    question: '"Já fiz inglês e não funcionou."',
    answer:
      "O Global Exchange não é um curso de inglês. É um sistema de desenvolvimento de carreira internacional que usa o inglês como ferramenta. Você não vai estudar inglês por estudar — vai aprender a usar o inglês para avançar na sua carreira. Isso é completamente diferente.",
  },
  {
    question: '"Não tenho tempo para mais um curso."',
    answer:
      "O programa foi feito para quem tem agenda de profissional — não de estudante. Aulas assíncronas: você assiste quando quiser. Encontros ao vivo pontuais. A estratégia de aprendizagem integra o curso na sua rotina, sem empurrar mais uma obrigação.",
  },
  {
    question: '"Meu inglês não está bom o suficiente."',
    answer:
      "O programa parte de onde você está. Aulas com legenda, material em português, e o módulo de Business English foi desenhado para quem ainda está desenvolvendo a língua. Você não precisa de inglês pronto para começar.",
  },
];

const ObjectionsV4 = () => {
  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
          Talvez você esteja pensando...
        </h2>

        <div className="space-y-6">
          {objections.map((obj, i) => (
            <div key={i} className="bg-card rounded-xl p-7 border border-primary/10">
              <p className="font-heading text-lg italic text-foreground mb-3">{obj.question}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{obj.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsV4;

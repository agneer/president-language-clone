import executiveImg from "@/assets/executive-thinking.jpg";

const objections = [
  {
    question: '"Já fiz inglês e não funcionou."',
    answer:
      "O Global Exchange não é um curso de inglês. É um sistema de desenvolvimento de carreira internacional que usa o inglês como ferramenta. Você não vai estudar inglês por estudar, vai aprender a usar o inglês para avançar na sua carreira. Isso é completamente diferente.",
  },
  {
    question: '"Não tenho tempo para mais um curso."',
    answer:
      "O programa foi feito para quem tem agenda de profissional, não de estudante. Aulas assíncronas: você assiste quando quiser. Encontros ao vivo pontuais. A estratégia de aprendizagem integra o curso na sua rotina, sem empurrar mais uma obrigação.",
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
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image left */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={executiveImg}
              alt="Executivo pensativo"
              loading="lazy"
              width={768}
              height={1024}
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Text right */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Talvez você esteja pensando...
            </h2>

            <div className="space-y-5">
              {objections.map((obj, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-primary/10">
                  <p className="font-heading text-lg italic text-foreground mb-2">{obj.question}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{obj.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsV4;

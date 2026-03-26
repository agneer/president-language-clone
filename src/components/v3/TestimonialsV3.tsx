const testimonials = [
  {
    name: "Ana Almeida",
    role: "VP | Estratégia & Transformação",
    text: "O trabalho com a President Language foi fundamental para o meu desenvolvimento profissional. Consegui fortalecer minhas competências para o mercado internacional, aprimorando minha comunicação e fluência.",
  },
  {
    name: "George Rubadel",
    role: "Palestrante Especialista em Comunicação",
    text: "Muito incrível o projeto e os profissionais envolvidos. Em especial a professora Luciane, tamanha competência e carisma. Tudo com o propósito de contribuir com a evolução profissional.",
  },
  {
    name: "Juliano Zimmer",
    role: "Gestão de Projetos | PMP®",
    text: "A Luciane tem uma grande didática e conhecimento de negócios, culturas, carreiras e inglês. A abordagem superou minhas expectativas, pois aprendemos muito através de dinâmicas que representam a realidade do mundo globalizado.",
  },
  {
    name: "Ana Celano",
    role: "Profa PhD FGV e IBMEC",
    text: "O atendimento personalizado oferecido na President Language é a melhor forma de aplicar metodologias diferenciadas com os alunos e o que garante excelente resultado.",
  },
];

const TestimonialsV3 = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          DEPOIMENTOS
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12">
          Veja o que profissionais e executivos estão falando
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border-gradient-cyan rounded-2xl p-6 text-left card-glow">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-primary text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-foreground font-heading font-bold text-lg">
          Você pode ser o próximo!
        </p>
      </div>
    </section>
  );
};

export default TestimonialsV3;

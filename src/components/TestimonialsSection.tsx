const testimonials = [
  {
    name: "Emerson",
    role: "Head de Marketing",
    text: "As interações e mentoria simulavam as minhas atividades no dia a dia. Eu tinha real certeza e simulação do que ia encontrar no cotidiano profissional.",
  },
  {
    name: "Ana Almeida",
    role: "Executiva do Grupo SMS",
    text: "Já tinha inglês avançado e trabalhava com projetos internacionais. Recebeu um convite para expatriação. Resultado: melhor posicionamento estratégico na nova função e melhor adaptabilidade cultural.",
  },
  {
    name: "Prof. Dr. Fisher Stephen",
    role: "Especialista em Econofísica",
    text: "Desenvolveu a internacionalização da sua carreira com comunicação efetiva e posicionamento estratégico. Hoje atua em projetos internacionais de grande peso e palestra em universidades do mundo todo.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-heading font-bold text-sm tracking-widest text-center mb-4">
          QUEM JÁ APLICOU ESSE MÉTODO
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Resultados Reais de Profissionais Reais
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border-gradient-cyan rounded-2xl p-6 flex flex-col card-glow">
              <p className="text-foreground text-sm leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </p>
              <div>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary font-heading font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

const testimonials = [
  {
    name: "Ana Almeida",
    role: "VP | Estratégia & Transformação | Head de RH, Cultura e Pessoas | Comunicação e Marketing | ESG | M&A | Turnaround",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
    text: "O trabalho com a President Language foi fundamental para o meu desenvolvimento profissional. Através das orientações, consegui fortalecer minhas competências para o mercado internacional, aprimorando minha comunicação e fluência no idioma. Também aprendi a adaptar minha forma de me comunicar a diferentes culturas, o que tornou minhas interações mais claras e assertivas. Além disso, o suporte recebido me deu segurança e direcionamento para me posicionar de maneira mais estratégica e conduzir apresentações com maior eficácia.",
  },
  {
    name: "Nelito Andrade",
    role: "Inteligência de Mercado | Planejamento | S&OP e S&OE | Big Data | IBP | I.A. | Supply Chain | Sell in Sell out | Gestão de Equipes | Customer Service | Analytics | Machine Learning | Python | VBA | Green Belt | Power BI",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    text: "Gosto muito da abordagem da escola com uso do inglês focado a negócios, independente do ramo de atuação do aluno. Eles sempre preparam aulas para a realidade profissional do aluno. Fora isso, também me fascina as reflexões que as aulas trazem em relação às novas tecnologias e comportamentos da sociedade.",
  },
  {
    name: "Juliano Zimmer",
    role: "Gestão de Projetos | PMP® | Especialista em Melhoria Contínua | Excelência Operacional | Operações | Qualidade",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces",
    text: "Excelente serviço: muita competência técnica aliada à simpatia, cordialidade e didática. A Luciane tem uma grande didática e conhecimento de negócios, culturas, carreiras e inglês. Tive inúmeras experiências com ensino de inglês anteriormente e a abordagem dela superou minhas expectativas, pois aprendemos muito através de dinâmicas que representam muito bem a realidade do mundo conectado, globalizado e multicultural de hoje. Parabéns pelo trabalho! Recomendo muito!",
  },
  {
    name: "George Rubadel",
    role: "Palestrante Especialista em Comunicação | Vendas e Persuasão",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    text: "Muito incrível o projeto e os profissionais envolvidos. Em especial a professora Luciane, tamanha competência e carisma. Tudo com o intuito e o propósito de contribuir com a evolução profissional de pessoas que buscam alçar voos internacionais!",
  },
  {
    name: "Ana Celano",
    role: "Profa PhD FGV e IBMEC. Diretora Executiva – Franco Celano Comunicação",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
    text: "O atendimento personalizado oferecido na President Language é a melhor forma de aplicar metodologias diferenciadas com os alunos e o que garante excelente resultado. Posso afirmar que no meu caso os objetivos estão sendo ultrapassados a cada dia e já consigo sentir um expressivo progresso em meu desenvolvimento.",
  },
  {
    name: "Fernando Coradi",
    role: "Vice President EHS/Facilities & Construction Equipment Division Operations – Komatsu Brasil",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
    text: "Todo suporte técnico que recebi da President Language em minhas mentorias de carreira, Business English e internacionalização, foi de importância fundamental ao meu crescimento profissional e ao desenvolvimento de minhas atividades nas operações, projetos e negócios globais.",
  },
];

const WrittenTestimonialsV4 = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card/40 border-gradient-cyan rounded-2xl p-8 flex flex-col items-center text-center card-glow relative overflow-hidden"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/40 mb-5 flex-shrink-0">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-3">
                {t.name}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-5">
                {t.role}
              </p>
              <div className="w-full h-px bg-border/50 mb-5" />
              <p className="text-foreground/80 text-sm leading-relaxed text-justify">
                {t.text}
              </p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WrittenTestimonialsV4;

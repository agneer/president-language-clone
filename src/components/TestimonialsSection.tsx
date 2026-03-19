import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ana Almeida",
    role: "VP | Estratégia & Transformação | Head de RH, Cultura e Pessoas",
    text: "O trabalho com a President Language foi fundamental para o meu desenvolvimento profissional. Através das orientações, consegui fortalecer minhas competências para o mercado internacional, aprimorando minha comunicação e fluência no idioma.",
  },
  {
    name: "George Rubadel",
    role: "Palestrante Especialista em Comunicação | Vendas e Persuasão",
    text: "Muito incrível o projeto e os profissionais envolvidos. Em especial a professora Luciane, tamanha competência e carisma. Tudo com o intuito e o propósito de contribuir com a evolução profissional de pessoas que buscam alçar voos internacionais!",
  },
  {
    name: "Nelito Andrade",
    role: "Inteligência de Mercado | Planejamento | S&OP e S&OE | Big Data",
    text: "Gosto muito da abordagem da escola com uso do inglês focado a negócios, independente do ramo de atuação do aluno. Eles sempre preparam aulas para a realidade profissional do aluno.",
  },
  {
    name: "Ana Celano",
    role: "Profa PhD FGV e IBMEC | Diretora Executiva",
    text: "O atendimento personalizado oferecido na President Language é a melhor forma de aplicar metodologias diferenciadas com os alunos e o que garante excelente resultado.",
  },
  {
    name: "Juliano Zimmer",
    role: "Gestão de Projetos | PMP® | Especialista em Melhoria Contínua",
    text: "Excelente serviço: muita competência técnica aliada à simpatia, cordialidade e didática. A Luciane tem uma grande didática e conhecimento de negócios, culturas, carreiras e inglês.",
  },
  {
    name: "Fernando Coradi",
    role: "Vice President EHS/Facilities & Construction – Komatsu Brasil",
    text: "Sem dúvida o suporte técnico que recebi da President Language foi de importância fundamental ao meu crescimento profissional e ao correto desenvolvimento de minhas atividades.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 1;
  const total = testimonials.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Veja o que os profissionais e executivos estão falando sobre o nosso programa
        </h2>

        <div className="relative">
          <div className="bg-card border-gradient-cyan rounded-2xl p-8 md:p-12 min-h-[250px] flex flex-col justify-between">
            <div>
              <p className="text-foreground text-lg leading-relaxed italic mb-8">
                "{testimonials[current].text}"
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-primary font-heading font-bold text-lg">
                  {testimonials[current].name.charAt(0)}
                </span>
              </div>
              <p className="font-heading font-bold text-foreground">{testimonials[current].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="font-heading text-xl font-bold text-primary mb-4">Você pode ser o próximo!</p>
          <a
            href="#valor"
            className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            QUERO APLICAR PARA O PROGRAMA
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

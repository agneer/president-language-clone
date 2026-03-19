import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como serão as mentorias realizadas no programa?",
    answer: "As mentorias serão realizadas em português com algumas interações em inglês. O maior objetivo deste projeto inicial é estruturar sua carreira, trabalhar seu posicionamento e lhe entregar um plano estratégico de internacionalização.",
  },
  {
    question: "Quais são os dias e horários disponíveis para as turmas?",
    answer: "Às segundas, das 19h às 21h e aos sábados, das 10h às 12h e das 14h às 16h, ao vivo no ZOOM.",
  },
  {
    question: "E se eu não conseguir acompanhar ou aplicar tudo?",
    answer: "Você terá acesso a 4 semanas de mentoria + 12 meses de aulas gravadas de Business English e ao grupo de networking no LinkedIn para acelerar a sua preparação para o mercado internacional.",
  },
  {
    question: "Qual será o meu resultado ao participar do programa?",
    answer: "Você terá clareza sobre sua carreira, seu posicionamento no mercado e o passo a passo para expandir suas operações, projetos e negócios no mercado internacional.",
  },
  {
    question: "Esse programa é online ou presencial?",
    answer: "A estrutura é híbrida, com mentoria ao vivo no ZOOM, aulas gravadas na plataforma digital e condição especial para participar de uma imersão presencial.",
  },
  {
    question: "Como funciona o suporte do programa?",
    answer: "Você terá acesso ao WhatsApp exclusivo do programa para tirar as suas dúvidas e suporte exclusivo no e-mail: suporte@presidentlanguage.com",
  },
  {
    question: "Como posso pagar? Posso parcelar?",
    answer: "Você pode realizar o pagamento à vista no Pix ou em 12x no cartão de crédito pela Hotmart.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Ainda com dúvidas?{" "}
          <span className="text-primary">As respostas abaixo podem te ajudar!</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background border-gradient-cyan rounded-xl px-6 border-b-0"
            >
              <AccordionTrigger className="font-heading font-semibold text-foreground text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

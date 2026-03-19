import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter inglês fluente para fazer o curso?",
    answer: "Não. O curso foi desenhado para profissionais com inglês intermediário ou avançado. Você não precisa ser fluente — precisa ter uma base funcional. O curso vai te ensinar a usar o que você já sabe com muito mais impacto.",
  },
  {
    question: "O curso é ao vivo ou gravado?",
    answer: "100% gravado. Você acessa no seu ritmo, revisa quantas vezes quiser e aplica os templates antes da sua próxima apresentação.",
  },
  {
    question: "Quanto tempo de acesso eu tenho?",
    answer: "Acesso vitalício. Uma vez dentro, o conteúdo é seu para sempre.",
  },
  {
    question: "Esse curso substitui um curso de inglês?",
    answer: "Não — e nem é essa a proposta. Cursos de inglês ensinam o idioma. Este curso ensina comunicação estratégica para apresentações em contextos corporativos internacionais. É um complemento poderoso, não um substituto.",
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Se não fizer sentido, devolvemos 100% do valor. Sem burocracia.",
  },
  {
    question: "Serve para a minha área de atuação?",
    answer: "Se na sua área você precisa apresentar projetos, resultados, propostas ou updates para stakeholders internacionais — sim. O método é aplicável a qualquer setor: finanças, marketing, TI, engenharia, consultoria, RH, vendas e gestão.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-3xl mx-auto">
        <p className="text-primary font-heading font-bold text-sm tracking-widest text-center mb-4">
          PERGUNTAS FREQUENTES
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Tire suas dúvidas
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border-gradient-cyan rounded-xl px-6 border-b-0"
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

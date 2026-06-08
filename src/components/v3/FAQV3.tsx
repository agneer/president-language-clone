import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O curso é para quem tem qual nível de inglês?",
    a: "Para profissionais com nível intermediário ou avançado que já se comunicam em inglês, mas precisam de segurança e método para apresentações corporativas.",
  },
  {
    q: "Quanto tempo tenho de acesso?",
    a: "Acesso imediato a todo o conteúdo do curso pelo período de 12 meses, incluindo atualizações disponibilizadas durante esse prazo.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 7 dias de garantia incondicional. Acesse, assista e decida. Se não gostar, 100% de reembolso, sem perguntas.",
  },
  {
    q: "As aulas são ao vivo ou gravadas?",
    a: "As aulas são gravadas e organizadas em módulos. Você assiste no seu ritmo, quantas vezes quiser.",
  },
  {
    q: "Como posso pagar? Posso parcelar?",
    a: "Você pode pagar à vista via Pix ou em até 12x no cartão de crédito pela Hotmart.",
  },
];

const FAQV3 = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
            DÚVIDAS FREQUENTES
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Ainda com dúvidas? As respostas abaixo podem te ajudar!
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border-gradient-cyan rounded-xl px-6"
            >
              <AccordionTrigger className="font-heading font-semibold text-foreground text-sm hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQV3;

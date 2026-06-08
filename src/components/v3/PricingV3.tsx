import { Shield } from "lucide-react";

const items = [
  { label: "Curso Business English para Apresentações Corporativas", value: "R$ 497" },
  { label: "Bônus: O Modelo de Persuasão de Harvard (com Ana Paula de Castro Almeida)", value: "R$ 197" },
  { label: "Bônus: O Framework Pyramid McKinsey (com Dr. Ana Cristina Albricker)", value: "R$ 197" },
];

const PricingV3 = () => {
  return (
    <section id="oferta" className="py-20 px-4 bg-secondary bg-gradient-radial-cyan">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          SEM ESPERA E SEM DESCULPA
        </p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
          Quanto vale se posicionar com confiança na próxima apresentação internacional?
        </h2>
        <p className="text-muted-foreground text-base mb-4 max-w-2xl mx-auto">
          Uma promoção perdida por não se destacar em inglês custa muito mais do que qualquer investimento em desenvolvimento profissional.
        </p>
        <p className="text-foreground font-heading font-bold text-base mb-10 max-w-2xl mx-auto">
          Esse curso está disponível AGORA! E você está a um passo de transformar suas apresentações.
        </p>

        {/* Price card */}
        <div className="bg-card border-gradient-cyan rounded-2xl p-8 md:p-10 card-glow mb-8">
          <div className="space-y-4 mb-6">
            {items.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-border pb-3 last:border-b-0 last:pb-0">
                <span className="text-foreground text-left">{item.label}</span>
                <span className="text-muted-foreground line-through ml-4 whitespace-nowrap">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm mb-1">Total: <span className="line-through">R$ 891</span></p>
            <p className="text-muted-foreground text-sm mb-2">Você paga hoje:</p>
            <p className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-1">
              R$ 197
            </p>
            <p className="text-muted-foreground mb-8">ou 12x de R$ 19,66 no cartão</p>

            <a
              href="https://pay.hotmart.com/W104873972T"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-md bg-primary text-primary-foreground font-heading font-bold text-base tracking-wider px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              QUERO TUDO ISSO POR R$ 197 →
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="font-heading font-bold text-foreground text-sm">Garantia Incondicional de 7 Dias</p>
              <p className="text-xs">Acesse, assista e decida. Se não gostar, 100% de reembolso. Sem perguntas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingV3;

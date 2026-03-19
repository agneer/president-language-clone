import { Shield } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="valor" className="py-20 px-4 bg-background bg-gradient-radial-cyan">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          SEM ESPERA E SEM DESCULPA
        </h2>
        <p className="text-muted-foreground text-lg mb-4">
          Você pode até continuar adiando…
        </p>
        <p className="text-foreground text-base mb-4 max-w-2xl mx-auto">
          Mas enquanto você demora a tomar atitude, outros profissionais estão conquistando as melhores oportunidades, sendo promovidos e ocupando as posições mais desejadas e bem pagas do mercado.
        </p>
        <p className="font-heading text-xl font-bold text-primary mb-10">
          Esse programa está disponível AGORA! E você está a um passo de transformar sua carreira.
        </p>

        <div className="bg-card border-gradient-cyan rounded-2xl p-10 card-glow">
          <p className="text-muted-foreground text-sm mb-2">Investimento</p>
          <p className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
            12x R$ 548,92
          </p>
          <p className="text-muted-foreground mb-8">ou R$ 5.500,00 à vista</p>

          <a
            href="https://pay.hotmart.com/T96070806I"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-md bg-primary text-primary-foreground font-heading font-bold text-base tracking-wider px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            QUERO GARANTIR MINHA VAGA
          </a>

          <div className="flex items-center justify-center gap-3 mt-8 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="font-heading font-bold text-foreground text-sm">Garantia Incondicional</p>
              <p className="text-xs">Teste por 7 dias. Se não se adaptar, reembolso total.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

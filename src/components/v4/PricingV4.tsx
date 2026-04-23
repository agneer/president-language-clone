import { Shield } from "lucide-react";

const valorItems = [
  "7 módulos estratégicos completos",
  "12 meses de acesso à plataforma",
  "Aulas em inglês com legenda + suporte em português",
  "Comunidade exclusiva de líderes no LinkedIn",
  "Quiz de fixação ao final de cada módulo",
];

const PricingV4 = () => {
  return (
    <section id="oferta" className="py-24 px-4 bg-background bg-gradient-radial-cyan relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-8">
          Faça o acordo mais importante<br />da sua carreira
        </h2>

        {/* Value stack */}
        <div className="max-w-md mx-auto mb-10 text-left">
          <p className="text-primary text-xs tracking-widest uppercase text-center font-medium mb-4">
            Tudo isso por um único investimento:
          </p>
          <div className="space-y-3">
            {valorItems.map((item, i) => (
              <div
                key={i}
                className="bg-primary/5 border-l-2 border-primary/40 rounded-r-lg px-5 py-3 text-foreground text-sm"
              >
                ✦ {item}
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <p className="text-muted-foreground line-through text-base mb-1">De R$ 1.497</p>
        <p className="font-heading text-5xl md:text-7xl font-extrabold text-foreground mb-1">
          <span className="text-3xl align-super">R$</span> 597
        </p>
        <p className="text-muted-foreground text-base mb-10">
          ou <strong className="text-foreground">12x de R$ 59,58</strong> no cartão
        </p>

        {/* CTA */}
        <a
          href="https://pay.hotmart.com/Y103856439F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-heading font-bold text-base tracking-wider px-12 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          GARANTIR MINHA VAGA AGORA
        </a>
        <p className="text-muted-foreground text-sm mt-3 opacity-70">
          Pagamento seguro via Hotmart · Acesso imediato após confirmação
        </p>

        {/* Guarantee */}
        <div className="max-w-lg mx-auto mt-10 bg-card border border-primary/15 rounded-xl p-6 flex items-center gap-5 text-left">
          <Shield className="w-10 h-10 text-primary flex-shrink-0" />
          <div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Garantia incondicional de 7 dias.</strong> Se dentro de 7 dias você sentir que o programa não é para você, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>

        {/* Urgency */}
        <div className="max-w-lg mx-auto mt-8 bg-destructive/5 border border-destructive/20 rounded-xl p-6 text-center">
          <h3 className="font-heading text-lg font-bold text-destructive mb-2">
            Essa condição é por tempo limitado
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Quando o próximo grupo fechar, o valor volta ao preço original. E o bônus de 2h com a Luciane tem vagas contadas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingV4;

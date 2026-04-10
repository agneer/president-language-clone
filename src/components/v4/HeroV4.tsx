import plLogo from "@/assets/pl-logo-white.png";

const HeroV4 = () => {
  return (
    <section className="relative pt-12 md:pt-16 pb-24 md:pb-32 px-4 bg-background bg-gradient-radial-cyan overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src={plLogo} alt="President Language" className="h-16 w-auto" />
        </div>


        {/* Headline */}
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground mb-7 max-w-3xl mx-auto">
          Você tem a competência. Tem o resultado. Mas quando a conversa muda para inglês,{" "}
          <span className="text-gradient-cyan">a OPORTUNIDADE vai embora.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          O Treinamento de 7 módulos que integra estratégia de carreira, Business English e posicionamento global para profissionais que querem parar de travar no inglês e começar a competir no mercado internacional.
        </p>

        {/* Video placeholder */}
        <div className="max-w-2xl mx-auto mb-12 rounded-xl overflow-hidden border border-primary/15 shadow-2xl shadow-primary/10 aspect-video bg-card flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-primary-foreground ml-1">
              <polygon points="8,5 19,12 8,19" />
            </svg>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://pay.hotmart.com/SEU_LINK_AQUI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          QUERO MINHA VAGA NO GLOBAL EXCHANGE 2.0
        </a>
        <p className="text-muted-foreground text-sm mt-3 opacity-70">
          Acesso imediato · 12 meses de plataforma · Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default HeroV4;

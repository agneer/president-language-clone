import { useEffect } from "react";
import plLogo from "@/assets/pl-logo-white.png";

const VTurbPlayer = () => {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://scripts.converteai.net/bbee80a6-c1cc-4ac7-aaba-6b87c23cdb21/players/6a26c1c6c1bee70a991d2f7a/v4/player.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/bbee80a6-c1cc-4ac7-aaba-6b87c23cdb21/players/6a26c1c6c1bee70a991d2f7a/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Não removemos o script para evitar problemas de re-hidratação
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto mb-12 rounded-xl overflow-hidden border border-primary/15 shadow-2xl shadow-primary/10">
      <vturb-smartplayer
        id="vid-6a26c1c6c1bee70a991d2f7a"
        style={{ display: "block", margin: "0 auto", width: "100%" }}
      />
    </div>
  );
};

const HeroV4 = () => {
  return (
    <section className="relative pt-12 md:pt-16 pb-24 md:pb-32 px-4 bg-background bg-gradient-radial-cyan overflow-hidden">
      {/* Ambient particles / light dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-primary/50 rounded-full shadow-[0_0_6px_2px_hsl(192_100%_45%/0.4)]" />
        <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-primary/40 rounded-full shadow-[0_0_8px_3px_hsl(192_100%_45%/0.3)]" />
        <div className="absolute top-[10%] right-[35%] w-0.5 h-0.5 bg-primary/60 rounded-full shadow-[0_0_4px_1px_hsl(192_100%_45%/0.5)]" />
        <div className="absolute top-[40%] left-[25%] w-1 h-1 bg-primary/30 rounded-full shadow-[0_0_6px_2px_hsl(192_100%_45%/0.25)]" />
        <div className="absolute top-[55%] right-[10%] w-0.5 h-0.5 bg-primary/40 rounded-full shadow-[0_0_4px_1px_hsl(192_100%_45%/0.35)]" />
        <div className="absolute top-[65%] left-[8%] w-1 h-1 bg-primary/25 rounded-full shadow-[0_0_6px_2px_hsl(192_100%_45%/0.2)]" />
        <div className="absolute top-[30%] left-[50%] w-0.5 h-0.5 bg-primary/35 rounded-full shadow-[0_0_4px_1px_hsl(192_100%_45%/0.3)]" />
        <div className="absolute top-[75%] right-[30%] w-1 h-1 bg-primary/30 rounded-full shadow-[0_0_6px_2px_hsl(192_100%_45%/0.2)]" />
        <div className="absolute top-[20%] left-[70%] w-1.5 h-1.5 bg-primary/20 rounded-full shadow-[0_0_8px_3px_hsl(192_100%_45%/0.15)]" />
        <div className="absolute top-[50%] left-[45%] w-0.5 h-0.5 bg-primary/45 rounded-full shadow-[0_0_4px_1px_hsl(192_100%_45%/0.4)]" />
        {/* Subtle horizontal light streaks */}
        <div className="absolute top-[20%] left-[5%] w-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-[45%] right-[5%] w-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute top-[70%] left-[15%] w-20 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={plLogo} alt="President Language" className="h-16 w-auto" />
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="border border-primary/40 rounded-full px-6 py-2">
            <span className="font-heading text-foreground text-xs tracking-[0.25em] font-semibold">
              GET READY FOR THE GLOBAL MARKET!
            </span>
          </div>
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

        {/* VTurb SmartPlayer */}
        <VTurbPlayer />

        {/* CTA */}
        <a
          href="https://pay.hotmart.com/Y103856439F"
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

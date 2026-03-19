import { AlertCircle } from "lucide-react";

const painPoints = [
  "Você traduz mentalmente do português — e o ritmo da apresentação quebra.",
  "Usa palavras genéricas porque não confia no vocabulário executivo em inglês.",
  "Lê os slides em vez de apresentar com presença e autoridade.",
  "Sente que seu inglês é \"bom o suficiente para sobreviver\", mas não para impressionar.",
  "Perde o controle quando alguém faz uma pergunta inesperada em inglês.",
  "Termina a apresentação sem saber se convenceu alguém — ou se só preencheu tempo.",
];

const PainSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          ISSO SOA FAMILIAR?
        </p>
        <p className="text-foreground text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Você está na reunião. O slide está pronto. Você sabe o conteúdo de cor. Mas quando a câmera liga e a audiência é internacional... <span className="text-primary font-semibold">algo trava.</span>
        </p>

        <div className="grid md:grid-cols-2 gap-4 text-left mb-12">
          {painPoints.map((point, i) => (
            <div key={i} className="bg-background rounded-xl p-5 border-gradient-cyan flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground text-sm">{point}</span>
            </div>
          ))}
        </div>

        <p className="text-foreground text-base max-w-3xl mx-auto leading-relaxed">
          Se você se identificou com pelo menos dois desses pontos, esse curso foi desenhado para você. E o mais importante: <span className="text-primary font-semibold">não é um problema de inglês. É um problema de comunicação estratégica</span> — e é isso que vamos resolver.
        </p>
      </div>
    </section>
  );
};

export default PainSection;

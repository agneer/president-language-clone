import { X, Check } from "lucide-react";

const topStats = [
  {
    value: "+53%",
    desc: "de crescimento na contratação de brasileiros por empresas estrangeiras em um único ano",
    source: "RELATÓRIO DEEL 2025",
  },
  {
    value: "5º",
    desc: "lugar no ranking mundial — o Brasil é o 5º país mais contratado internacionalmente",
    source: "RELATÓRIO DEEL / EXAME",
  },
  {
    value: "+220%",
    desc: "é quanto brasileiros em empresas do exterior ganham a mais que em empresas nacionais",
    source: "PESQUISA TECHFX / TECMUNDO",
  },
];

const dataPoints = [
  {
    icon: "💰",
    text: (
      <>
        <strong className="text-primary">Salário médio de US$ 110 mil/ano</strong> para brasileiros contratados por empresas americanas — cerca de R$ 598 mil por ano
      </>
    ),
  },
  {
    icon: "🌍",
    text: (
      <>
        <strong className="text-primary">1 em cada 4 brasileiros</strong> quer trabalhar para o exterior — mas apenas quem tem estratégia e posicionamento conquista as vagas
      </>
    ),
  },
  {
    icon: "💬",
    text: (
      <>
        <strong className="text-primary">Fluentes em inglês ganham até 160% a mais</strong> do que profissionais com nível intermediário nas mesmas funções internacionais
      </>
    ),
  },
  {
    icon: "🚀",
    text: (
      <>
        <strong className="text-primary">+491% de aumento</strong> nas contratações internacionais de profissionais brasileiros entre 2020 e 2023 — e a curva só acelera
      </>
    ),
  },
];

const leftItems = [
  "Estuda inglês genérico há anos — e ainda trava em reuniões reais",
  "Currículo traduzido — mas sem posicionamento de valor",
  "Dispara candidaturas em massa em sites de vagas",
  "Não entende diferenças culturais — perde negociações sem saber por quê",
  "Espera estar \"pronto\" para se posicionar",
  "Compete por preço com milhares de candidatos",
  "Depende de sorte para ser notado por recrutadores",
];

const rightItems = [
  "Domina Business English aplicado — apresenta, negocia e influencia com confiança",
  "Tem proposta de valor executiva e LinkedIn posicionado como especialista",
  "Conecta-se diretamente com decisores em empresas globais",
  "Tem inteligência cultural — adapta comunicação, liderança e decisão ao contexto",
  "Age com estratégia e PDI claro antes de \"estar pronto\"",
  "É disputado por valor — não compete por preço",
  "Tem rede estratégica que gera indicações diretas",
];

const MarketV4 = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block border border-primary/40 text-primary font-heading font-bold text-xs tracking-widest px-5 py-2 rounded-full mb-8">
          OS NÚMEROS NÃO MENTEM
        </span>

        {/* Headline */}
        <p className="font-heading text-xl md:text-2xl italic text-muted-foreground mb-2">
          Enquanto você espera estar pronto,
        </p>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase tracking-wide mb-6">
          O mercado<br />não espera
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          A contratação de brasileiros por empresas internacionais explodiu.<br />
          Os dados mostram: quem se posiciona agora, colhe primeiro.
        </p>

        {/* 3 stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {topStats.map((stat, i) => (
            <div key={i} className="bg-card border border-primary/15 rounded-xl p-8 text-center">
              <p className="font-heading font-bold text-primary text-3xl md:text-4xl mb-3">{stat.value}</p>
              <p className="text-muted-foreground text-sm mb-4">{stat.desc}</p>
              <p className="text-muted-foreground/60 text-xs tracking-wider uppercase">{stat.source}</p>
            </div>
          ))}
        </div>

        {/* Data points */}
        <div className="space-y-4 max-w-3xl mx-auto mb-12">
          {dataPoints.map((dp, i) => (
            <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 text-left">
              <span className="text-2xl mt-0.5">{dp.icon}</span>
              <p className="text-muted-foreground text-sm leading-relaxed">{dp.text}</p>
            </div>
          ))}
        </div>

        <p className="text-foreground text-lg max-w-2xl mx-auto mb-20">
          O mercado internacional não está apenas observando os brasileiros —{" "}
          <strong>está contratando</strong>.<br />
          A única pergunta é: você vai estar posicionado quando a próxima oportunidade aparecer?
        </p>

        {/* Comparison section */}
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
          O que separa quem <span className="text-primary italic">fica para trás</span>
          <br />de quem <span className="text-primary italic">compete globalmente</span>
        </h2>
        <p className="text-muted-foreground mb-12">A diferença não é talento. É sistema.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Left - Profissional Comum */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <span className="inline-block bg-muted text-muted-foreground font-heading font-bold text-xs tracking-widest px-5 py-2 rounded-full mb-6">
              PROFISSIONAL COMUM
            </span>
            <ul className="space-y-5 text-left">
              {leftItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Profissional Global */}
          <div className="bg-card rounded-2xl p-8 border-gradient-cyan card-glow">
            <span className="inline-block bg-primary/10 text-primary font-heading font-bold text-xs tracking-widest px-5 py-2 rounded-full mb-6">
              PROFISSIONAL GLOBAL
            </span>
            <ul className="space-y-5 text-left">
              {rightItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-foreground text-lg max-w-3xl mx-auto">
          O Global Exchange 2.0 foi criado para levar você da <strong>coluna da esquerda</strong> para a{" "}
          <strong>coluna da direita</strong> — com método, não com sorte.
        </p>
      </div>
    </section>
  );
};

export default MarketV4;

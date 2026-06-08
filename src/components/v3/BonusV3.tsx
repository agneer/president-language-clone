import { Gift } from "lucide-react";

const bonuses = [
  {
    title: "Ana Paula de Castro Almeida",
    subtitle: "Aula bônus",
    value: "R$ 197",
    description:
      "HR Director | Head of People and Culture | Organizational Strategy & Transformation | M&A, Business Agility, and Global Leadership. Na aula bônus, Ana Almeida compartilhou sua experiência executiva utilizando o modelo de persuasão de Harvard nas apresentações de projetos para o board.",
  },
  {
    title: "Dr. Ana Cristina Albricker, M.Sc.",
    subtitle: "Aula bônus",
    value: "R$ 197",
    description:
      "Cardiologist & Medical School Coordinator at UniBH | Professor of Medicine | Clinical Researcher. Na aula bônus, Ana Cristina compartilhou o modelo Pyramid McKinsey de apresentações que utiliza para o board.",
  },
];

const BonusV3 = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          BÔNUS EXCLUSIVOS
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12">
          Para quem se inscrever agora
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((bonus, i) => (
            <div key={i} className="bg-card border-gradient-cyan rounded-2xl p-8 card-glow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Gift className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">Bônus #{i + 1}</p>
                  <p className="text-muted-foreground text-xs">{bonus.subtitle}</p>
                </div>
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-3">{bonus.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{bonus.description}</p>
              <p className="text-primary font-heading font-bold text-sm">Valor: {bonus.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusV3;

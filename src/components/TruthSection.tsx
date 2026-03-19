import { X, Check } from "lucide-react";

const wrongWay = [
  "Traduzir slides mentalmente",
  "Usar frases genéricas e inseguras",
  "Depender de leitura do slide",
  "Soar como \"mais um brasileiro\"",
  "Torcer para não ter perguntas",
];

const rightWay = [
  "Estruturar a narrativa estrategicamente",
  "Usar expressões de alto executivo",
  "Comandar a sala com presença",
  "Soar como um líder global",
  "Conduzir Q&A com confiança",
];

const TruthSection = () => {
  return (
    <section className="py-20 px-4 bg-background bg-grid-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
            A VERDADE QUE NINGUÉM TE CONTA
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Seu inglês não é o problema.{" "}
            <span className="text-gradient-cyan">Seu método de apresentar é.</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Nos últimos 30 anos, preparamos mais de 10.000 profissionais executivos. Profissionais brasileiros com inglês intermediário e avançado continuam soando inseguros — não porque falta vocabulário, mas porque ninguém ensinou a eles COMO apresentar em inglês de negócios.
          </p>
        </div>

        <p className="font-heading text-lg font-bold text-center text-foreground mb-8">
          Existe uma diferença brutal entre:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Wrong way */}
          <div className="bg-card rounded-2xl p-8 border border-destructive/20">
            <h3 className="font-heading text-lg font-bold text-destructive mb-6">
              Falar inglês numa apresentação
            </h3>
            <ul className="space-y-4">
              {wrongWay.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right way */}
          <div className="bg-card rounded-2xl p-8 border-gradient-cyan card-glow">
            <h3 className="font-heading text-lg font-bold text-primary mb-6">
              Apresentar com impacto em inglês
            </h3>
            <ul className="space-y-4">
              {rightWay.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-foreground font-heading font-bold text-lg mt-12 max-w-3xl mx-auto">
          Cursos tradicionais de inglês te ensinam gramática. Nós te ensinamos a{" "}
          <span className="text-primary">comandar uma sala de executivos internacionais</span> — em inglês.
        </p>
      </div>
    </section>
  );
};

export default TruthSection;

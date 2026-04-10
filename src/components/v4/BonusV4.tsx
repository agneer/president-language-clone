const BonusV4 = () => {
  return (
    <section className="py-20 px-4 bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-destructive/20 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-destructive/5 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-block px-5 py-1.5 bg-destructive text-foreground text-xs font-bold tracking-widest uppercase rounded-full mb-6 animate-pulse">
            APENAS 10 VAGAS
          </span>

          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-8 leading-tight">
            Os 10 primeiros ganham algo que{" "}
            <span className="text-gradient-cyan">nenhum curso oferece.</span>
          </h2>

          <div className="bg-background/50 rounded-xl p-6 border border-primary/10 mb-6 flex gap-5 items-start">
            <span className="text-3xl flex-shrink-0">🎯</span>
            <div>
              <h3 className="font-heading text-base font-semibold text-primary mb-2">
                2 horas ao vivo e individual com Luciane Santos
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Diagnóstico personalizado da sua carreira + seu mapa real de internacionalização construído na hora, com quem já posicionou mais de 10.000 profissionais no mercado global.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-destructive/5 rounded-lg p-4 border border-destructive/10">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse flex-shrink-0" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Consultoria individual exige presença real e foco total. Quando a 10ª vaga fechar, esse bônus some — e não volta nessa turma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusV4;

import lucianeImg from "@/assets/luciane-portrait.jpg";

const stats = [
  { value: "10.000+", label: "profissionais executivos capacitados" },
  { value: "40+", label: "multinacionais atendidas" },
  { value: "12+", label: "países com alunos em liderança" },
  { value: "30", label: "anos dedicados a uma única missão" },
];

const AboutV2 = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-heading font-bold text-sm tracking-widest text-center mb-4">
          QUEM ESTÁ POR TRÁS DA PRESIDENT LANGUAGE
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Luciane Santos
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Head de Carreira e Internacionalização da President Language
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Há 30 anos, Luciane vive dentro do mundo corporativo internacional. Não como observadora — como quem prepara os profissionais que sentam na mesa de decisão.
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Com formação em Letras e Mestrado em Linguística Aplicada pela UFMG, além de especializações em Comunicação Internacional de Negócios pela ISA Irlanda e DOS University (Canadá), ela construiu um método que nasce da prática, não do livro didático.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center bg-background border-gradient-cyan rounded-xl p-4">
                  <p className="font-heading font-bold text-primary text-xl">{stat.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-background border-gradient-cyan rounded-xl p-6">
              <p className="text-foreground text-sm italic leading-relaxed">
                "Eu acompanhei na prática o que essa preparação pode fazer na vida dos nossos alunos. Não é teoria — é o que funciona em boardrooms reais, com executivos reais, em negócios reais."
              </p>
              <p className="text-primary font-heading font-semibold text-sm mt-3">— Luciane Santos</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden border-gradient-cyan card-glow max-w-sm">
              <img
                src={lucianeImg}
                alt="Luciane Santos - Head de Carreira e Internacionalização"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutV2;

import lucianeImg from "@/assets/luciane-about.webp";

const AboutV4 = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-heading font-bold text-sm tracking-widest text-center mb-12">
          QUEM ESTÁ POR TRÁS DA PRESIDENT LANGUAGE
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Photo */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden border-gradient-cyan card-glow w-full">
              <img
                src={lucianeImg}
                alt="Luciane Santos - Head de Carreira e Internacionalização"
                className="w-full h-[520px] object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Luciane Santos
            </h3>
            <p className="text-primary font-heading font-semibold text-sm mb-6">
              Head de Carreira e Internacionalização da President Language
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Há 30 anos, Luciane vive dentro do mundo corporativo internacional. Não como observadora, como quem prepara os profissionais que sentam na mesa de decisão.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Com formação em Letras e Mestrado em Linguística Aplicada pela UFMG, além de especializações em Comunicação Internacional de Negócios pela ISI Dublin na Irlanda e Dalhousie University no Canadá, ela construiu um método que nasce da prática, não do livro didático.
              </p>
            </div>

            {/* Quote */}
            <div className="bg-background border-gradient-cyan rounded-xl p-5">
              <p className="text-foreground text-sm italic leading-relaxed">
                "Eu acompanhei na prática o que essa preparação pode fazer na vida dos nossos alunos. Não é teoria, é o que funciona em boardrooms reais, com executivos reais, em negócios reais."
              </p>
              <p className="text-primary font-heading font-semibold text-sm mt-3">— Luciane Santos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutV4;

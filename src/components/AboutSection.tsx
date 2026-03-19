import lucianeImg from "@/assets/luciane-portrait.jpg";

const credentials = [
  "Head de Carreira e Internacionalização da President Language.",
  "Formação em Letras e Mestrado em Linguística Aplicada pela UFMG.",
  "Especializações em Comunicação Internacional de Negócios pela ISA Irlanda e DOS University (Canadá).",
  "30 anos de experiência capacitando mais de 10.000 profissionais executivos.",
  "Treinamentos realizados em mais de 40 empresas multinacionais.",
  "Alunos posicionados em cargos de liderança em 12+ países.",
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-heading font-bold text-sm tracking-widest text-center mb-4">
          QUEM ESTÁ POR TRÁS DESTE CURSO
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Luciane Santos
            </h3>
            <p className="text-muted-foreground text-sm mb-6">e a equipe da President Language</p>

            <ul className="space-y-3 mb-8">
              {credentials.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>

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

export default AboutSection;

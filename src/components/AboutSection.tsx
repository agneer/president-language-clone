import lucianeImg from "@/assets/luciane-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-primary mb-4">
          GLOBAL EXCHANGE
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Luciane Santos
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm mb-6">
              <li>• Head de Carreira e Internacionalização</li>
              <li>• Mestra em Linguística Aplicada pela UFMG</li>
              <li>• Especialista em Comunicação Internacional pela ISI – Trinity College, Dublin</li>
              <li>• Especialista em Business English pela Dalhousie University – Canadá</li>
            </ul>
            <p className="text-foreground text-sm leading-relaxed mb-4">
              Com mais de 30 anos de atuação no mercado global, Luciane já capacitou mais de 10 mil profissionais e executivos em mais de 40 empresas multinacionais que assumiram a liderança de projetos e negócios em diversos países.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Atualmente, dirige um ecossistema internacional com projetos de educação corporativa, networking empresarial, missões executivas para Harvard/MIT, Vale do Silício e China.
            </p>
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

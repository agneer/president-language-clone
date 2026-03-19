const ReflectionSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-6">
          UMA REFLEXÃO FINAL
        </p>
        <p className="text-foreground text-lg leading-relaxed mb-6">
          A cada semana, profissionais brasileiros com a mesma qualificação técnica que você estão sendo promovidos, convidados e disputados por empresas globais. A diferença entre eles e quem fica parado não é competência —{" "}
          <span className="text-primary font-semibold">é posicionamento e comunicação.</span>
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-6">
          A sua próxima apresentação internacional pode ser igual a todas as outras — ou pode ser a primeira em que você comanda a sala, prende atenção e é lembrado pelo impacto, não apenas pelo conteúdo.
        </p>
        <p className="text-foreground font-heading font-bold text-lg mb-8">
          Esse curso é o primeiro passo. E cá para nós, pode ser o passo mais estratégico que você dá na sua carreira esse ano.
        </p>

        <a
          href="#valor"
          className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          QUERO COMEÇAR AGORA → GARANTIR MINHA VAGA
        </a>
      </div>
    </section>
  );
};

export default ReflectionSection;

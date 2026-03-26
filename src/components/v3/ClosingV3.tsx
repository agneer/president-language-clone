const ClosingV3 = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-6">
          VOCÊ TEM DUAS OPÇÕES
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-6">
          Continuar improvisando e torcendo para que a próxima apresentação em inglês saia bem...
        </p>
        <p className="text-foreground text-lg font-heading font-bold leading-relaxed mb-4">
          Ou aprender o método certo e se tornar o profissional que todos param para ouvir —{" "}
          <span className="text-primary">em qualquer idioma.</span>
        </p>
        <p className="text-muted-foreground text-sm mb-10">
          Enquanto você demora a tomar atitude, outros profissionais estão conquistando as melhores oportunidades.
        </p>

        <a
          href="#oferta"
          className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          COMEÇAR AGORA → R$ 197
        </a>
      </div>
    </section>
  );
};

export default ClosingV3;

import lucianeImg from "@/assets/luciane-about.webp";

const stats = [
  { value: "30", label: "Anos de experiência" },
  { value: "10.000+", label: "Profissionais capacitados" },
  { value: "40+", label: "Multinacionais atendidas" },
  { value: "12+", label: "Países com alunos" },
];

const CredibilityV4 = () => {
  return (
    <section className="py-20 px-4 bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-lg md:text-xl lg:text-2xl italic text-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          "O problema não é que você não sabe inglês. É que você nunca teve um método  completo para desenvolver sua carreira internacional, usando o inglês como ferramenta, não como fim."
        </p>

        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
            <img src={lucianeImg} alt="Luciane Santos" className="w-full h-full object-cover object-top" />
          </div>
          <div className="text-left">
            <h4 className="text-foreground font-semibold">Luciane Santos</h4>
            <p className="text-primary text-sm">Head de Carreira e Internacionalização — President Language</p>
          </div>
        </div>

        <div className="flex justify-center gap-10 md:gap-12 mt-12 flex-wrap">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="text-muted-foreground text-xs tracking-wider uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mt-10 max-w-xl mx-auto leading-relaxed">
          Formação em Letras e Mestrado em Linguística Aplicada pela UFMG. Especializações em Comunicação Internacional de Negócios pela ISA Irlanda e DAL University, Canadá.
        </p>
      </div>
    </section>
  );
};

export default CredibilityV4;

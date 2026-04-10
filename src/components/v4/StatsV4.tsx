const stats = [
  { value: "30", label: "ANOS DE EXPERIÊNCIA" },
  { value: "10.000+", label: "PROFISSIONAIS CAPACITADOS" },
  { value: "40+", label: "MULTINACIONAIS ATENDIDAS" },
  { value: "12+", label: "PAÍSES COM ALUNOS" },
];

const StatsV4 = () => {
  return (
    <section className="py-10 px-4 bg-secondary border-y border-border">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="font-heading font-bold text-primary text-2xl md:text-3xl mb-1">{stat.value}</p>
            <p className="text-muted-foreground text-xs tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsV4;

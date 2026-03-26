const stats = [
  { value: "+30 anos", label: "de experiência no mercado global" },
  { value: "+10.000", label: "profissionais e executivos capacitados" },
  { value: "+40", label: "empresas multinacionais atendidas" },
  { value: "+12 países", label: "com alunos em liderança" },
];

const StatsV3 = () => {
  return (
    <section className="py-12 px-4 bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="font-heading font-bold text-primary text-2xl md:text-3xl mb-1">{stat.value}</p>
            <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsV3;

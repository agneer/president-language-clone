const stats = [
  { value: "+30 anos", label: "de experiência no mercado global" },
  { value: "+10.000", label: "profissionais e executivos globalizados" },
  { value: "+40", label: "empresas multinacionais atendidas" },
  { value: "+12 países", label: "com projetos e negócios" },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-primary mb-12">
        GLOBAL EXCHANGE
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">{stat.value}</p>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

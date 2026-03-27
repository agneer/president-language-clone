const videos = [
  { id: "mA1gOCqFsjs", title: "Depoimento 1" },
  { id: "IkooqlnWVDI", title: "Depoimento 2" },
  { id: "0yIKbPbMj7E", title: "Depoimento 3" },
];

const TestimonialsV3 = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary font-heading font-bold text-sm tracking-widest mb-4">
          DEPOIMENTOS
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12">
          Veja o que profissionais e executivos estão falando
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {videos.map((v, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border-gradient-cyan card-glow">
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-foreground font-heading font-bold text-lg">
          Você pode ser o próximo!
        </p>
      </div>
    </section>
  );
};

export default TestimonialsV3;

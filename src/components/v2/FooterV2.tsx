const FooterV2 = () => {
  return (
    <footer className="py-10 px-4 bg-secondary border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center">
            <span className="text-primary font-heading font-bold text-sm">PL</span>
          </div>
          <div>
            <p className="font-heading text-foreground tracking-[0.3em] text-xs font-semibold">PRESIDENT</p>
            <p className="font-heading text-muted-foreground tracking-[0.3em] text-[10px]">LANGUAGE</p>
          </div>
        </div>
        <p className="text-muted-foreground text-xs">
          © 2025 President Language | Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterV2;

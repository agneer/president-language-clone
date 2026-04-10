import plLogo from "@/assets/pl-logo-white.png";

const FooterV4 = () => {
  return (
    <footer className="py-10 px-4 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <img src={plLogo} alt="President Language" className="h-8 w-auto" />
        </div>
        <p className="text-muted-foreground text-xs opacity-50">
          President Language © 2026 · O maior programa de aceleração de carreira e internacionalização do país.
        </p>
      </div>
    </footer>
  );
};

export default FooterV4;

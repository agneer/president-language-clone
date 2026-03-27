import plLogo from "@/assets/pl-logo-white.png";

const FooterV3 = () => {
  return (
    <footer className="py-10 px-4 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <img src={plLogo} alt="President Language" className="h-8 w-auto" />
        </div>
        <p className="text-muted-foreground text-xs">
          © 2025 President Language | Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterV3;

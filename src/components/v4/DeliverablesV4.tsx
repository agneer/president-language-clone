import { BookOpen, Clock, Languages, FileText, Users, Map } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import React from 'react';

const items = [
  {
    title: "12 meses de acesso",
    icon: Clock,
    description: "Às aulas na plataforma digital, no seu ritmo.",
  },
  {
    title: "7 módulos completos",
    icon: BookOpen,
    description: "Do Mapeamento Executivo ao Acesso ao Mercado Global.",
  },
  {
    title: "Aulas em inglês com legenda",
    icon: Languages,
    description: "Treine vocabulário executivo enquanto aprende estratégia.",
  },
  {
    title: "Material de suporte em português",
    icon: FileText,
    description: "Inclui quiz de fixação ao final de cada módulo.",
  },
  {
    title: "Grupo estratégico no LinkedIn",
    icon: Users,
    description: "Comunidade de líderes, executivos e decisores globais.",
  },
  {
    title: "Roadmap Executivo",
    icon: Map,
    description: "Guia para a conquista de posições globais com ganhos acima de USD 30k/mês.",
  },
];

const DeliverablesV4 = () => {
  return (
    <section className="py-20 px-4 bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tudo que você recebe
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Cada entrega foi pensada para acelerar seu posicionamento no mercado global.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {items.map((feature, i) => (
            <AnimatedContainer key={i} delay={i * 0.08} className="h-full">
              <FeatureCard feature={feature} className="h-full" />
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<'div'>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default DeliverablesV4;

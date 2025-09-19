import { Sparkles } from "lucide-react";

const AdBanner = () => {
  return (
    <section className="py-8 px-6">
      <div className="relative">
        {/* Glowing Border Animation */}
        <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-sm animate-glow-pulse" />
        
        <div className="relative bg-glass-dark border border-glass-border rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-neon-gold animate-neon-flicker" size={24} />
            <span className="mx-2 text-neon-gold font-bold">PREMIUM LAUNCH</span>
            <Sparkles className="text-neon-gold animate-neon-flicker" size={24} />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Get 50% Off Premium Features
          </h3>
          <p className="text-muted-foreground mb-4">
            Limited time offer - Transform your future today
          </p>
          
          <div className="bg-gradient-secondary rounded-lg px-4 py-2 inline-block">
            <span className="text-black font-bold text-sm">Use Code: FUTURE50</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;
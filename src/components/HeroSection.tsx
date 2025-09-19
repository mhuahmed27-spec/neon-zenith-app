import heroBackground from "@/assets/hero-background.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-80 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full animate-float opacity-30" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-neon-purple/20 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-sm mx-auto">
        <h1 className="text-3xl font-black mb-4 text-foreground animate-slide-up">
          Welcome to{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-neon-flicker">
            WiseX
          </span>
        </h1>
        
        <p className="text-lg text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Your AI-powered success companion
        </p>
        
        <div className="flex items-center justify-center space-x-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-2 h-2 bg-neon-blue rounded-full animate-neon-flicker" />
          <div className="w-2 h-2 bg-neon-purple rounded-full animate-neon-flicker" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-neon-gold rounded-full animate-neon-flicker" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
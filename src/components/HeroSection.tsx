import heroBackground from "@/assets/hero-background.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground animate-slide-up">
          The Future of{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-neon-flicker">
            Success
          </span>
          {' '}in One App
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Transform your life with AI-powered mentorship, trading tools, and futuristic business solutions.
        </p>
        
        <Button 
          size="lg" 
          className="bg-gradient-primary hover:shadow-glow-blue text-xl px-8 py-4 rounded-2xl font-bold transition-all duration-300 animate-glow-pulse group"
          style={{ animationDelay: '0.6s' }}
        >
          Begin Your Transformation
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
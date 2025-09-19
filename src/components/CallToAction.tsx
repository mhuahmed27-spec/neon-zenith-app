import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Star } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Dramatic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-glow opacity-50 animate-rotate-slow" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-neon-purple/20 rounded-full animate-float" />
      </div>
      
      {/* Glowing Border Frame */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -inset-2 bg-gradient-primary rounded-3xl blur-xl animate-glow-pulse opacity-50" />
        
        <div className="relative bg-glass-dark/80 backdrop-blur-glass border border-glass-border rounded-3xl p-12 text-center">
          {/* Header with Icons */}
          <div className="flex items-center justify-center mb-6">
            <Star className="text-neon-gold animate-neon-flicker" size={24} />
            <Zap className="text-neon-blue mx-4 animate-glow-pulse" size={32} />
            <Star className="text-neon-gold animate-neon-flicker" size={24} />
          </div>
          
          {/* Main CTA Content */}
          <h2 className="text-2xl font-black text-foreground mb-4">
            Ready to{' '}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Transform Your Life?
            </span>
          </h2>
          
          <p className="text-base text-muted-foreground mb-6 max-w-sm mx-auto leading-relaxed">
            Start your journey to success with personalized AI guidance and powerful tools.
          </p>
          
          {/* Action Button */}
          <div className="flex items-center justify-center mb-6">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-blue text-lg px-8 py-4 rounded-2xl font-bold transition-all duration-300 animate-glow-pulse group w-full max-w-xs"
            >
              Get Started Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-glass-dark" />
                ))}
              </div>
              <span>10K+ Users</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex text-neon-gold mr-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span>4.9 Rating</span>
            </div>
            
            <div>
              <span className="text-neon-green">✓ No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
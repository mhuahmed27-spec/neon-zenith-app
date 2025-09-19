import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Zap, Star } from "lucide-react";

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
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Download Now –{' '}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Begin Your Transformation
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands who've already unlocked their potential. The future of success is waiting for you.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-blue text-xl px-10 py-6 rounded-2xl font-bold transition-all duration-300 animate-glow-pulse group w-full sm:w-auto"
            >
              <Download className="mr-3 group-hover:animate-bounce" size={24} />
              Download Free
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:shadow-glow-purple text-xl px-10 py-6 rounded-2xl font-bold transition-all duration-300 w-full sm:w-auto"
            >
              Watch Demo
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
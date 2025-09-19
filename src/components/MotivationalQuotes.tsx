import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const MotivationalQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
      text: "The future belongs to those who prepare for it today.",
      author: "Tesla Vision",
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      gradient: "from-neon-purple to-neon-gold"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      gradient: "from-neon-gold to-neon-cyan"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      gradient: "from-neon-cyan to-neon-blue"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-neon-blue/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-neon-purple/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon-gold/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Quote className="text-neon-gold mx-auto animate-neon-flicker" size={48} />
        </div>
        
        <div className="relative h-48 flex items-center justify-center">
          {quotes.map((quote, index) => {
            const isActive = index === currentQuote;
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  isActive 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <blockquote className={`text-2xl font-bold mb-6 bg-gradient-to-r ${quote.gradient} bg-clip-text text-transparent leading-relaxed`}>
                  "{quote.text}"
                </blockquote>
                <cite className="text-lg text-muted-foreground font-medium">
                  — {quote.author}
                </cite>
              </div>
            );
          })}
        </div>
        
        {/* Quote Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentQuote
                  ? 'bg-gradient-primary shadow-glow-blue animate-glow-pulse'
                  : 'bg-glass-border hover:bg-glass-light'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotivationalQuotes;
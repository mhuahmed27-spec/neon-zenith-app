import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";

const ShowcaseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const mockups = [
    {
      title: "Trading Dashboard",
      description: "Advanced analytics and real-time market insights",
      color: "neon-blue"
    },
    {
      title: "AI Fitness Coach", 
      description: "Personalized workout plans and progress tracking",
      color: "neon-purple"
    },
    {
      title: "Business Hub",
      description: "Startup tools and mentorship connections",
      color: "neon-gold"
    },
    {
      title: "Creative Studio",
      description: "Content creation and media editing suite",
      color: "neon-cyan"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % mockups.length
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [mockups.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mockups.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mockups.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Experience the <span className="text-neon-blue">Future</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Interactive 3D showcase of our revolutionary features
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Carousel Container */}
        <div className="relative h-96 flex items-center justify-center">
          {mockups.map((mockup, index) => {
            const isActive = index === currentIndex;
            const offset = index - currentIndex;
            
            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 transform ${
                  isActive 
                    ? 'scale-100 opacity-100 z-20' 
                    : 'scale-75 opacity-40 z-10'
                }`}
                style={{
                  transform: `translateX(${offset * 120}px) ${
                    isActive ? 'rotateY(0deg)' : 'rotateY(15deg)'
                  }`
                }}
              >
                {/* Phone Mockup */}
                <div className={`relative w-64 h-80 bg-glass-dark border-2 border-${mockup.color}/50 rounded-3xl p-4 shadow-glass backdrop-blur-glass`}>
                  {/* Glow Effect */}
                  <div className={`absolute -inset-2 bg-${mockup.color}/20 rounded-3xl blur-lg ${isActive ? 'animate-glow-pulse' : ''}`} />
                  
                  <div className="relative z-10 h-full">
                    {/* Phone Header */}
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-${mockup.color}/20 flex items-center justify-center`}>
                        <Smartphone className={`text-${mockup.color}`} size={20} />
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="space-y-4">
                      <div className={`h-3 bg-${mockup.color}/60 rounded animate-neon-flicker`} />
                      <div className={`h-2 bg-${mockup.color}/40 rounded w-3/4`} />
                      <div className={`h-2 bg-${mockup.color}/30 rounded w-1/2`} />
                      
                      <div className="grid grid-cols-2 gap-2 mt-6">
                        <div className={`h-16 bg-${mockup.color}/20 rounded-xl`} />
                        <div className={`h-16 bg-${mockup.color}/30 rounded-xl`} />
                      </div>
                      
                      <div className={`h-20 bg-gradient-to-r from-${mockup.color}/20 to-transparent rounded-xl mt-4`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Content Description */}
        <div className="text-center mt-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {mockups[currentIndex].title}
          </h3>
          <p className="text-muted-foreground">
            {mockups[currentIndex].description}
          </p>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-glass-dark border border-glass-border flex items-center justify-center hover:shadow-glow-blue transition-all duration-300"
          >
            <ChevronLeft className="text-neon-blue" size={20} />
          </button>
          
          <div className="flex space-x-2">
            {mockups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-neon-blue shadow-glow-blue' 
                    : 'bg-glass-border'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-glass-dark border border-glass-border flex items-center justify-center hover:shadow-glow-blue transition-all duration-300"
          >
            <ChevronRight className="text-neon-blue" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseCarousel;
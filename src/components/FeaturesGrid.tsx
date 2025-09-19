import { 
  Dumbbell, 
  Brain, 
  Users, 
  LineChart, 
  Target, 
  Lightbulb,
  CreditCard,
  Palette,
  BarChart3,
  Zap
} from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    { 
      icon: Dumbbell, 
      title: "Smart Gym Plans", 
      description: "AI-customized workouts that adapt to your progress",
      color: "neon-blue"
    },
    { 
      icon: Brain, 
      title: "AI Health Mentor", 
      description: "Personalized nutrition and wellness guidance",
      color: "neon-purple"
    },
    { 
      icon: Users, 
      title: "1-on-1 Mentorship", 
      description: "Connect with industry leaders and experts",
      color: "neon-gold"
    },
    { 
      icon: LineChart, 
      title: "Trading Journal", 
      description: "Advanced analytics like TradeZella pro tools",
      color: "neon-cyan"
    },
    { 
      icon: Target, 
      title: "Prop Firm Challenges", 
      description: "Master funded trading with guided strategies",
      color: "neon-blue"
    },
    { 
      icon: Lightbulb, 
      title: "Business Ideas", 
      description: "AI-powered startup concepts and validation",
      color: "neon-purple"
    },
    { 
      icon: CreditCard, 
      title: "UPI Banking", 
      description: "Seamless financial transactions and management",
      color: "neon-gold"
    },
    { 
      icon: Palette, 
      title: "Creative Tools", 
      description: "Photography, music, and content creation suite",
      color: "neon-cyan"
    },
  ];

  return (
    <section className="py-16 px-6 bg-glass-dark/30">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Zap className="text-neon-gold mr-2 animate-neon-flicker" size={28} />
          <h2 className="text-4xl font-bold text-foreground">
            Powerful <span className="text-neon-blue">Features</span>
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Cutting-edge tools designed to accelerate your success across every aspect of life
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group relative bg-glass-dark/50 border border-glass-border rounded-3xl p-8 hover:shadow-glass transition-all duration-500 cursor-pointer animate-slide-up backdrop-blur-glass"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Border Glow */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r from-${feature.color} to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500 blur-sm`} />
              
              <div className="relative z-10 flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-2xl bg-${feature.color}/20 border border-${feature.color}/40 flex items-center justify-center group-hover:animate-float transition-all duration-300`}>
                  <Icon size={28} className={`text-${feature.color} group-hover:animate-neon-flicker`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesGrid;
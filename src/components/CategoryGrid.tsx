import { 
  Dumbbell, 
  TrendingUp, 
  GraduationCap, 
  ShoppingCart, 
  Camera, 
  MoreHorizontal,
  Heart,
  Briefcase
} from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    { 
      icon: Heart, 
      title: "Fitness & Health", 
      description: "AI-powered wellness",
      gradient: "from-neon-blue to-neon-cyan"
    },
    { 
      icon: Briefcase, 
      title: "Business & Money", 
      description: "Financial mastery tools",
      gradient: "from-neon-purple to-neon-blue"
    },
    { 
      icon: GraduationCap, 
      title: "Investment Hub", 
      description: "Learn & earn smart",
      gradient: "from-neon-gold to-neon-purple"
    },
    { 
      icon: ShoppingCart, 
      title: "E-commerce Market", 
      description: "Next-gen shopping",
      gradient: "from-neon-cyan to-neon-gold"
    },
    { 
      icon: Camera, 
      title: "Lifestyle & Media", 
      description: "Creative excellence",
      gradient: "from-neon-blue to-neon-purple"
    },
    { 
      icon: MoreHorizontal, 
      title: "More Categories", 
      description: "Explore everything",
      gradient: "from-neon-purple to-neon-gold"
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Explore <span className="text-neon-blue">Categories</span>
        </h2>
        <p className="text-muted-foreground">
          Discover tools that transform your potential
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="group relative bg-glass-dark border border-glass-border rounded-2xl p-6 hover:shadow-glass transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:animate-float`}>
                  <Icon size={24} className="text-black" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-neon-blue transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryGrid;
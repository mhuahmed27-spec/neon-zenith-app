import { Home, Search, BarChart3, Settings, Zap } from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Explore", active: false },
    { icon: Zap, label: "Features", active: false },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-glass-dark/90 backdrop-blur-glass border-t border-glass-border">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-300 ${
                item.active
                  ? "bg-gradient-primary shadow-glow-blue text-primary-foreground"
                  : "text-muted-foreground hover:text-neon-blue"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
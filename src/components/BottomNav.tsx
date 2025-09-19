import { Home, Search, BarChart3, Settings, Video } from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { icon: Home, active: true },
    { icon: Search, active: false },
    { icon: Video, active: false },
    { icon: BarChart3, active: false },
    { icon: Settings, active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-glass-dark/90 backdrop-blur-glass border-t border-glass-border">
      <div className="flex items-center justify-around px-2 py-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                item.active
                  ? "bg-gradient-primary shadow-glow-blue text-primary-foreground"
                  : "text-muted-foreground hover:text-neon-blue"
              }`}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
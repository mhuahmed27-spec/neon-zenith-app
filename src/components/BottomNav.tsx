import { Home, Search, BarChart3, MessageCircle, Video } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: Home, path: "/", active: location.pathname === "/" },
    { icon: Search, path: "/search", active: location.pathname === "/search" },
    { icon: Video, path: "/videos", active: location.pathname === "/videos" },
    { icon: BarChart3, path: "/analytics", active: location.pathname === "/analytics" },
    { icon: MessageCircle, path: "/chat", active: location.pathname === "/chat" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-glass-dark/90 backdrop-blur-glass border-t border-glass-border">
      <div className="flex items-center justify-around px-2 py-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
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
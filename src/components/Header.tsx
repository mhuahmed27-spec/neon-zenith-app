import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass-dark/95 backdrop-blur-glass">
      <div className="flex items-center justify-between px-4 py-3 safe-area-inset-top">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-neon-blue animate-neon-flicker">
            WiseX
          </h1>
          <p className="text-xs text-muted-foreground">
            Success Platform
          </p>
        </div>
        
        <div className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-blue animate-glow-pulse cursor-pointer">
            <User size={18} className="text-primary-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
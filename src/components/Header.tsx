import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass-dark/80 backdrop-blur-glass border-b border-glass-border">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-neon-blue animate-neon-flicker">
            WiseX
          </h1>
          <p className="text-xs text-muted-foreground">
            Future Success Platform
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-blue animate-glow-pulse cursor-pointer">
            <User size={20} className="text-primary-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
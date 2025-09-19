import { Search as SearchIcon, TrendingUp, Clock, Filter } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const Search = () => {
  const trendingSearches = [
    "Workout routines",
    "Trading strategies", 
    "Business ideas",
    "Meditation techniques",
    "Nutrition plans"
  ];

  const recentSearches = [
    "Gym equipment",
    "Investment tips",
    "Content creation",
    "Productivity hacks"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-16 pb-20 px-6">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <SearchIcon className="text-neon-blue mr-3" size={28} />
            <h1 className="text-3xl font-bold">Search</h1>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full p-4 bg-glass-dark/50 border border-glass-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="text-neon-gold mr-2" size={20} />
            <h2 className="text-xl font-bold">Trending</h2>
          </div>
          <div className="space-y-2">
            {trendingSearches.map((search, index) => (
              <div
                key={index}
                className="p-3 bg-glass-dark/30 border border-glass-border rounded-xl hover:bg-glass-dark/50 transition-colors cursor-pointer"
              >
                <span className="text-foreground">{search}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <Clock className="text-neon-purple mr-2" size={20} />
            <h2 className="text-xl font-bold">Recent</h2>
          </div>
          <div className="space-y-2">
            {recentSearches.map((search, index) => (
              <div
                key={index}
                className="p-3 bg-glass-dark/30 border border-glass-border rounded-xl hover:bg-glass-dark/50 transition-colors cursor-pointer"
              >
                <span className="text-foreground">{search}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Search;
import { Video, Play, Clock, Eye, Heart } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const Videos = () => {
  const videos = [
    {
      title: "Morning Workout Routine",
      duration: "15:30",
      views: "12K",
      thumbnail: "bg-gradient-to-r from-neon-blue to-neon-purple"
    },
    {
      title: "Trading Masterclass",
      duration: "45:20", 
      views: "8.5K",
      thumbnail: "bg-gradient-to-r from-neon-gold to-neon-cyan"
    },
    {
      title: "Business Strategy Guide",
      duration: "22:10",
      views: "15K", 
      thumbnail: "bg-gradient-to-r from-neon-purple to-neon-gold"
    },
    {
      title: "Meditation & Mindfulness",
      duration: "30:45",
      views: "20K",
      thumbnail: "bg-gradient-to-r from-neon-cyan to-neon-blue"
    },
    {
      title: "Nutrition Fundamentals",
      duration: "18:25",
      views: "9.2K",
      thumbnail: "bg-gradient-to-r from-neon-gold to-neon-purple"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-16 pb-20 px-6">
        <div className="flex items-center mb-6">
          <Video className="text-neon-purple mr-3" size={28} />
          <h1 className="text-3xl font-bold">Videos</h1>
        </div>
        
        <div className="space-y-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-glass-dark/50 border border-glass-border rounded-2xl p-4 hover:bg-glass-dark/70 transition-all duration-300 cursor-pointer"
            >
              <div className="flex space-x-4">
                <div className={`w-24 h-16 ${video.thumbnail} rounded-xl flex items-center justify-center relative`}>
                  <Play className="text-white" size={24} />
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1">{video.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {video.views}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {video.duration}
                    </div>
                  </div>
                </div>
                
                <button className="p-2 rounded-full hover:bg-glass-dark/50 transition-colors">
                  <Heart size={20} className="text-muted-foreground hover:text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-2xl font-semibold hover:shadow-glow-blue transition-all duration-300">
            Load More Videos
          </button>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Videos;
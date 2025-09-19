import { ArrowLeft, Heart, MessageCircle, Share, Bookmark, MoreVertical, Play, Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Reels = () => {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const reels = [
    {
      id: 1,
      title: "Morning Workout Motivation 💪",
      username: "@fitnesscoach",
      avatar: "bg-gradient-to-r from-neon-blue to-neon-purple",
      likes: "12.3K",
      comments: "234",
      shares: "89",
      description: "Start your day with this 5-minute energy boost! #fitness #motivation",
      background: "bg-gradient-to-br from-neon-blue/20 to-neon-purple/20"
    },
    {
      id: 2,
      title: "Trading Tips That Changed My Life 📈",
      username: "@tradingpro",
      avatar: "bg-gradient-to-r from-neon-gold to-neon-cyan",
      likes: "8.7K",
      comments: "156",
      shares: "67",
      description: "3 simple rules that made me profitable. Save this! #trading #finance",
      background: "bg-gradient-to-br from-neon-gold/20 to-neon-cyan/20"
    },
    {
      id: 3,
      title: "Business Mindset Shift 🧠",
      username: "@entrepreneur",
      avatar: "bg-gradient-to-r from-neon-purple to-neon-gold",
      likes: "15.2K",
      comments: "445",
      shares: "123",
      description: "How I went from employee to CEO mindset #business #mindset",
      background: "bg-gradient-to-br from-neon-purple/20 to-neon-gold/20"
    },
    {
      id: 4,
      title: "5-Minute Meditation Magic ✨",
      username: "@mindfulnes",
      avatar: "bg-gradient-to-r from-neon-cyan to-neon-blue",
      likes: "9.8K",
      comments: "287",
      shares: "91",
      description: "Quick meditation for busy people. Try it now! #meditation #wellness",
      background: "bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20"
    }
  ];

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && currentVideo < reels.length - 1) {
      setCurrentVideo(prev => prev + 1);
    } else if (e.deltaY < 0 && currentVideo > 0) {
      setCurrentVideo(prev => prev - 1);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-white" />
          </button>
          <span className="text-white font-semibold">Reels</span>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Video Container */}
      <div
        ref={containerRef}
        onWheel={handleScroll}
        className="h-full transition-transform duration-300 ease-out"
        style={{ transform: `translateY(-${currentVideo * 100}vh)` }}
      >
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className={`relative h-screen w-full ${reel.background} flex items-center justify-center`}
            onClick={togglePlay}
          >
            {/* Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className={`w-32 h-32 ${reel.avatar} rounded-full flex items-center justify-center animate-pulse`}>
                <div className="text-white text-lg font-bold">Video</div>
              </div>
              
              {/* Play/Pause Button */}
              <button
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                  isPlaying ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {isPlaying ? (
                    <Pause size={24} className="text-white" />
                  ) : (
                    <Play size={24} className="text-white ml-1" />
                  )}
                </div>
              </button>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="flex justify-between items-end">
                {/* Left Content */}
                <div className="flex-1 mr-4">
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 ${reel.avatar} rounded-full border-2 border-white mr-3`}></div>
                    <span className="text-white font-semibold">{reel.username}</span>
                  </div>
                  
                  <h3 className="text-white text-lg font-bold mb-2">{reel.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{reel.description}</p>
                </div>

                {/* Right Actions */}
                <div className="flex flex-col items-center space-y-6">
                  <button className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <Heart size={24} className="text-white" />
                    </div>
                    <span className="text-white text-xs">{reel.likes}</span>
                  </button>
                  
                  <button className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <span className="text-white text-xs">{reel.comments}</span>
                  </button>
                  
                  <button className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <Share size={24} className="text-white" />
                    </div>
                    <span className="text-white text-xs">{reel.shares}</span>
                  </button>
                  
                  <button className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <Bookmark size={24} className="text-white" />
                    </div>
                  </button>
                  
                  <button className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <MoreVertical size={24} className="text-white" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="flex flex-col space-y-2">
                {reels.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1 h-8 rounded-full transition-colors duration-300 ${
                      idx === currentVideo ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
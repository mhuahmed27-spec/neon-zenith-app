import { BarChart3, TrendingUp, Target, Calendar, Award } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const Analytics = () => {
  const stats = [
    {
      title: "Workout Sessions",
      value: "24",
      change: "+12%",
      trend: "up",
      color: "neon-blue"
    },
    {
      title: "Trading Wins",
      value: "18",
      change: "+8%", 
      trend: "up",
      color: "neon-gold"
    },
    {
      title: "Learning Hours",
      value: "42h",
      change: "+15%",
      trend: "up", 
      color: "neon-purple"
    },
    {
      title: "Goals Completed",
      value: "7/10",
      change: "+3",
      trend: "up",
      color: "neon-cyan"
    }
  ];

  const achievements = [
    { title: "Fitness Streak", days: "7 days", icon: Award },
    { title: "Trading Master", level: "Level 3", icon: Target },
    { title: "Learning Path", progress: "85%", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-16 pb-20 px-6">
        <div className="flex items-center mb-6">
          <BarChart3 className="text-neon-cyan mr-3" size={28} />
          <h1 className="text-3xl font-bold">Analytics</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-glass-dark/50 border border-glass-border rounded-2xl p-4 hover:bg-glass-dark/70 transition-all duration-300"
            >
              <div className="text-center">
                <div className={`text-2xl font-bold text-${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {stat.title}
                </div>
                <div className="flex items-center justify-center text-xs">
                  <TrendingUp size={12} className="text-green-400 mr-1" />
                  <span className="text-green-400">{stat.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Award className="text-neon-gold mr-2" size={20} />
            Achievements
          </h2>
          <div className="space-y-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-glass-dark/50 border border-glass-border rounded-2xl p-4 flex items-center justify-between hover:bg-glass-dark/70 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center mr-3">
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.days || achievement.level || achievement.progress}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-glass-dark/30 border border-glass-border rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4 text-center">Weekly Progress</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Fitness Goals</span>
              <div className="w-32 bg-glass-dark rounded-full h-2">
                <div className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Trading Skills</span>
              <div className="w-32 bg-glass-dark rounded-full h-2">
                <div className="bg-gradient-to-r from-neon-gold to-neon-cyan h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Learning</span>
              <div className="w-32 bg-glass-dark rounded-full h-2">
                <div className="bg-gradient-to-r from-neon-purple to-neon-gold h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Analytics;
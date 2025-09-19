import { User, Settings, Edit3, Award, Calendar, Target, LogOut } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account.",
      });
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleMenuAction = (action: string) => {
    if (action === "logout") {
      handleSignOut();
    } else {
      toast({
        title: "Feature coming soon",
        description: `${action} functionality will be available soon.`,
      });
    }
  };

  const stats = [
    { label: "Workouts", value: "156", icon: Target },
    { label: "Streak", value: "12", icon: Award },
    { label: "Goals", value: "8/12", icon: Calendar }
  ];

  const menuItems = [
    { icon: Edit3, label: "Edit Profile", action: "edit" },
    { icon: Settings, label: "Settings", action: "settings" },
    { icon: Award, label: "Achievements", action: "achievements" },
    { icon: Target, label: "Goals", action: "goals" },
    { icon: LogOut, label: "Logout", action: "logout", danger: true }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-16 pb-20 px-6">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-blue">
              <User size={40} className="text-primary-foreground" />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-glass-dark border border-glass-border rounded-full flex items-center justify-center hover:bg-glass-dark/70 transition-colors">
              <Edit3 size={16} className="text-neon-blue" />
            </button>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {user?.user_metadata?.display_name || "User"}
          </h1>
          <p className="text-muted-foreground break-all">{user?.email}</p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-glass-dark/50 border border-glass-border rounded-2xl p-4 hover:bg-glass-dark/70 transition-all duration-300"
                >
                  <Icon size={20} className="text-neon-blue mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => handleMenuAction(item.action)}
                className={`w-full bg-glass-dark/50 border border-glass-border rounded-2xl p-4 flex items-center justify-between hover:bg-glass-dark/70 transition-all duration-300 ${
                  item.danger ? 'hover:border-red-500/30' : ''
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 ${
                    item.danger 
                      ? 'bg-red-500/20 border border-red-500/40' 
                      : 'bg-gradient-primary'
                  }`}>
                    <Icon size={20} className={item.danger ? 'text-red-400' : 'text-primary-foreground'} />
                  </div>
                  <span className={`font-medium ${item.danger ? 'text-red-400' : 'text-foreground'}`}>
                    {item.label}
                  </span>
                </div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
              </button>
            );
          })}
        </div>

        {/* Account Info */}
        <div className="mt-8 bg-glass-dark/30 border border-glass-border rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4">Account Information</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email</span>
              <span className="text-foreground break-all">{user?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Member Since</span>
              <span className="text-foreground">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                }) : 'Recently'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Plan</span>
              <span className="text-neon-gold font-semibold">Premium</span>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Profile;
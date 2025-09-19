import { MessageCircle, Send, Bot, User, Mic } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  
  const messages = [
    {
      type: "bot",
      content: "Hello! I'm your AI mentor. How can I help you today?",
      time: "10:30 AM"
    },
    {
      type: "user", 
      content: "I want to start a new workout routine",
      time: "10:32 AM"
    },
    {
      type: "bot",
      content: "Great! I'd be happy to help you create a personalized workout plan. What are your fitness goals?",
      time: "10:33 AM"
    },
    {
      type: "user",
      content: "I want to build muscle and lose some weight",
      time: "10:35 AM"
    },
    {
      type: "bot",
      content: "Perfect! For muscle building and fat loss, I recommend a combination of strength training and cardio. How many days per week can you commit to working out?",
      time: "10:36 AM"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 pb-24 px-6 flex flex-col">
        <div className="flex items-center mb-6">
          <MessageCircle className="text-neon-purple mr-3" size={28} />
          <h1 className="text-3xl font-bold">AI Mentor</h1>
        </div>
        
        <div className="flex-1 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-end space-x-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.type === 'user' 
                    ? 'bg-gradient-primary' 
                    : 'bg-glass-dark border border-glass-border'
                }`}>
                  {msg.type === 'user' ? (
                    <User size={16} className="text-primary-foreground" />
                  ) : (
                    <Bot size={16} className="text-neon-purple" />
                  )}
                </div>
                
                <div className={`p-3 rounded-2xl ${
                  msg.type === 'user'
                    ? 'bg-gradient-primary text-primary-foreground rounded-br-sm'
                    : 'bg-glass-dark/50 border border-glass-border text-foreground rounded-bl-sm'
                }`}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${
                    msg.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Fixed chat input at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-glass-border">
        <div className="bg-glass-dark/50 border border-glass-border rounded-2xl p-3">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none"
            />
            <button className="p-2 rounded-full hover:bg-glass-dark/50 transition-colors">
              <Mic size={20} className="text-muted-foreground hover:text-neon-blue" />
            </button>
            <button className="p-2 bg-gradient-primary rounded-full hover:shadow-glow-blue transition-all duration-300">
              <Send size={20} className="text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
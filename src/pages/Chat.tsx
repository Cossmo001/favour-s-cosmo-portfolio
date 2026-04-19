import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Send, Loader2, ArrowLeft, User, Clock, Check, CheckCheck } from "lucide-react";
import { format } from "date-fns";

const Chat = () => {
  const [searchParams] = useSearchParams();
  const trackingId = searchParams.get("id");
  const navigate = useNavigate();
  const [chat, setChat] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackingId) {
      navigate("/");
      return;
    }

    let channel: any;

    const init = async () => {
      const chatData = await fetchChatAndMessages();
      if (chatData?.id) {
        channel = subscribeToMessages(chatData.id);
      }
    };

    init();

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, [trackingId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchChatAndMessages = async () => {
    try {
      setLoading(true);
      const { data: chatData, error: chatError } = await supabase
        .from("portfolio_chats")
        .select("*")
        .eq("tracking_id", trackingId)
        .single();

      if (chatError) throw chatError;
      setChat(chatData);

      const { data: msgs, error: msgsError } = await supabase
        .from("portfolio_chat_messages")
        .select("*")
        .eq("chat_id", chatData.id)
        .order("created_at", { ascending: true });

      if (msgsError) throw msgsError;
      setMessages(msgs || []);
      return chatData;
    } catch (error) {
      console.error("Chat fetch error:", error);
      navigate("/");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const subscribeToMessages = (chatId: string) => {
    const channel = supabase
      .channel(`chat_${trackingId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "portfolio_chat_messages",
          filter: `chat_id=eq.${chatId}`,
        },
        (payload) => {
          setMessages((prev) => {
            // Prevent duplicates
            if (prev.some(m => m.id === payload.new.id)) return prev;
            return [...prev, payload.new];
          });
        }
      )
      .subscribe();

    return channel;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending || !chat) return;

    setSending(true);
    try {
      const { error } = await supabase
        .from("portfolio_chat_messages")
        .insert([
          {
            chat_id: chat.id,
            sender_type: "visitor",
            content: newMessage.trim(),
          },
        ]);

      if (error) throw error;
      setNewMessage("");
      
      // Update last message in chat
      await supabase
        .from("portfolio_chats")
        .update({ last_message: newMessage.trim(), updated_at: new Date().toISOString() })
        .eq("id", chat.id);

    } catch (error) {
      console.error("Send error:", error);
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-2xl mx-auto border-x border-border/50 shadow-2xl">
      {/* Header */}
      <header className="p-6 border-b border-border/50 flex items-center justify-between bg-background/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live Chat with Favour
            </h1>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Secured Session • {trackingId}
            </p>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, index) => {
          const isVisitor = msg.sender_type === "visitor";
          return (
            <div key={msg.id} className={`flex ${isVisitor ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] flex flex-col ${isVisitor ? "items-end" : "items-start"}`}>
                {!isVisitor && (
                  <div className="flex items-center gap-2 mb-2 ml-1">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-primary-foreground font-bold">FO</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Favour Olorunfemi</span>
                  </div>
                )}
                <div 
                  className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    isVisitor 
                      ? "bg-primary text-primary-foreground rounded-tr-none" 
                      : "bg-secondary text-foreground rounded-tl-none border border-border/50"
                  }`}
                >
                  {msg.content}
                </div>
                <div className={`flex items-center gap-2 mt-2 px-1 text-[10px] text-muted-foreground uppercase tracking-tighter`}>
                  <Clock className="w-2.5 h-2.5" />
                  {format(new Date(msg.created_at), "hh:mm a")}
                  {isVisitor && (
                    msg.is_read ? <CheckCheck className="w-3 h-3 text-primary" /> : <Check className="w-3 h-3" />
                  )}
                </div>
              </div>
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <footer className="p-6 border-t border-border/50 bg-background/80 backdrop-blur-md sticky bottom-0">
        <form onSubmit={handleSendMessage} className="relative">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={sending}
            className="w-full pl-6 pr-14 py-4 rounded-2xl bg-secondary border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
          />
          <button
            type="submit"
            disabled={sending || !newMessage.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </form>
        <p className="text-[9px] text-center mt-4 text-muted-foreground uppercase tracking-widest opacity-50">
          Messages are encrypted and visible only to Favour Olorunfemi
        </p>
      </footer>
    </div>
  );
};

export default Chat;
